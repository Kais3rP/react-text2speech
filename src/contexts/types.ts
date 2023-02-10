import { SpeechSynth } from 'lib';
import { IState } from 'lib/types';
import { Dispatch } from 'react';
import { IGlobalState, IUIState } from 'store/types';

export type IBoundState = IUIState & Pick<IState, 'isReading' | 'isLoading'>;

export interface IBoundHandlers {
	play: () => void;
	pause: () => void;
	showReader: () => void;
	hideReader: () => void;
	minimizeReader: () => void;
	maximizeReader: () => void;
}

export type BindReader = (state: IBoundState, handlers: IBoundHandlers) => void;

/* Contexts */

export interface IStoreContext {
	state: IGlobalState;
	dispatch: Dispatch<ActionType>;
}

export interface IReaderContext {
	reader: SpeechSynth;
}

export interface IMainPropsContext {
	options: { language: string };
	styleOptions: IStyleTheme;
	textContainer: HTMLElement;
	bindReader?: BindReader;
}

/* Providers */

export interface IStoreProviderProps {
	children: JSX.Element | string;
}

export interface IMainPropsProviderProps {
	children: JSX.Element | string;
	value: IMainPropsContext;
}

export interface IReaderProviderProps {
	children: JSX.Element | string;
}
