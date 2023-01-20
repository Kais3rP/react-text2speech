/* eslint-disable no-unused-vars */
import { SpeechSynth } from '../lib';

declare global {
	type Params = Partial<IEvents> &
		Partial<IStyle> &
		Partial<IGenericSettings>;

	interface IGenericSettings {
		language: string;
	}

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
		isHighlightTextOn: boolean;
		isPreserveHighlighting: boolean;
		isChunksModeOn: boolean;
	}

	interface ISettings {
		pitch: number;
		rate: number;
		language: string;
		voiceURI: string;
		volume: number;
	}

	interface IEvent {
		type: string;
		handler: EventHandler;
	}

	type EventHandler = (c: SpeechSynth, v?: any) => void;

	type Events = IEvent[];

	type Chunk = {
		text: string;
		length: number;
		start: number;
		end: number;
		idx: number;
	};

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
		currentChunkIndex: number;
		chunksArray: Chunk[];
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
