import { IGlobalState } from './types';

export const globalState: IGlobalState = {
	UIState: {
		isMinimized: true,
		isVisible: false,
		isDark: false,
	},
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
		isUnderlinedOn: false,
		isBrushOn: true,
	},
	highlightStyle: {
		color1: '',
		color2: '',
		brush: 'brush-1',
	},
	state: {
		isMobile: false,
		/* Internal properties */
		allVoices: [] as SpeechSynthesisVoice[],
		voice: {} as SpeechSynthesisVoice,
		voices: [] as SpeechSynthesisVoice[],
		/* UI */
		isLoading: false,
		/* Highlight & Reading time */
		currentWord: '',
		currentWordIndex: 0,
		currentWordProps: { charIndex: 0, charLength: 0 },
		highlightedWords: [] as HTMLElement[],
		lastWordPosition: 0,
		numberOfWords: 0,
		wholeText: '',
		wholeTextArray: [],
		textRemaining: '',
		duration: 0,
		elapsedTime: 0,
		currentChunkIndex: 0,
		chunksArray: [],
		isBrushAvailable: false,
		/* Controls  */
		isPaused: false,
		isReading: false,
		isUtteranceCanceled: false,
	},
};

export const rootReducer = (state: IGlobalState, action: ActionType) => {
	const { type, payload } = action;
	switch (type) {
		case 'CHANGE_UISTATE': {
			return { ...state, UIState: { ...state.UIState, ...payload } };
		}
		case 'CHANGE_STATE': {
			return { ...state, state: { ...state.state, ...payload } };
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
