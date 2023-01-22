import React, { FC, Dispatch } from 'react';
import { SpeechSynth } from '../../lib';
import { ITextReaderProps } from './types';
interface IGlobalState {
    settings: ISettings;
    options: IOptions;
    isReading: boolean;
    voices: IVoiceInfo[];
    elapsedTime: number;
    isMinimized: boolean;
    isVisible: boolean;
    isSettingsVisible: boolean;
    numberOfWords: number;
    currentWordIndex: number;
    duration: number;
    isLoading: boolean;
}
interface IGlobalStateContext {
    state: IGlobalState;
    dispatch: Dispatch<ActionType>;
    reader: SpeechSynth | null;
}
export declare const GlobalStateContext: React.Context<IGlobalStateContext>;
declare const TextReader: FC<ITextReaderProps>;
export default TextReader;
//# sourceMappingURL=TextReader.d.ts.map