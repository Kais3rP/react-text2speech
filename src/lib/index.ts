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

	constructor(
		textContainer: HTMLElement,
		{
			/* Settings */
			pitch = 1,
			rate = 1,
			language = 'en',
			voiceURI = '',
			volume = 1,
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
			isHighlightTextOn = true,
			isPreserveHighlighting = true,
			isSSROn = false,
		}: Params
	) {
		super();
		this.textContainer = textContainer;
		this.style = { color1, color2 };

		/* Instances */

		this.synth = window.speechSynthesis;
		this.utterance = new window.SpeechSynthesisUtterance();

		/* Timeouts */

		this.timeoutRef = undefined;
		this.seekTimeoutRef = undefined;

		/* Utterance settings */

		this.settings = {
			pitch: pitch,
			voiceURI: voiceURI,
			language: language,
			rate: rate,
			volume: volume,
		};

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

		this.options = {
			isHighlightTextOn,
			isPreserveHighlighting,
			isSSROn,
		};

		/* State */

		this.state = {
			isMobile: false,
			/* Internal properties */
			voice: {} as SpeechSynthesisVoice,
			voices: [] as SpeechSynthesisVoice[],
			/* UI */
			isLoading: true,
			/* Highlight & Reading time */
			currentWordIndex: 1,
			highlightedWords: [] as HTMLElement[],
			lastWordPosition: 0,
			numberOfWords: 0,
			wholeText: '',
			wholeTextArray: [],
			textRemaining: '',
			duration: 0,
			elapsedTime: 0,
			/* Controls  */
			isPaused: false,
			isPlaying: false,
		};
	}

	async init(): Promise<SpeechSynth> {
		/* Check if it's a mobile device */
		this.state.isMobile = Utils.isMobile();
		/* Get voices */

		try {
			this.state.voices = await this.getVoices();
			this.state.voices = this.state.voices.filter((voice) =>
				voice.lang.startsWith(this.settings.language as string)
			);
			this.state.voice = this.state.voices[0];

			/* Add HTML highlight tags if SSR is off, in SSR the tags are added server side invoking the method ".addHTMLHighlightTags" 
    on stringified HTML */

			if (this.options.isHighlightTextOn && !this.options.isSSROn)
				SpeechSynth.addHTMLHighlightTags(this.textContainer);

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
		this.utterance.text = this.state.isMobile
			? this.state.wholeText.slice(0, 300)
			: this.state.wholeText;
		this.utterance.lang = this.settings.language as string;
		this.utterance.voice = this.state.voice;
		this.utterance.pitch = this.settings.pitch as number;
		this.utterance.rate = this.settings.rate as number;
		this.utterance.volume = this.settings.volume as number;

		/* Add the boundary handler to the utterance to manage the highlight ( no mobile supported ) */
		this.utterance.onboundary = this.handleBoundary.bind(this);
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

		/* Use this timer to perform the average highlighting in mobile devices */

		if (
			this.state.isMobile &&
			this.state.elapsedTime % (310 * (this.settings.rate as number)) ===
				0
		) {
			console.log('Event', e);
			this.handleBoundary(
				new SpeechSynthesisEvent('', {
					utterance: this.utterance,
				} as SpeechSynthesisEventInit)
			);
		} else if (this.state.elapsedTime % 1000 === 0) {
			/* Instructions executed every 1000ms when the reader is active */
			this.emit('time-tick', this, this.state.elapsedTime);
			console.log(this.synth, this.utterance);
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

	private handleBoundary(e: SpeechSynthesisEvent) {
		console.log('Handle boundary', this.state.currentWordIndex);
		/* Highlight the current word */

		this.highlightText(this.state.currentWordIndex);

		/* Increase the current index of word read */

		this.state.currentWordIndex += 1;

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
				});
				this.state.highlightedWords = [wordToHighlight];
			}
		}

		/* Update last word position */

		this.state.lastWordPosition = position;

		/* Apply highlight style */

		wordToHighlight.style.backgroundColor = this.style.color1 as string;
		wordToHighlight.style.boxShadow = `8px 0px 0px 0px ${this.style.color1}`;
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
			.map((el) => el.textContent)
			.join(' ');
	}

	private retrieveWholeTextArray(node: Element, selector: string) {
		return [...node.querySelectorAll(selector)]
			.map((el) => el.textContent)
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

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PUBLIC METHODS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	editUtterance(obj: Partial<ISettings>) {
		const isPlaying = this.isPlaying();
		const isPaused = this.isPaused();

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
			text: this.getRemainingText(this.state.currentWordIndex),
		});

		/* Update instance settings object to keep them in sync with utterance settings */

		this.settings = { ...this.settings, ...obj };

		/*  Debounce to handle volume change properly */

		this.editTimeoutRef = setTimeout(() => {
			this.synth.cancel();
			if (isPlaying) this.play();
			if (isPaused) {
				this.play().then(() => this.pause());
				this.pause();
			}
		}, 500);
	}

	/* Control methods */

	seekTo(index: number) {
		const isPlaying = this.isPlaying();
		const isPaused = this.isPaused();
		this.emit('seek', this, index);

		/* Cancel synth instance */

		// this.synth.cancel();

		/* Reset timeouts  */

		clearTimeout(this.timeoutRef);
		clearTimeout(this.seekTimeoutRef);

		/* Set the new text slice */

		this.state.textRemaining = this.getRemainingText(index);

		/* Update current word index */
		/* Need to increase the index by 1 */

		this.state.currentWordIndex = index + 1;

		/* Update utterance instance with  the new text slice */

		this.utterance.text = this.state.textRemaining;

		/* Highlight */

		this.resetHighlight();
		this.highlightText(this.state.currentWordIndex);

		/* Recalculate time elapsed */

		this.state.elapsedTime = this.getAverageTextElapsedTime(
			this.state.wholeTextArray,
			this.state.currentWordIndex
		)(this.settings.rate as number);

		this.emit('time-tick', this, this.state.elapsedTime);

		this.seekTimeoutRef = setTimeout(() => {
			this.synth.cancel();
			if (isPlaying) this.play();
			if (isPaused) {
				this.play().then(() => this.pause());
				this.pause(); // fire pause both sync and async to ensure the time counter does not get started since the play() method triggers the start event which is fired asynchronously
			}
		}, 500);
	}

	/* ------------------------------------------------------------------------------------ */
	/* Public Methods to control the player state */

	play(): Promise<null> {
		this.synth.speak(this.utterance);

		this.state.isPaused = false;
		this.state.isPlaying = true;

		/* Emit start event */

		this.emit('start', this);

		return new Promise((resolve) => {
			this.utterance.onstart = (e) => {
				this.timeCount(e, 20);
				resolve(null);
			};
		});
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
		this.synth.resume();
		this.state.isPaused = false;
		this.state.isPlaying = true;
		this.emit('resume');

		/* Restart timer */

		this.timeCount(null, 20);
	}

	reset() {
		this.synth.cancel();
		this.emit('reset');
		this.resetHighlight();

		/* Reset timer */

		this.resetTimeCount();

		this.state = {
			...this.state,
			textRemaining: this.state.wholeText,
			currentWordIndex: 1,
			highlightedWords: [],
			lastWordPosition: 0,
			isPaused: false,
			isPlaying: false,
		};
		/* Reset the utterance state ( needed to reset the text utterance ) */
		this.initUtterance();
		/* Scroll back to top word */
		this.scrollTo(1);
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

	static addHTMLHighlightTags(
		node: Element | string,
		options: IHighlightOptions = { excludeCodeTags: false }
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
				.split('\n')
				.join('<br/>')
				// Add br break line in place of \n
				.replace(/\(\s*(.+?)\s*\)/g, (_, b) => `(${b})`) // Fix extra spaces in () parens to avoid highlighting extra characters
				.replace(/\s+([;.,:]+?)/g, (_, b) => b) // Fix extra spaces in [] parens to avoid highlighting extra characters
				.replace(/(?<!<)(\/)/g, (_, b) => ` ${b} `) // Add extra spaces to slashes so they are correctly highlighted since they are read as plain words
				.replace(
					/<.+?>/g,
					(match) => '#' + match.replace(/\s/g, '@@') + '#'
				) // Separate html tags and add @@ symbol to spaces inside HTML tags
				.replace(/(\d+\.\d+)(\w*)/, (_, a, b) => a + ' ' + b) // Separate numbers from measures units e.g. 1.7k -> 1.7 k since the reader ha issues reading that format
				.split(/[#\s]/)
				.filter((el) => el)
				.map((el) => {
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

					// prevent punctuation and html entities to be assigned an highlight span tag

					if (Utils.isSpecialCharacter(el) || Utils.isHTMLEntity(el))
						return el;

					// wrap in a data-id html tag only plain words ( exclude html tags )

					if (!Utils.isTag(el)) {
						index++;
						return `<span data-id="${index}">${el}</span>`;
					}

					return el;
				})
				.__join__((_: string, i: number, arr: string[]): string => {
					/* There are certain situations where punctuation is separated from the previous word 
          (e.g. if the previous word is wrapped in a <strong> tag). In this case we join the word
          and the punctuation directly with no extra space. */
					if (Utils.isPunctuation(arr[i + 1])) {
						return '';
					}
					return ' '; // Space between HTML tags is interpreted as a &nbsp and the text content will render a space.
				})
				.replace(/@@/g, ' ');

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
