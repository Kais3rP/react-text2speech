import { ISettings, IOptions, IState, IStyle } from 'lib/types';
export declare type ActionType = {
    type: string;
    payload: any;
};
export interface IUIState {
    isMinimized: boolean;
    isVisible: boolean;
}
export interface IGlobalState {
    UIState: IUIState;
    settings: ISettings;
    options: IOptions;
    highlightStyle: IStyle;
    state: IState;
}
//# sourceMappingURL=types.d.ts.map