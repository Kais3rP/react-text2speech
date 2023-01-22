import React, { FC, useRef, useEffect, useReducer, Dispatch } from 'react';
import { SpeechSynth } from '../../lib';
import { Container } from './styles';
import { ITextReaderProps } from './types';
import MainControls from 'components/MainControls/MainControls';
import WindowControls from 'components/WindowControls/WindowControls';
import SeekBar from 'components/SeekBar/SeekBar';
import SecondaryControls from 'components/SecondaryControls/SecondaryControls';
import {
	setCurrentWordIndex,
	setDuration,
	setElapsedTime,
	setIsChunksModeOn,
	setIsReading,
	setNumberOfWords,
	setVoice,
	setVoices,
} from 'store/actions';

interface IGlobalState {
	isReading: boolean;
	rate: string;
	voice: string;
	voices: IVoiceInfo[];
	volume: string;
	elapsedTime: number;
	isPreserveHighlighting: boolean;
	isMinimized: boolean;
	isVisible: boolean;
	isSettingsVisible: boolean;
	numberOfWords: number;
	currentWordIndex: number;
	duration: number;
	isLoading: boolean;
	isHighlightTextOn: boolean;
	isChunksModeOn: boolean;
}

const globalState: IGlobalState = {
	isReading: false,
	isLoading: false,
	rate: '1',
	voice: '',
	voices: [],
	volume: '0.5',
	elapsedTime: 0,
	isPreserveHighlighting: true,
	isHighlightTextOn: true,
	isChunksModeOn: false,
	isMinimized: true,
	isVisible: true,
	isSettingsVisible: false,
	numberOfWords: 0,
	currentWordIndex: 1,
	duration: 0,
};

const rootReducer = (state: IGlobalState, action: ActionType) => {
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
		case 'SET_IS_SETTINGS_VISIBLE': {
			return { ...state, isSettingsVisible: payload };
		}
		case 'SET_VOICE': {
			return { ...state, voice: payload };
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
		case 'SET_IS_CHUNKS_MODE_ON': {
			return { ...state, isChunksModeOn: payload };
		}
		default:
			return { ...state };
	}
};

interface IGlobalStateContext {
	state: IGlobalState;
	dispatch: Dispatch<ActionType>;
	reader: SpeechSynth | null;
}

export const GlobalStateContext = React.createContext<IGlobalStateContext>({
	state: globalState,
	dispatch: () => null,
	reader: null,
});

const TextReader: FC<ITextReaderProps> = ({
	textContainer,
	options,
	styleOptions,
}) => {
	/* Initialize store */
	const [state, dispatch] = useReducer(rootReducer, globalState);
	const { isMinimized, isVisible } = state;

	const readerRef = useRef<SpeechSynth>(
		new SpeechSynth(textContainer, {
			...options,
			color1: styleOptions?.highlightColor1 || '#DEE',
			color2: styleOptions.highlightColor2 || '#9DE',
			onStart: (reader: SpeechSynth) => {
				console.log('Start');
				dispatch(setIsReading(reader.state.isReading));
			},
			onPause: (reader: SpeechSynth) => {
				console.log('Pause');
				dispatch(setIsReading(reader.state.isReading));
			},
			onResume: (reader: SpeechSynth) => {
				console.log('Resume');
				dispatch(setIsReading(reader.state.isReading));
			},
			onReset: (reader: SpeechSynth) => {
				console.log('Reset Event called', reader.state.elapsedTime);
				dispatch(setIsReading(reader.state.isReading));
				dispatch(setElapsedTime(reader.state.elapsedTime));
				dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
			},
			onEnd: (reader: SpeechSynth) => {
				console.log('End');
				reader.reset();
			},
			onBoundary: (reader: SpeechSynth, e: Event) => {
				dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
			},
			onSeek: (reader: SpeechSynth, value: number) => {
				dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
			},
			onTimeTick: (reader: SpeechSynth, value: number) => {
				dispatch(setElapsedTime(reader.state.elapsedTime));
			},
			onWordClick: (reader: SpeechSynth, e: MouseEvent) => {
				const target: HTMLElement = e.target as HTMLElement;
				const idx: number = +(target.dataset.id as string);
				reader?.seekTo(idx);
			},
			onChunksModeChange: (reader: SpeechSynth) => {
				dispatch(setIsChunksModeOn(reader.options.isChunksModeOn));
			},
		})
	);

	useEffect(() => {
		/* Reset browser active speech synth queue on refresh or new load */

		window.speechSynthesis.cancel();

		const reader = readerRef.current;

		reader
			.init()
			.then((reader) => {
				const formattedVoices: IVoiceInfo[] = reader.state.voices?.map(
					(voice) => ({
						name: voice.name?.replace(
							/(Microsoft\s)|(Online\s)|(\(Natural\))|(\s-.*$)/gm, // Display only the plain voice name
							''
						),
						value: voice.voiceURI,
					})
				);

				/* Synchronize UI state with reader initial state */

				dispatch(setVoices(formattedVoices));
				dispatch(setVoice(reader.state.voices[0].voiceURI));
				dispatch(setNumberOfWords(reader.state.numberOfWords));
				dispatch(setDuration(reader.state.duration));
				dispatch(setIsChunksModeOn(reader.options.isChunksModeOn));
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<GlobalStateContext.Provider
			value={{ state, dispatch, reader: readerRef.current }}
		>
			<Container
				isvisible={isVisible.toString()}
				isminimized={isMinimized.toString()}
				styleoptions={styleOptions}
			>
				<WindowControls styleOptions={styleOptions} />
				<SeekBar styleOptions={styleOptions} />
				<MainControls styleOptions={styleOptions} />
				{/* Settings */}
				{!isMinimized && (
					<SecondaryControls styleOptions={styleOptions} />
				)}
			</Container>
		</GlobalStateContext.Provider>
	);
};

TextReader.defaultProps = {
	options: {
		language: 'en',
	},
	styleOptions: {
		primaryColor: '#00D',
		secondaryColor: '#55F',
		bgColor: '#FFF',
		textColor: '#222',
		highlightColor1: '#98AFC7',
		highlightColor2: '#737CA1',
	},
};

export default TextReader;
