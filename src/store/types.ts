import { ISettings, IOptions } from 'lib/types';

export type ActionType = { type: string; payload: any };

export interface IGlobalState {
	settings: ISettings;
	options: IOptions;
	highlightStyle: {
		color1: string;
		color2: string;
	};
	isReading: boolean;
	voices: IVoiceInfo[];
	elapsedTime: number;
	isMinimized: boolean;
	isVisible: boolean;
	isOptionsVisible: boolean;
	numberOfWords: number;
	currentWordIndex: number;
	duration: number;
	isLoading: boolean;
}
