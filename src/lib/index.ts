import EventEmitter from 'events';
import { Utils } from './Utils';

export class SpeechSynth extends EventEmitter {
	textContainer: HTMLElement;
	synth: SpeechSynthesis;
	utterance: SpeechSynthesisUtterance;
	timeoutRef: string | number | Timeout | undefined;
	seekTimeoutRef: string | number | Timeout | undefined;
	editTimeoutRef: string | number | Timeout | undefined;

	style: IStyle;

	settings: ISettings;
	events: Events;
	options: IOptions;
	state: IState;
	tagIndex: number;

	constructor(
		textContainer: HTMLElement,
		{
			/* Settings */
			language = 'en',
			/* Style */
			color1 = '#DEE',
			color2 = '#9DE',
			/* Ev handlers */
			onEnd = () => null,
			onStart = () => null,
			onPause = () => null,
			onResume = () => null,
			onReset = () => null,
			onBoundary = () => null,
			onTimeTick = () => null,
			onWordClick = () => null,
			onSeek = () => null,
			/* Options */
			isSSROn = false,
		}: Params
	) {
		super();

		/* Counters */
		this.tagIndex = 0;

		this.textContainer = textContainer;
		this.style = { color1, color2 };

		/* Instances */

		this.synth = window.speechSynthesis;
		this.utterance = new window.SpeechSynthesisUtterance();

		/* Timeouts */

		this.timeoutRef = undefined;
		this.seekTimeoutRef = undefined;
		this.editTimeoutRef = undefined;

		/* Utterance settings */

		this.settings = {
			pitch: 1,
			voiceURI: '',
			language: language,
			rate: 1,
			volume: 1,
		};

		/* Events */

		this.events = [
			{ type: 'boundary', handler: onBoundary },
			{ type: 'time-tick', handler: onTimeTick },
			{ type: 'word-click', handler: onWordClick },
			{ type: 'start', handler: onStart },
			{ type: 'pause', handler: onPause },
			{ type: 'resume', handler: onResume },
			{ type: 'reset', handler: onReset },
			{ type: 'seek', handler: onSeek },
			{ type: 'end', handler: onEnd },
		];

		/* Options */

		this.options = {
			isHighlightTextOn: true,
			isChunksModeOn: false,
			isPreserveHighlighting: true,
			isSSROn,
		};

		/* State */

		this.state = {
			isMobile: Utils.isMobile(),
			/* Internal properties */
			voice: {} as SpeechSynthesisVoice,
			voices: [] as SpeechSynthesisVoice[],
			/* UI */
			isLoading: true,
			/* Highlight & Reading time */
			currentWordIndex: 0,
			highlightedWords: [] as HTMLElement[],
			lastWordPosition: 0,
			numberOfWords: 0,
			wholeText: '',
			wholeTextArray: [],
			textRemaining: '',
			duration: 0,
			elapsedTime: 0,
			currentChunkIndex: 0,
			chunksArray: [],
			/* Controls  */
			isPaused: false,
			isPlaying: false,
		};
	}

	async init(): Promise<SpeechSynth> {
		/* Get voices */

		try {
			this.state.voices = await this.getVoices();
			this.state.voices = this.state.voices.filter((voice) =>
				voice.lang.startsWith(this.settings.language as string)
			);
			this.state.voice = this.state.voices[0];

			/* Add HTML highlight tags if SSR is off, in SSR the tags are added server side invoking the method ".addHTMLHighlightTags" 
    on stringified HTML */

			this.addHTMLHighlightTags(this.textContainer);

			/* Add basic style to the words that have just been tagged wit HTML tags */

			this.applyBasicStyleToWords(this.textContainer, '[data-id]');

			/* Init state properties */
			/* Get the total number of words to highlight */

			this.state.numberOfWords = this.retrieveNumberOfWords(
				this.textContainer,
				'[data-id]'
			);

			/* Get the whole raw text */

			this.state.wholeText = this.retrieveWholeText(
				this.textContainer,
				'[data-id]'
			);

			/* Get the total estimated duration of reading */

			this.state.duration = this.getTextDuration(
				this.state.wholeText,
				this.settings.rate as number
			);

			/* Get the array of words that will be read */

			this.state.wholeTextArray = this.retrieveWholeTextArray(
				this.textContainer,
				'[data-id]'
			) as string[];

			this.state.chunksArray = this.retrieveChunks();

			/* -------------------------------------------------------------------- */

			/* Attach click event listener to words */

			this.attachEventListenersToWords(this.textContainer, '[data-id]', {
				type: 'click',
				fn: (e) => {
					this.emit('word-click', this, e);
				},
			});

			/* Add class custom event listeners */

			this.addCustomEventListeners();

			/* -------------------------------------------------------------------- */

			/* Init utterance settings */

			this.initUtterance();

			return this;
		} catch (e) {
			console.log('Init error', e);
			return this;
		}
	}

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PRIVATE METHODS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	private initUtterance() {
		this.utterance.text = this.options.isChunksModeOn
			? this.state.chunksArray[this.state.currentChunkIndex].text
			: this.state.wholeText;
		this.utterance.lang = this.settings.language as string;
		this.utterance.voice = this.state.voice;
		this.utterance.pitch = this.settings.pitch as number;
		this.utterance.rate = this.settings.rate as number;
		this.utterance.volume = this.settings.volume as number;

		/* Add the boundary handler to the utterance to manage the highlight ( no mobile supported ) */
		this.utterance.onboundary = this.handleBoundary.bind(this);

		/* On mobile the end event is fired multiple times due to chunkification of text hence this is used to manage the highlight of chunks */
		this.utterance.onend = (e) => {
			console.log('Utterance end event');
			/* This prevents the execution of code if the end event is called after the reset method has been called */
			if (this.state.isPlaying === false && this.state.isPaused === false)
				return;
			/* Emit the end event only when the whole text has finished to be read */
			if (
				(!this.options.isChunksModeOn &&
					this.state.currentWordIndex >=
						this.state.wholeTextArray.length - 1) ||
				(this.options.isChunksModeOn &&
					this.state.currentChunkIndex >=
						this.state.chunksArray.length - 1)
			)
				return this.emit('end', this);

			/* Manage the chunkification for mobile devices */
			if (this.options.isChunksModeOn && this.state.isPlaying)
				this.handleChunkHighlighting();

			/* Finally play the nxt chunk */
			this.play('next-chunk-start');
		};
	}

	private highlightChunk(idx: number) {
		const length =
			this.state.currentWordIndex + this.state.chunksArray[idx].length;
		for (let i = this.state.currentWordIndex; i < length; i++)
			this.highlightText(i);
	}

	private retrieveChunks(): Chunk[] {
		let previousEnd = 0;
		return this.state.wholeText.split(/[.?!;]+(?=[\s\n])/).map((c, i) => {
			const length = c
				.trim()
				.split(' ')
				.filter((el) => el).length;

			const result: Chunk = {
				text: c + '.',
				length: length,
				start: previousEnd,
				end: previousEnd + length - 1,
				idx: i,
			};
			previousEnd = previousEnd + length;
			return result;
		});
	}

	private handleChunkHighlighting() {
		/* console.log(
			'Highlight chunk',
			this.state.chunksArray[this.state.currentChunkIndex],
			'Current word',
			this.state.wholeTextArray[this.state.currentWordIndex]
		); */

		// eslint-disable-next-line prettier/prettier
		const currentChunk =
			this.state.chunksArray[this.state.currentChunkIndex];
		// eslint-disable-next-line prettier/prettier
		const nextChunk =
			this.state.chunksArray[++this.state.currentChunkIndex];

		this.utterance.text = nextChunk.text;

		/* Keep the currentWordIndex in sync */
		this.state.currentWordIndex += currentChunk.length;

		/* Highlight the next chunk */

		this.highlightChunk(this.state.currentChunkIndex);
	}

	private scrollTo(idx: number): void {
		const el: HTMLElement | null = this.textContainer.querySelector(
			`[data-id="${idx}"]`
		);
		if (el)
			el.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
	}

	/* Timer */

	private timeCount(e: SpeechSynthesisEvent | null, frequency: number) {
		if (frequency % 10 !== 0)
			throw new Error('Frequency must be a multiple of 10');
		this.state.elapsedTime += frequency;

		if (this.state.elapsedTime % 1000 === 0) {
			/* Instructions executed every 1000ms when the reader is active */
			this.emit('time-tick', this, this.state.elapsedTime);
		}

		this.timeoutRef = setTimeout(
			this.timeCount.bind(this, e, frequency),
			frequency
		);
	}

	private pauseTimeCount() {
		clearTimeout(this.timeoutRef);
	}

	private resetTimeCount() {
		this.state.elapsedTime = 0;
		clearTimeout(this.timeoutRef);
	}

	private getRemainingText(idx: number): string {
		const length = this.state.wholeTextArray.length;
		/* Calculate and set the remaining text */
		return this.state.wholeTextArray.slice(idx, length + 1).join(' ');
	}

	private getCurrentChunkText() {
		return this.state.chunksArray[this.state.currentChunkIndex].text;
	}

	private handleBoundary(e: SpeechSynthesisEvent) {
		console.log('Boundary');
		/* Disable boundary if it's in chunk mode */
		if (this.options.isChunksModeOn) return;

		/* Highlight the current word */
		this.highlightText(this.state.currentWordIndex);

		/* Increase the current index of word read */

		this.state.currentWordIndex += 1;

		/* Synchronize the chunk index */

		if (
			/[.?!;]+/.test(
				this.state.wholeTextArray[this.state.currentWordIndex]
			)
		)
			this.state.currentChunkIndex++;

		/* Emit boundary event */

		this.emit('boundary', this, e);
	}

	/* VOICES ARE POPULATED ASYNCHRONOUSLY ON BROWSER LOAD */

	private getVoices(): Promise<SpeechSynthesisVoice[]> {
		return new Promise((resolve, reject) => {
			let id: Interval | null = null;
			try {
				id = setInterval(() => {
					if (this.synth.getVoices().length !== 0) {
						resolve(this.synth.getVoices());
						clearInterval(id as Interval);
					}
				}, 10);
			} catch (e) {
				reject(e);
				clearInterval(id as Interval);
			}
		});
	}

	private highlightText(wordIndex: number): void {
		/* Do not highlight if the option is disabled */
		if (!this.options.isHighlightTextOn) return;

		// eslint-disable-next-line prettier/prettier
		const wordToHighlight: HTMLElement | null =
			this.textContainer.querySelector(`[data-id="${wordIndex}"]`);

		if (!wordToHighlight) return;

		/* Update highlighted words array */

		this.state.highlightedWords.push(wordToHighlight);

		/* Calculate current word position */

		const position = wordToHighlight.getBoundingClientRect().x;

		/* Scroll to the right row position */

		if (position <= this.state.lastWordPosition) {
			this.scrollTo(this.state.currentWordIndex);

			/* Reset the row highlight */

			if (!this.options.isPreserveHighlighting) {
				this.state.highlightedWords.forEach((el) => {
					el.style.backgroundColor = '';
					el.style.boxShadow = '';
				});
				this.state.highlightedWords = [wordToHighlight];
			}
		}

		/* Update last word position */

		this.state.lastWordPosition = position;

		/* Apply highlight style */

		wordToHighlight.style.backgroundColor = this.style.color1 as string;
		wordToHighlight.style.boxShadow = `10px 0px 0px 0px ${this.style.color1}`;
		wordToHighlight.style.textDecoration = 'underline';
	}

	private resetHighlight() {
		this.state.highlightedWords.forEach((n) => {
			(n as HTMLElement).style.backgroundColor = '';
			(n as HTMLElement).style.boxShadow = '';
			(n as HTMLElement).style.textDecoration = 'none';

			this.state.highlightedWords = [];
		});
	}

	private addCustomEventListeners() {
		this.events.forEach((e) => {
			if (e.handler && Utils.isFunction(e.handler))
				this.on(e.type, e.handler.bind(this));
		});
	}

	private attachEventListenersToWords(
		node: Element,
		selector: string,
		{ type, fn }: { type: string; fn: (e: Event) => any }
	) {
		[...node.querySelectorAll(selector)].forEach((el) => {
			el.addEventListener(type, fn);
		});
	}

	private retrieveNumberOfWords(node: Element, selector: string) {
		return [...node.querySelectorAll(selector)].length;
	}

	private retrieveWholeText(node: Element, selector: string) {
		return [...node.querySelectorAll(selector)]
			.map((el) => {
				switch ((el as HTMLElement).dataset.type) {
					case 'LINK':
						return 'Link.';
					default:
						return el.textContent;
				}
			})
			.join(' ');
	}

	private retrieveWholeTextArray(node: Element, selector: string) {
		return [...node.querySelectorAll(selector)]
			.map((el) => {
				switch ((el as HTMLElement).dataset.type) {
					case 'LINK':
						return 'Link.';
					default:
						return el.textContent;
				}
			})
			.filter((el) => el && !Utils.isPunctuation(el)); // Exclude punctuation and "" empty string characters
	}

	private applyBasicStyleToWords(node: Element, selector: string) {
		[...node.querySelectorAll(selector)]
			.filter(
				(el) => el && !Utils.isPunctuation(el.textContent as string)
			)
			.forEach((el) => {
				if (!el) return;

				(el as HTMLElement).style.transition = 'all 0.4s';
			});
	}

	private getTextDuration(str: string, rate: number) {
		return (str.length * 100 * 1) / rate;
	}

	private getAverageTextElapsedTime(textArray: string[], idx: number) {
		const _text = textArray.slice(0, idx).join(' ');
		return (rate: number) => this.getTextDuration(_text, rate);
	}

	private delayRestart(type: string, delay: number) {
		return setTimeout(() => {
			this.synth.cancel();
			if (this.isPlaying()) this.play(type);
			if (this.isPaused()) {
				this.play(type).then(() => this.pause());
				this.pause();
			}
		}, 500);
	}

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PUBLIC METHODS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	editUtterance(obj: Partial<ISettings>) {
		/* Reset timeouts  */

		clearTimeout(this.timeoutRef);
		clearTimeout(this.editTimeoutRef);

		/* Update voice in the state if it changes */

		if (obj.voiceURI) {
			this.state.voice =
				this.state.voices.filter((v) => v.voiceURI === obj.voiceURI)
					.length > 0
					? this.state.voices.filter(
							(v) => v.voiceURI === obj.voiceURI
					  )[0]
					: this.state.voices[0];
			this.utterance.voice = this.state.voice as SpeechSynthesisVoice;
		}

		/* Recalculate total duration  and current elapsedTime when rate changes */

		if (obj.rate) {
			this.state.duration = this.getTextDuration(
				this.state.wholeText,
				obj.rate
			);

			/* Recalculate time elapsed */

			this.state.elapsedTime = this.getAverageTextElapsedTime(
				this.state.wholeTextArray,
				this.state.currentWordIndex
			)(this.settings.rate as number);

			this.emit('time-tick', this, this.state.elapsedTime);
		}

		/* Update utterance object, adding the remaining settings and remaining text left to be played */

		this.utterance = Object.assign(this.utterance, {
			...obj,
			text: this.options.isChunksModeOn
				? this.getCurrentChunkText()
				: this.getRemainingText(this.state.currentWordIndex),
		});

		/* Update instance settings object to keep them in sync with utterance settings */

		this.settings = { ...this.settings, ...obj };

		/*  Debounce to handle volume change properly */

		this.editTimeoutRef = this.delayRestart('edit-utterance', 500);
	}

	changeChunkMode(b: boolean) {
		clearTimeout(this.timeoutRef);
		this.options.isChunksModeOn = b;

		/* Since che chunk mode change triggers a restart of the utterance playing,
		make sure the current word index gets synchronized with the current chunk index start word,
		since the sentence is restarted from the first word of the sentence itself */

		// eslint-disable-next-line prettier/prettier
		this.state.currentWordIndex =
			this.state.chunksArray[this.state.currentChunkIndex].start;

		/* This manages the starting highlight if chunk mode is on or off:
			1. if it starts in single word mode and it gets changed to chunk mode, it highlights the whole chunk
			2. if it starts in chunk mode and it gets changed to single word mode, it resets all the current highlighthing and starts to highlight words singularly */

		if (this.options.isChunksModeOn)
			this.highlightChunk(this.state.currentChunkIndex);
		else this.resetHighlight();

		this.utterance.text = this.options.isChunksModeOn
			? this.getCurrentChunkText()
			: this.getRemainingText(this.state.currentWordIndex);
		this.delayRestart('edit-chunk-mode', 500);
	}

	/* Control methods */

	seekTo(idx: number) {
		this.emit('seek', this, idx);

		/* Cancel synth instance */

		// this.synth.cancel();

		/* Reset timeouts  */

		clearTimeout(this.timeoutRef);
		clearTimeout(this.seekTimeoutRef);

		/* Sync the current chunk in both cases that the seeking is performed in chunk or non chunk mode */

		const chunk = this.state.chunksArray.find(
			(c) => idx >= c.start && idx <= c.end
		) as Chunk;
		this.state.currentChunkIndex = chunk.idx as number;
		this.state.currentWordIndex = chunk.start;

		if (!this.options.isChunksModeOn) {
			/* Set the new text slice */

			this.state.textRemaining = this.getRemainingText(idx);

			/* Update current word index */
			/* Need to increase the index by 1 */

			this.state.currentWordIndex = idx;

			/* Update utterance instance with  the new text slice */

			this.utterance.text = this.state.textRemaining;

			/* Highlight */

			this.resetHighlight();
			this.highlightText(this.state.currentWordIndex);
		} else {
			this.utterance.text = chunk.text;

			/* Highlight */

			this.resetHighlight();
			this.highlightChunk(this.state.currentChunkIndex);
		}

		/* Recalculate time elapsed */

		this.state.elapsedTime = this.getAverageTextElapsedTime(
			this.state.wholeTextArray,
			this.state.currentWordIndex
		)(this.settings.rate as number);

		this.emit('time-tick', this, this.state.elapsedTime);

		this.seekTimeoutRef = this.delayRestart('seek', 500);
	}

	/* ------------------------------------------------------------------------------------ */
	/* Public Methods to control the player state */

	play(type?: string): Promise<null> {
		this.synth.cancel(); // Makes sure the queue is empty when starting
		clearTimeout(this.timeoutRef); // Makes sure to not trigger multiple timeouts

		this.synth.speak(this.utterance);

		this.state.isPaused = false;
		this.state.isPlaying = true;

		this.timeCount(null, 20);

		switch (type) {
			case 'start': {
				this.emit('start', this);
				return new Promise((resolve) => {
					this.utterance.onstart = (e) => {
						if (this.options.isChunksModeOn) this.highlightChunk(0);
						resolve(null);
					};
				});
			}
			case 'resume-chunk-mode': {
				return new Promise((resolve) => {
					this.utterance.onstart = (e) => {
						resolve(null);
					};
				});
			}
			case 'next-chunk-start': {
				return new Promise((resolve) => {
					this.utterance.onstart = (e) => {
						resolve(null);
					};
				});
			}
			case 'edit-utterance-settings': {
				return new Promise((resolve) => {
					this.utterance.onstart = (e) => {
						resolve(null);
					};
				});
			}
			case 'edit-chunk-mode': {
				return new Promise((resolve) => {
					this.utterance.onstart = (e) => {
						resolve(null);
					};
				});
			}
			default:
				return new Promise((resolve) => {
					this.utterance.onstart = (e) => {
						resolve(null);
					};
				});
		}
	}

	pause() {
		this.synth.pause();
		this.state.isPaused = true;
		this.state.isPlaying = false;
		this.emit('pause', this);

		/* Pause timer */
		this.pauseTimeCount();
	}

	resume() {
		if (!this.options.isChunksModeOn) this.synth.resume();
		else this.play('resume-chunk-mode');
		this.state.isPaused = false;
		this.state.isPlaying = true;
		this.emit('resume', this);

		/* Restart timer */

		this.timeCount(null, 20);
	}

	reset() {
		this.synth.cancel();
		this.resetHighlight();

		/* Reset timer */

		this.resetTimeCount();

		this.state = {
			...this.state,
			textRemaining: this.state.wholeText,
			currentWordIndex: 0,
			currentChunkIndex: 0,
			highlightedWords: [],
			lastWordPosition: 0,
			isPaused: false,
			isPlaying: false,
		};
		/* Reset the utterance state ( needed to reset the text utterance ) */
		this.initUtterance();
		/* Scroll back to top word */
		this.scrollTo(1);

		this.emit('reset', this);
	}

	/* State check */

	isPlaying() {
		return this.state.isPlaying;
	}

	isPaused() {
		return this.state.isPaused;
	}

	/* Static public methods */

	/*  Highlight  */

	addHTMLHighlightTags(
		node: Element,
		options: IHighlightOptions = { excludeCodeTags: true }
	) {
		const tree = [...node.childNodes];
		tree.forEach((el) => {
			console.log('Element', el, 'TYPE:', el.nodeType);

			if (el.nodeType === 1)
				this.addHTMLHighlightTags(el as Element, options);

			if (el.nodeType === 3) {
				if (el.textContent === ' ' || el.textContent === '') return;
				const wrapper = document.createElement('span');

				(el as Text).data
					.split('')
					.filter((el, i, arr) => {
						/* Dismiss empty strings or non valid elements */
						if (!el) return false;

						/* Get rid of spaces between words and punctuation */
						if (
							Utils.isSpace(el) &&
							Utils.isPunctuation(arr[i + 1])
						)
							return false;
						/* Get rid of multiple spaces to avoid inconsistencies */
						if (Utils.isSpace(el) && Utils.isSpace(arr[i + 1]))
							return false;

						return true;
					})
					/* Separate special characters and digit that will be read as single characters */
					.map((c, i, arr) => {
						if (Utils.isSpecialReadableCharacter(c))
							return ` ${c}  `;
						if (Utils.isNumber(c) && Utils.isNumber(arr[i + 1]))
							return ` ${c} `;
						return c;
					})
					.join('')
					.split(' ')
					.forEach((word, i, arr) => {
						if (!word) return;
						console.log(
							'Word',
							word,
							'Next',
							arr[i + 1],
							'Is next a word?',
							Utils.isWord(arr[i + 1])
						);

						/* If it's a parens or a punctuation or a special character it does not add an highlight data-id since those characters won't  be read */

						if (
							Utils.isSpecialUnreadableCharacter(word) ||
							Utils.isWordInsideAngularBrackets(word)
						) {
							const newEl = document.createTextNode(word + ' ');
							wrapper.appendChild(newEl);
						} else {
							/* In all other cases, which is, "plain words or slashes or any other readable character" we add the data-id attribute */

							const newEl = document.createElement('span');

							newEl.setAttribute(
								'data-id',
								(this.tagIndex++).toString()
							);
							newEl.setAttribute('data-type', 'WORD');

							/* Do not add a space after the word if it's a number or a special readable character or if the next word is not a plain word */
							if (
								Utils.isNumber(word) ||
								Utils.isSpecialReadableCharacter(word) ||
								Utils.isSpecialReadableCharacter(arr[i + 1])
							) {
								newEl.textContent = word;
							} else newEl.textContent = word + ' ';
							/* Add a space after the words that are Text words */

							wrapper.appendChild(newEl);
						}
					});
				node.replaceChild(wrapper, el);
			}
		});
	}

	static addHTMLHighlightTags_(
		node: Element | string,
		options: IHighlightOptions = { excludeCodeTags: true }
	) {
		/* Add utils method to Array */
		// eslint-disable-next-line no-extend-native
		Array.prototype.__join__ = Utils.__join__;

		let isCode = false;
		let index = 0;
		let code = '';

		try {
			if (typeof node === 'string') code = node;
			else if (
				typeof window !== 'undefined' &&
				node instanceof HTMLElement
			)
				code = node.innerHTML;

			code = code

				/* Parse all code to HTML to be able to keep the correct text formatting replacing new lines with <br/> */

				.split('\n')
				.join('<br/>')

				/* Fix extra spaces in () [] {} parens to avoid highlighting extra characters e.g. ( Hello world ) -> (Hello World) */

				.replace(
					/([([{]{1,1})\s*(.+?)\s*([)\]}]{1,1})/gm,
					(_, a, b, c) => `${a}${b}${c}`
				)

				/* Fix extra spaces before punctuation */

				.replace(/\s+([;.,:!?]+?)/gm, (_, b) => b)

				/* 	Add extra spaces to slashes so they are correctly highlighted since they are read as plain words.
					Omit slashes of HTML tags, and slashes of URLs after http(s): */

				.replace(/(?<!http[^\s]*|<)(\/)/gm, (_, b) => ` ${b} `)

				/* Separate html tags and add @@ symbol to spaces inside HTML tags */

				.replace(
					/<.+?>/gm,
					(match) => '#' + match.replace(/\s/gm, '@@') + '#'
				)

				/* Identify spaces inside pre tags as &nbsp; to keep the correct code indentation */

				/* .replace(/<pre.*>(.+)<\/pre>/gm, (match) =>
					match.replace(/\s/gm, '-')
				) */

				/*  Separate numbers from measures units e.g. 1.7k -> 1.7 k since the reader ha issues reading that format */

				.replace(/(\d+\.\d+)(\w*)/, (_, a, b) => a + ' ' + b)

				/* Read numbers as singular digits to prevent inconsistency e.g. ( some numbers trigger boundary during reading ) */

				.replace(/(\d(?=\d))/gm, (_, a) => `${a} `)

				/* Split on spaces and on pound sign ( pound sign identify HTML tags edges ) */

				.split(/[#\s]/)

				/* Delete non readable elements e.g. empty strings "", undefined, NaN, etc... */

				.filter((el) => el)

				/* Add the interactive HTML tags to the readable words */

				.map((el, i) => {
					// Exclude code tags
					if (options?.excludeCodeTags) {
						if (Utils.isCodeOpenTag(el)) {
							isCode = true;
							return el;
						}
						if (Utils.isCodeCloseTag(el)) {
							isCode = false;
							return el;
						}
						if (isCode) return el;
					}

					/* Prevent punctuation and html entities to be assigned an highlight span tag */

					if (
						Utils.isSpecialCharacter(el) ||
						Utils.isHTMLEntity(el) ||
						Utils.isParens(el) ||
						Utils.isPunctuation(el)
					)
						return el;

					/* Tag the element as a special Link element */
					if (Utils.isURL(el))
						return `<span data-type="LINK" data-id="${index++}">${el}</span>`;

					/* Wrap in a data-id html tag only plain words ( exclude html tags ) */

					if (!Utils.isTag(el)) {
						return `<span data-type="WORD" data-id="${index++}">${el}</span>`;
					}

					return el;
				})
				.__join__((s: string, i: number, arr: string[]): string => {
					/* There are certain situations where punctuation is separated from the previous word 
          			   (e.g. if the previous word is wrapped in a <strong> tag). In this case we join the word
         			   and the punctuation directly with no extra space. */

					if (Utils.isPunctuation(arr[i + 1])) {
						return '';
					}

					/* 	if (Utils.isPunctuation(s) || Utils.isSpecialCharacter(s))
						return ''; */

					/* Handle numbers with multiple digits, they have been splitted to single digits to avoid inconsistencies, 
					hence now they are rejoined with no extra spaces */

					if (
						Utils.isDigitTextContent(s) &&
						!Utils.isWordTextContent(arr[i + 1])
					) {
						return '';
					}

					/* Rejoin the slashes without extra spaces between them */
					if (Utils.isSlashTextContent(s)) return '';

					/* Add a Space between HTML tags, since that is interpreted as a &nbsp and the text content will render 
					a space between words. */

					return ' ';
				})
				.replace(/@@/gm, ' ');

			/* Apply the tags to the HTML DOM node if SSR is off */
			if (typeof window !== 'undefined' && node instanceof HTMLElement) {
				node.innerHTML = code;
			}
			return code;
		} catch (e) {
			throw new Error(e as string);
		}
	}
}
