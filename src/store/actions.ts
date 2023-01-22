export const createAction = (type: string, payload?: any): ActionType => ({
	type,
	payload,
});

export const setIsReading = (payload: boolean) =>
	createAction('SET_IS_READING', payload);

export const setIsLoading = (payload: boolean) =>
	createAction('SET_IS_LOADING', payload);

export const setIsMinimized = (payload: boolean) =>
	createAction('SET_IS_MINIMIZED', payload);

export const setIsVisible = (payload: boolean) =>
	createAction('SET_IS_VISIBLE', payload);

export const setIsSettingsVisible = (payload: boolean) =>
	createAction('SET_IS_SETTINGS_VISIBLE', payload);

export const setVoice = (payload: string) => createAction('SET_VOICE', payload);

export const setVoices = (payload: IVoiceInfo[]) =>
	createAction('SET_VOICES', payload);

export const setElapsedTime = (payload: number) =>
	createAction('SET_ELAPSED_TIME', payload);

export const setNumberOfWords = (payload: number) =>
	createAction('SET_NUMBER_OF_WORDS', payload);

export const setCurrentWordIndex = (payload: number) =>
	createAction('SET_CURRENT_WORD_INDEX', payload);

export const setDuration = (payload: number) =>
	createAction('SET_DURATION', payload);

export const setIsChunksModeOn = (payload: boolean) =>
	createAction('SET_IS_CHUNKS_MODE_ON', payload);
