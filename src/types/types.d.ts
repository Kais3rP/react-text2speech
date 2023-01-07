/* eslint-disable no-unused-vars */
import { SpeechSynth } from '../lib';

declare global {
	type Params = IStyle & ISettings & IEvents & IOptions;

	interface IEvents {
		onEnd: (c: SpeechSynth, v?: any) => void;
		onStart: (c: SpeechSynth, v?: any) => void;
		onPause: (c: SpeechSynth, v?: any) => void;
		onResume: (c: SpeechSynth, v?: any) => void;
		onReset: (c: SpeechSynth, v?: any) => void;
		onBoundary: (c: SpeechSynth, v?: any) => void;
		onTimeTick: (c: SpeechSynth, v?: any) => void;
		onWordClick: (c: SpeechSynth, v?: any) => void;
		onSeek: (c: SpeechSynth, v?: any) => void;
	}

	interface IOptions {
		isHighlightTextOn?: boolean;
		isPreserveHighlighting?: boolean;
		isSSROn?: boolean;
	}

	interface ISettings {
		pitch?: number;
		rate?: number;
		language?: string;
		voiceURI?: string;
		volume?: number;
	}

	interface IEvent {
		type: string;
		handler: EventHandler;
	}

	type EventHandler = (c: SpeechSynth, v?: any) => void;

	type Events = IEvent[];

	interface IState {
		isMobile: boolean;
		/* Internal properties */
		voice: SpeechSynthesisVoice;
		voices: SpeechSynthesisVoice[];
		/* UI */
		isLoading: boolean;
		/* Highlight & Reading time */
		currentWordIndex: number;
		highlightedWords: HTMLElement[];
		lastWordPosition: number;
		numberOfWords: number;
		wholeText: string;
		wholeTextArray: string[];
		textRemaining: string;
		duration: number;
		elapsedTime: number;
		/* Controls  */
		isPaused: boolean;
		isPlaying: boolean;
	}

	interface IStyle {
		color1?: string;
		color2?: string;
	}

	type Interval = ReturnType<typeof setInterval>;
	type Timeout = ReturnType<typeof setTimeout>;

	interface IHighlightOptions {
		excludeCodeTags?: boolean;
	}

	/* Extend Array prototype */

	interface Array<T> {
		__join__(fn: (el: any, i: number, arr: T[]) => string): string;
	}

	interface IStyleOptions {
		primaryColor: string;
		secondaryColor: string;
		bgColor: string;
		textColor: string;
		highlightColor1: string;
		highlightColor2: string;
	}
}
