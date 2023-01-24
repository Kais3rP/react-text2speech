export const createAction = (type, payload) => ({
    type,
    payload,
});
/* Actions */
/* Actions that might be used to control the Reader externally */
export const setIsReading = (payload) => createAction('SET_IS_READING', payload);
export const setIsMinimized = (payload) => createAction('SET_IS_MINIMIZED', payload);
export const setIsVisible = (payload) => createAction('SET_IS_VISIBLE', payload);
/* Actions used internally by the Reader  */
export const setIsLoading = (payload) => createAction('SET_IS_LOADING', payload);
export const setisOptionsVisible = (payload) => createAction('SET_IS_SETTINGS_VISIBLE', payload);
export const setVoices = (payload) => createAction('SET_VOICES', payload);
export const setElapsedTime = (payload) => createAction('SET_ELAPSED_TIME', payload);
export const setNumberOfWords = (payload) => createAction('SET_NUMBER_OF_WORDS', payload);
export const setCurrentWordIndex = (payload) => createAction('SET_CURRENT_WORD_INDEX', payload);
export const setDuration = (payload) => createAction('SET_DURATION', payload);
export const changeSettings = (payload) => createAction('CHANGE_SETTINGS', payload);
export const changeOptions = (payload) => createAction('CHANGE_OPTIONS', payload);
//# sourceMappingURL=actions.js.map