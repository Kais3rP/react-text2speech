import EventEmitter from 'events';
import { DOMUtils } from './DOMUtils';
import { TextUtils } from './TextUtils';
import {
	IStyle,
	ISettings,
	Events,
	IOptions,
	IState,
	Params,
	Chunk,
} from './types';
import { Utils } from './Utils';

export class SpeechSynth extends EventEmitter {
	textContainer: HTMLElement;
	synth: SpeechSynthesis;
	utterance: SpeechSynthesisUtterance;
	timeoutRef: string | number | Timeout | undefined;
	DOMUtils: DOMUtils;

	events: Events;

	style: IStyle;
	settings: ISettings;
	options: IOptions;
	state: IState;

	/* 
	The constructor only required @Param is the TextContainer HTMLElement, 
	the second @Param is an optional object and all its properties are optional as well 
	*/

	constructor(
		textContainer: HTMLElement,
		{
			/* Generic Settings */
			language = 'en',
			/* Style */
			color1 = '#DEE',
			color2 = '#9DE',
			/* Ev handlers */
			onStateChange = () => null,
			onSettingsChange = () => null,
			onOptionsChange = () => null,
			onStyleChange = () => null,
		}: Params = {
			/* Generic Settings */
			language: 'en',
			/* Style */
			color1: '#DEE',
			color2: '#9DE',
			/* Ev handlers */
			onStateChange: () => null,
			onSettingsChange: () => null,
			onOptionsChange: () => null,
			onStyleChange: () => null,
		}
	) {
		super();

		this.textContainer = textContainer;

		this.DOMUtils = new DOMUtils();

		/* Instances */

		this.synth = window.speechSynthesis;
		this.utterance = new window.SpeechSynthesisUtterance();

		/* Timeouts */

		this.timeoutRef = undefined;

		/* Events */

		this.events = [
			{ type: 'state-change', handlers: [onStateChange] },
			{ type: 'settings-change', handlers: [onSettingsChange] },
			{ type: 'options-change', handlers: [onOptionsChange] },
			{ type: 'style-change', handlers: [onStyleChange] },
		];

		/* @@@ Proxies @@@ */
		/* 
		Remember to perform the Reflection before anything else so they modifications to the instance properties
		are applied before any side effect is performed
		*/

		/* Settings (Utterance settings) */

		const settingsSetter = (obj: any, key: string | symbol, value: any) => {
			const result = Reflect.set(obj, key, value);
			this.clearTimeCount(); // Reset timer when a setting changes since the utterance has to be restarted
			switch (key) {
				case 'voiceURI':
					this.changeVoice();
					break;
				case 'rate':
					this.changeRate();
					break;
				case 'language':
					this.changeLanguage();
					break;
				default:
					this.utterance[key] = value;
			}
			/* Recalculate the remaining text on utterance settings change */
			this.getAndSetText();
			this.restart();
			this.emit('settings-change', this);
			return result;
		};

		this.settings = new Proxy(
			{
				pitch: 1,
				voiceURI: '',
				language: language,
				rate: 1,
				volume: 0.5,
			},
			{
				set: settingsSetter,
			}
		);

		/* Reader Options */

		const optionsSetter = (obj: any, key: string | symbol, value: any) => {
			const result = Reflect.set(obj, key, value);
			/* Extra actions to perform internally when an option gets changed */
			switch (key) {
				case 'isChunksModeOn':
					this.changeChunkMode();
					break;
				case 'isUnderlinedOn':
					this.applyStyleToHighlightedWords();
					break;
				case 'isBrushOn':
					this.applyStyleToHighlightedWords();
					break;
				case 'isHighlightTextOn':
					if (value) {
						if (this.options.isChunksModeOn)
							/* Highlight the current chunk */
							this.highlightChunk(this.state.currentChunkIndex);
					} else this.resetHighlight();
					break;
			}
			this.emit('options-change', this);
			return result;
		};

		this.options = new Proxy(
			{
				isHighlightTextOn: true,
				isChunksModeOn: Utils.isMobile(),
				isPreserveHighlighting: true,
				isUnderlinedOn: false,
				isBrushOn: true,
			},
			{
				set: optionsSetter,
			}
		);

		/* State */

		const stateSetter = (obj: any, key: string | symbol, value: any) => {
			const result = Reflect.set(obj, key, value);

			switch (key) {
				case 'elapsedTime':
					if (value % 1000 === 0)
						this.emit('state-change', this, key);
					return result;
				default:
			}

			this.emit('state-change', this, key);
			return result;
		};

		this.state = new Proxy(
			{
				isMobile: Utils.isMobile(),
				/* Internal properties */
				allVoices: [] as SpeechSynthesisVoice[],
				voices: [] as SpeechSynthesisVoice[],
				voice: {} as SpeechSynthesisVoice,
				/* UI */
				isLoading: false,
				/* Highlight & Reading time */
				currentWord: '',
				currentWordIndex: 0,
				currentWordProps: { charIndex: 0, charLength: 0 },
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
				isBrushAvailable: false,
				/* Controls  */
				isPaused: false,
				isReading: false,
				isUtteranceCanceled: false,
			},
			{
				set: stateSetter,
			}
		);

		const styleSetter = (obj: any, key: string | symbol, value: any) => {
			const result = Reflect.set(obj, key, value);
			this.applyStyleToHighlightedWords();
			this.emit('style-change', this);
			return result;
		};

		this.style = new Proxy(
			{ color1, color2, brush: 'brush-1' },
			{
				set: styleSetter,
			}
		);
	}

	public async init(): Promise<SpeechSynth> {
		/* Add custom methods to primitives */

		// eslint-disable-next-line no-extend-native
		Array.prototype.__join__ = Utils.__join__;

		/* Get voices */

		try {
			await this.retrieveAndSetVoices();

			this.DOMUtils.addHTMLHighlightTags(this.textContainer);

			DOMUtils.applyBasicStyleToWords(this.textContainer, '[data-id]');

			/* Init state properties */

			this.state.numberOfWords = DOMUtils.retrieveNumberOfWords(
				this.textContainer,
				'[data-id]'
			);

			this.state.wholeText = DOMUtils.retrieveWholeText(
				this.textContainer,
				'[data-id]'
			);

			this.state.textRemaining = this.state.wholeText;

			this.state.duration = TextUtils.getTextDuration(
				this.state.wholeText,
				this.settings.rate as number
			);

			this.state.wholeTextArray = DOMUtils.retrieveWholeTextArray(
				this.textContainer,
				'[data-id]'
			) as string[];

			this.state.chunksArray = TextUtils.retrieveChunks(
				this.state.wholeTextArray
			);

			this.state.isBrushAvailable = await Utils.isBrushAvailable(
				this.style.brush,
				this.style.color1
			);
			/* -------------------------------------------------------------------- */

			/* Attach click event listener to words */

			DOMUtils.attachEventListenersToWords(
				this.textContainer,
				'[data-id]',
				{
					type: 'click',
					fn: (e) => {
						const target: HTMLElement = e.target as HTMLElement;
						const idx: number = +(target.dataset.id as string);
						this.seekTo(idx);
					},
				}
			);

			/* Add class custom event listeners */

			DOMUtils.addCustomEventListeners(this.events, this);

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
			? this.getCurrentChunkText()
			: this.getRemainingText();
		this.utterance.lang = this.settings.language as string;
		this.utterance.voice = this.state.voice;
		this.utterance.pitch = this.settings.pitch as number;
		this.utterance.rate = this.settings.rate as number;
		this.utterance.volume = this.settings.volume as number;

		/* Add the boundary handler to the utterance to manage the highlight ( no mobile supported ) */
		this.utterance.onboundary = this.handleBoundary.bind(this);

		/* 
		When chunks mode is enabled this event is fired multiple times at the end of each chunk.
		Use this to manage chunk highlighting and extra logic that concerns chunks management
		*/
		this.utterance.onend = (e) => {
			console.log('End of chunk', e);
			/* Since synth.cancel() method triggers the "end" event on Firefox and other browsers, this prevents chunks mode bugs while using these browsers */
			if (this.state.isUtteranceCanceled) return;
			/* This prevents the execution of code if the end event is called in response to the reset method being called */

			if (this.state.isReading === false && this.state.isPaused === false)
				return;

			/* Emit the "end" event which signals the end of the WHOLE text, only when the whole text has finished to be read */

			if (
				(!this.options.isChunksModeOn &&
					this.state.currentWordIndex >=
						this.state.wholeTextArray.length - 1) ||
				(this.options.isChunksModeOn &&
					this.state.currentChunkIndex >=
						this.state.chunksArray.length - 1)
			)
				return this.emit('end', this);

			/* Handle the highlight options change dynamically */
			/* 
			If the isPreserveHighlighting option is disabled, 
			it has to reset the highlighting of the whole previous chunk while skipping to the next one 
			*/
			if (!this.options.isPreserveHighlighting) {
				this.resetHighlight();
			}

			/* Manage the highlighting of the next chunk just before it starts */

			if (this.options.isChunksModeOn && this.state.isReading)
				this.handleChunkHighlighting();

			/* Finally play the next chunk */

			this.play();
		};
	}

	/* 
	This method handles the DOM traversing to add the Highlightint tags to the readable elements and all the logic in it is responsible
	for how the text content appears visually
	e.g. alignment of punctuation, spaces, etc...
	*/

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	/*  Highlight Methods  */
	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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

		if (position <= this.state.lastWordPosition)
			DOMUtils.scrollTo(this.state.currentWordIndex);

		/* Reset the row highlight only if it's not in chunks mode.
		   In chunks mode, it has to be managed during the chunks switch ( in the "onend" handler) */

		if (
			!this.options.isPreserveHighlighting &&
			!this.options.isChunksModeOn
		) {
			this.resetHighlight();
			this.state.highlightedWords = [wordToHighlight];
		}

		/* Update last word position */

		this.state.lastWordPosition = position;

		/* Apply highlight style */

		this.applyStyleToWord(wordToHighlight);
	}

	private resetHighlight() {
		this.state.highlightedWords.forEach((n) => {
			(n as HTMLElement).style.backgroundImage = '';
			(n as HTMLElement).style.backgroundColor = '';
			(n as HTMLElement).style.color = '';
			(n as HTMLElement).style.textDecoration = 'none';

			this.state.highlightedWords = [];
		});
	}

	/* Chunk highlighting */

	private highlightChunk(idx: number) {
		const length =
			this.state.currentWordIndex + this.state.chunksArray[idx].length;
		for (let i = this.state.currentWordIndex; i < length; i++)
			this.highlightText(i);
	}

	private handleChunkHighlighting() {
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

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	/* Timer handling methods */
	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	private timeCount(e: SpeechSynthesisEvent | null, frequency: number) {
		if (frequency % 10 !== 0)
			throw new Error('Frequency must be a multiple of 10');
		this.state.elapsedTime += frequency;

		this.timeoutRef = setTimeout(
			this.timeCount.bind(this, e, frequency),
			frequency
		);
	}

	private clearTimeCount() {
		clearTimeout(this.timeoutRef);
	}

	private resetTimeCount() {
		this.state.elapsedTime = 0;
		this.clearTimeCount();
	}

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	/* Event Handlers */
	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	private handleBoundary(e: SpeechSynthesisEvent) {
		/* Disable boundary if it's in chunk mode */
		if (this.options.isChunksModeOn) return;

		this.state.currentWord =
			this.state.wholeTextArray[this.state.currentWordIndex];

		const previousWord =
			this.state.wholeTextArray[this.state.currentWordIndex - 1];

		/* This is very important since it ensures the sync among words that are read 
		and those that are highlighted is not messed up  */

		if (e.name !== 'word' || e.charLength === 0) return;

		/* 
		Disable boundary if the word is the repetition of the previous one, this happens in certain cases like numbers
		e.g. 1000 is spelled "one thousand" even if it's just one word, hence the boundary is fired twice and dates.
		This increase consistency in visual highlighting and audio sync.
		*/

		if (
			(TextUtils.isNumber(previousWord) ||
				TextUtils.isValidDate(previousWord)) &&
			e.charIndex === this.state.currentWordProps.charIndex &&
			e.charLength === this.state.currentWordProps.charLength
		)
			return;

		/* Sync current word props */
		this.state.currentWordProps = {
			charIndex: e.charIndex,
			charLength: e.charLength,
		};

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

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	/* Manage voices retrieval and setting - Voices retrieval is asynchronous since they are populated asynchronously on browser */
	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	private filterVoices(
		voices: SpeechSynthesisVoice[]
	): SpeechSynthesisVoice[] {
		console.log(voices);
		return voices.filter((voice) =>
			voice.lang.startsWith(this.settings.language as string)
		);
	}

	private getAllVoices(): Promise<SpeechSynthesisVoice[]> {
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

	private updateVoices() {
		this.state.voices = this.filterVoices(this.state.allVoices);
		this.state.voice = this.state.voices[0];
		this.settings.voiceURI = this.state.voice?.voiceURI || '';
	}

	private async retrieveAndSetVoices() {
		this.state.allVoices = await this.getAllVoices();
		this.updateVoices();
	}

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	/* Style methods */
	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	private applyStyleToWord(el: HTMLElement) {
		const URL = Utils.getBrushURL(this.style.brush, this.style.color1).css;

		el.style.backgroundImage =
			this.state.isBrushAvailable && this.options.isBrushOn
				? URL
				: 'none';
		el.style.backgroundColor =
			this.state.isBrushAvailable && this.options.isBrushOn
				? 'transparent'
				: this.style.color1;

		el.style.color = this.style.color2 as string;
		el.style.textDecoration = this.options.isUnderlinedOn
			? 'underline'
			: 'none';
	}

	private applyStyleToHighlightedWords() {
		this.state.highlightedWords.forEach((w) => this.applyStyleToWord(w));
	}

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	/* Private handlers for proxy traps */
	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	private changeChunkMode() {
		this.clearTimeCount();

		/* Since che chunk mode change triggers a restart of the utterance playing,
		make sure the current word index gets synchronized with the current chunk index start word,
		since the sentence is restarted from the first word of the sentence itself */

		// eslint-disable-next-line prettier/prettier
		this.state.currentWordIndex =
			this.state.chunksArray[this.state.currentChunkIndex].start;

		/* This manages the starting highlight if chunk mode is on or off:
			1. if it starts in single word mode and it gets changed to chunk mode, it highlights the whole chunk
			2. if it starts in chunk mode and it gets changed to single word mode, it resets all the current highlighthing and starts to highlight words singularly */

		if (this.options.isChunksModeOn) {
			this.utterance.text = this.getCurrentChunkText();
			this.highlightChunk(this.state.currentChunkIndex);
		} else {
			this.getAndSetText();
			this.resetHighlight();
		}

		this.restart();
	}

	private changeVoice() {
		const voice =
			this.state.voices.find(
				(v) => v.voiceURI === this.settings.voiceURI
			) || this.state.voices[0];
		this.state.voice = voice;
		this.utterance.voice = voice as SpeechSynthesisVoice;
	}

	private changeRate() {
		this.state.duration = TextUtils.getTextDuration(
			this.state.wholeText,
			this.settings.rate
		);

		this.state.elapsedTime = TextUtils.getAverageTextElapsedTime(
			this.state.wholeTextArray,
			this.state.currentWordIndex
		)(this.settings.rate as number);
		this.utterance.rate = this.settings.rate;
		this.emit('time-tick', this, this.state.elapsedTime);
	}

	private async changeLanguage() {
		this.updateVoices();
	}

	private getRemainingText(): string {
		const length = this.state.wholeTextArray.length;
		/* Calculate and set the remaining text */
		return this.state.wholeTextArray
			.slice(this.state.currentWordIndex, length + 1)
			.__join__((el, i, arr) => {
				if (
					TextUtils.isDot(arr[i + 1] as string) ||
					TextUtils.isDot(el)
				) {
					return '';
				} else return ' ';
			});
	}

	private getCurrentChunkText() {
		return this.state.chunksArray[this.state.currentChunkIndex]?.text;
	}

	private getAndSetText() {
		this.state.textRemaining = this.getRemainingText();
		this.utterance.text = this.state.textRemaining;
	}

	private delayRestart(delay: number) {
		return setTimeout(() => {
			this.cancel();
			if (this.isReading()) this.play();
			if (this.isPaused()) {
				this.play().then(() => this.pause());
				this.pause();
			}
		}, 500);
	}

	private restart() {
		this.cancel();
		if (this.isReading()) this.play();
		if (this.isPaused()) {
			this.play().then(() => this.pause());
			this.pause();
		}
	}

	/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PUBLIC METHODS - EXPOSED API @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

	/* Control methods */

	seekTo(idx: number) {
		console.log('Seek to', idx);
		/* Reset timeouts  */

		this.clearTimeCount();

		/* Sync the current chunk in both cases that the seeking is performed in chunk or non chunk mode */

		const chunk = this.state.chunksArray.find(
			(c) => idx >= c.start && idx <= c.end
		) as Chunk;

		this.state.currentChunkIndex = chunk.idx as number;

		if (!this.options.isChunksModeOn) {
			/* Update current word index */

			this.state.currentWordIndex = idx;

			/* Set the new text slice */

			this.getAndSetText();

			/* Highlight */

			this.resetHighlight();
			this.highlightText(this.state.currentWordIndex);
		} else {
			/* In Chunks mode sync the current word index with the start of the chunk */
			this.state.currentWordIndex = chunk.start;
			this.utterance.text = chunk.text;

			/* Highlight */

			this.resetHighlight();
			this.highlightChunk(this.state.currentChunkIndex);
		}

		/* Recalculate time elapsed */

		this.state.elapsedTime = TextUtils.getAverageTextElapsedTime(
			this.state.wholeTextArray,
			this.state.currentWordIndex
		)(this.settings.rate as number);

		this.emit('time-tick', this, this.state.elapsedTime);
		this.restart();
	}

	/* ------------------------------------------------------------------------------------ */
	/* Public Methods to control the player state */
	/* ------------------------------------------------------------------------------------ */

	play(): Promise<null> {
		this.cancel(); // Makes sure the queue is empty when starting
		this.clearTimeCount(); // Makes sure to not trigger multiple timeouts

		this.synth.speak(this.utterance);

		this.state.isPaused = false;
		this.state.isReading = true;
		this.state.isLoading = true;

		return new Promise((resolve) => {
			this.utterance.onstart = (e) => {
				console.log('On start');
				/* Highlight the first chunk on the first start if it's chunks mode ON / mobile */
				if (this.options.isChunksModeOn) this.highlightChunk(0);
				this.state.isLoading = false;
				this.timeCount(null, 20);
				resolve(null);
			};
		});
	}

	pause() {
		this.synth.pause();
		this.state.isPaused = true;
		this.state.isReading = false;
		this.emit('pause', this);

		/* Pause timer */
		this.clearTimeCount();
	}

	resume() {
		if (!this.options.isChunksModeOn) this.synth.resume();
		else this.play();
		this.state.isPaused = false;
		this.state.isReading = true;
		this.emit('resume', this);

		/* Restart timer */

		this.timeCount(null, 20);
	}

	cancel() {
		this.synth.cancel();
		this.state.isUtteranceCanceled = true;
		setTimeout(() => (this.state.isUtteranceCanceled = false), 1000);
	}

	reset() {
		this.cancel();
		this.resetHighlight();

		/* Reset timer */

		this.resetTimeCount();

		/* State props */

		const statePropsToReset = {
			textRemaining: this.state.wholeText,
			currentWordIndex: 0,
			currentChunkIndex: 0,
			highlightedWords: [],
			lastWordPosition: 0,
			isPaused: false,
			isReading: false,
			isUtteranceCanceled: false,
		};
		for (const entry of Object.entries(statePropsToReset))
			this.state[entry[0]] = entry[1];

		/* Settings props  */

		const settingsPropsToReset = {
			pitch: 1,
			rate: 1,
			volume: 0.5,
		};

		for (const entry of Object.entries(settingsPropsToReset))
			this.settings[entry[0]] = entry[1];

		/* Reset the utterance state ( needed to reset the text utterance ) */

		this.initUtterance();

		/* Scroll back to top word */

		DOMUtils.scrollTo(1);

		this.emit('reset', this);
	}

	/* Utility getters */

	isReading() {
		return this.state.isReading;
	}

	isPaused() {
		return this.state.isPaused;
	}
}
