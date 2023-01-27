import { IGlobalState } from './types';

export const globalState: IGlobalState = {
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
		isUnderlinedOn: true,
	},
	highlightStyle: {
		color1: '',
		color2: '',
	},
	isReading: false,
	isLoading: false,
	voices: [],
	elapsedTime: 0,
	isMinimized: true,
	isVisible: false,
	isOptionsVisible: false,
	numberOfWords: 0,
	currentWordIndex: 1,
	duration: 0,
};

export const rootReducer = (state: IGlobalState, action: ActionType) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_IS_READING': {
			return { ...state, isReading: payload };
		}
		case 'SET_IS_LOADING': {
			return { ...state, isLoading: payload };
		}
		case 'SET_IS_MINIMIZED': {
			return { ...state, isMinimized: payload };
		}
		case 'SET_IS_VISIBLE': {
			return { ...state, isVisible: payload };
		}
		case 'SET_IS_OPTIONS_VISIBLE': {
			return { ...state, isOptionsVisible: payload };
		}
		case 'SET_VOICES': {
			return { ...state, voices: payload };
		}
		case 'SET_ELAPSED_TIME': {
			return { ...state, elapsedTime: payload };
		}
		case 'SET_DURATION': {
			return { ...state, duration: payload };
		}
		case 'SET_NUMBER_OF_WORDS': {
			return { ...state, numberOfWords: payload };
		}
		case 'SET_CURRENT_WORD_INDEX': {
			return { ...state, currentWordIndex: payload };
		}
		case 'CHANGE_SETTINGS': {
			return { ...state, settings: { ...state.settings, ...payload } };
		}
		case 'CHANGE_OPTIONS': {
			return { ...state, options: { ...state.options, ...payload } };
		}
		case 'CHANGE_HIGHLIGHT_STYLE': {
			return {
				...state,
				highlightStyle: { ...state.highlightStyle, ...payload },
			};
		}
		default:
			return { ...state };
	}
};
