import { ISettings, IOptions } from 'lib/types';
export declare type ActionType = {
    type: string;
    payload: any;
};
export interface IGlobalState {
    settings: ISettings;
    options: IOptions;
    highlightStyle: {
        color1: string;
        color2: string;
        brush: string;
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
//# sourceMappingURL=types.d.ts.map