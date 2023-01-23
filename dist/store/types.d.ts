import { ISettings, IOptions } from 'lib/types';
export declare type ActionType = {
    type: string;
    payload: any;
};
export interface IGlobalState {
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
//# sourceMappingURL=types.d.ts.map