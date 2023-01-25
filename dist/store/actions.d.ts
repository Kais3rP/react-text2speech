import { ISettings, IOptions, IStyle } from 'lib/types';
export declare const createAction: (type: string, payload?: any) => ActionType;
export declare const setIsReading: (payload: boolean) => ActionType;
export declare const setIsMinimized: (payload: boolean) => ActionType;
export declare const setIsVisible: (payload: boolean) => ActionType;
export declare const setIsLoading: (payload: boolean) => ActionType;
export declare const setIsOptionsVisible: (payload: boolean) => ActionType;
export declare const setVoices: (payload: IVoiceInfo[]) => ActionType;
export declare const setElapsedTime: (payload: number) => ActionType;
export declare const setNumberOfWords: (payload: number) => ActionType;
export declare const setCurrentWordIndex: (payload: number) => ActionType;
export declare const setDuration: (payload: number) => ActionType;
export declare const changeSettings: (payload: Partial<ISettings>) => ActionType;
export declare const changeOptions: (payload: Partial<IOptions>) => ActionType;
export declare const changeHighlightStyle: (payload: Partial<IStyle>) => ActionType;
//# sourceMappingURL=actions.d.ts.map