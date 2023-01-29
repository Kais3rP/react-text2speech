/* eslint-disable no-unused-vars */
import { SpeechSynth } from '../lib';

declare global {
	type Interval = ReturnType<typeof setInterval>;
	type Timeout = ReturnType<typeof setTimeout>;

	/* Extend Array prototype */

	interface Array<T> {
		__join__(fn: (el: any, i: number, arr: T[]) => string): string;
	}

	interface IStyleTheme {
		primaryColor: string;
		secondaryColor: string;
		bgColor: string;
		textColor: string;
		highlightColor1: string;
		highlightColor2: string;
	}

	interface IVoiceInfo {
		name: string;
		value: string;
	}

	/* Store */

	type ActionType = { type: string; payload: any };
}
