import { SpeechSynth } from 'lib';
import { Dispatch } from 'react';
import { IGlobalState } from 'store/types';
export declare type IBoundState = Pick<IGlobalState, 'isVisible' | 'isMinimized' | 'isReading' | 'isLoading'>;
export interface IBoundHandlers {
    play: () => void;
    pause: () => void;
    showReader: () => void;
    hideReader: () => void;
    minimizeReader: () => void;
    maximizeReader: () => void;
}
export declare type BindReader = (state: IBoundState, handlers: IBoundHandlers) => void;
export interface IStoreContext {
    state: IGlobalState;
    dispatch: Dispatch<ActionType>;
}
export interface IReaderContext {
    reader: SpeechSynth | null;
}
export interface IMainPropsContext {
    options: {
        language: string;
    };
    styleOptions: IStyleOptions;
    textContainer: HTMLElement;
    bindReader: BindReader;
}
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
//# sourceMappingURL=types.d.ts.map