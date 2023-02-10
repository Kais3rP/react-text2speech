import { ISettings, IOptions, IStyle, IState } from 'lib/types';
import { IError, IUIState } from './types';

export const createAction = (type: string, payload?: any): ActionType => ({
	type,
	payload,
});

/* Actions */

export const changeUIState = (payload: Partial<IUIState>) =>
	createAction('CHANGE_UISTATE', payload);

export const changeSettings = (payload: Partial<ISettings>) =>
	createAction('CHANGE_SETTINGS', payload);

export const changeOptions = (payload: Partial<IOptions>) =>
	createAction('CHANGE_OPTIONS', payload);

export const changeState = (payload: Partial<IState>) =>
	createAction('CHANGE_STATE', payload);

export const changeHighlightStyle = (payload: Partial<IStyle>) =>
	createAction('CHANGE_HIGHLIGHT_STYLE', payload);

export const updateError = (payload: IError) =>
	createAction('UPDATE_ERROR', payload);
