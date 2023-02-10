import { IGlobalState } from './types';
export declare const globalState: IGlobalState;
export declare const rootReducer: (state: IGlobalState, action: ActionType) => {
    UIState: any;
    settings: import("../lib/types").ISettings;
    options: import("../lib/types").IOptions;
    highlightStyle: import("../lib/types").IStyle;
    state: import("../lib/types").IState;
    error: import("./types").IError | null;
} | {
    state: any;
    UIState: import("./types").IUIState;
    settings: import("../lib/types").ISettings;
    options: import("../lib/types").IOptions;
    highlightStyle: import("../lib/types").IStyle;
    error: import("./types").IError | null;
} | {
    settings: any;
    UIState: import("./types").IUIState;
    options: import("../lib/types").IOptions;
    highlightStyle: import("../lib/types").IStyle;
    state: import("../lib/types").IState;
    error: import("./types").IError | null;
} | {
    options: any;
    UIState: import("./types").IUIState;
    settings: import("../lib/types").ISettings;
    highlightStyle: import("../lib/types").IStyle;
    state: import("../lib/types").IState;
    error: import("./types").IError | null;
} | {
    highlightStyle: any;
    UIState: import("./types").IUIState;
    settings: import("../lib/types").ISettings;
    options: import("../lib/types").IOptions;
    state: import("../lib/types").IState;
    error: import("./types").IError | null;
} | {
    error: any;
    UIState: import("./types").IUIState;
    settings: import("../lib/types").ISettings;
    options: import("../lib/types").IOptions;
    highlightStyle: import("../lib/types").IStyle;
    state: import("../lib/types").IState;
};
//# sourceMappingURL=index.d.ts.map