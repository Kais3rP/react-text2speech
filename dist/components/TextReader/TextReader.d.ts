import React, { FC, Dispatch } from 'react';
import { SpeechSynth } from '../../lib';
import { ITextReaderProps } from './types';
interface IGlobalState {
    isReading: boolean;
    rate: string;
    voice: string;
    voices: IVoiceInfo[];
    volume: string;
    elapsedTime: number;
    isPreserveHighlighting: boolean;
    isMinimized: boolean;
    isVisible: boolean;
    isSettingsVisible: boolean;
    numberOfWords: number;
    currentWordIndex: number;
    duration: number;
    isLoading: boolean;
    isHighlightTextOn: boolean;
    isChunksModeOn: boolean;
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