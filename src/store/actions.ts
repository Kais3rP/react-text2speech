export const createAction = (type: string, payload?: any): ActionType => ({
	type,
	payload,
});

export const startReading = () => createAction('START_READING');

export const stopReading = () => createAction('STOP_READING');

export const setVoice = (payload: string) => createAction('SET_VOICE', payload);

export const setVoices = (payload: IVoiceInfo[]) =>
	createAction('SET_VOICES', payload);

export const setElapsedTime = (payload: number) =>
	createAction('SET_ELAPSED_TIME', payload);
