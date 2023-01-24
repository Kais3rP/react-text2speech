export const globalState = {
    settings: {
        rate: 1,
        voiceURI: '',
        volume: 0.5,
        pitch: 0,
        language: 'en',
    },
    options: {
        isPreserveHighlighting: true,
        isHighlightTextOn: true,
        isChunksModeOn: false,
    },
    isReading: false,
    isLoading: false,
    voices: [],
    elapsedTime: 0,
    isMinimized: true,
    isVisible: true,
    isOptionsVisible: false,
    numberOfWords: 0,
    currentWordIndex: 1,
    duration: 0,
};
export const rootReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_IS_READING': {
            return Object.assign(Object.assign({}, state), { isReading: payload });
        }
        case 'SET_IS_LOADING': {
            return Object.assign(Object.assign({}, state), { isLoading: payload });
        }
        case 'SET_IS_MINIMIZED': {
            return Object.assign(Object.assign({}, state), { isMinimized: payload });
        }
        case 'SET_IS_VISIBLE': {
            return Object.assign(Object.assign({}, state), { isVisible: payload });
        }
        case 'SET_IS_SETTINGS_VISIBLE': {
            return Object.assign(Object.assign({}, state), { isOptionsVisible: payload });
        }
        case 'SET_VOICES': {
            return Object.assign(Object.assign({}, state), { voices: payload });
        }
        case 'SET_ELAPSED_TIME': {
            return Object.assign(Object.assign({}, state), { elapsedTime: payload });
        }
        case 'SET_DURATION': {
            return Object.assign(Object.assign({}, state), { duration: payload });
        }
        case 'SET_NUMBER_OF_WORDS': {
            return Object.assign(Object.assign({}, state), { numberOfWords: payload });
        }
        case 'SET_CURRENT_WORD_INDEX': {
            return Object.assign(Object.assign({}, state), { currentWordIndex: payload });
        }
        case 'CHANGE_SETTINGS': {
            return Object.assign(Object.assign({}, state), { settings: Object.assign(Object.assign({}, state.settings), payload) });
        }
        case 'CHANGE_OPTIONS': {
            return Object.assign(Object.assign({}, state), { options: Object.assign(Object.assign({}, state.options), payload) });
        }
        default:
            return Object.assign({}, state);
    }
};
//# sourceMappingURL=index.js.map