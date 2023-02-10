import { ISettings, IOptions, IState, IStyle } from 'lib/types';

export type ActionType = { type: string; payload: any };

export interface IUIState {
	isMinimized: boolean;
	isVisible: boolean;
	isDark: boolean;
}

export interface IError {
	message: string;
	object: Error;
}

export interface IGlobalState {
	UIState: IUIState;
	settings: ISettings;
	options: IOptions;
	highlightStyle: IStyle;
	state: IState;
	error: IError | null;
}
