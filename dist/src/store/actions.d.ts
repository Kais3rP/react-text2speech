import { ISettings, IOptions, IStyle, IState } from 'lib/types';
import { IError, IUIState } from './types';
export declare const createAction: (type: string, payload?: any) => ActionType;
export declare const changeUIState: (payload: Partial<IUIState>) => ActionType;
export declare const changeSettings: (payload: Partial<ISettings>) => ActionType;
export declare const changeOptions: (payload: Partial<IOptions>) => ActionType;
export declare const changeState: (payload: Partial<IState>) => ActionType;
export declare const changeHighlightStyle: (payload: Partial<IStyle>) => ActionType;
export declare const updateError: (payload: IError) => ActionType;
//# sourceMappingURL=actions.d.ts.map