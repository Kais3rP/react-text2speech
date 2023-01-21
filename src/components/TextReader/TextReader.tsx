import React, { FC, useRef, useEffect, useReducer, Dispatch } from 'react';
import { SpeechSynth } from '../../lib';
import { useTextReaderStore } from '../../store';

import { useIsFirstRender } from '../../hooks';
import { Container } from './styles';
import { ITextReaderProps } from './types';
import MainControls from 'components/MainControls/MainControls';
import WindowControls from 'components/WindowControls/WindowControls';
import SeekBar from 'components/SeekBar/SeekBar';
import SecondaryControls from 'components/SecondaryControls/SecondaryControls';
import {
	setElapsedTime,
	setVoice,
	setVoices,
	stopReading,
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
		case 'START_READING': {
			return { ...state, isReading: true };
		}
		case 'STOP_READING': {
			return { ...state, isReading: false };
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
		default:
			return { ...state };
	}
};

interface IGlobalStateContext {
	state: IGlobalState;
	dispatch: Dispatch<ActionType>;
}

export const GlobalStateContext = React.createContext<IGlobalStateContext>({
	state: globalState,
	dispatch: () => null,
});

const TextReader: FC<ITextReaderProps> = ({
	textContainer,
	options,
	styleOptions,
}) => {
	/* Initialize store */
	const [state, dispatch] = useReducer(rootReducer, globalState);
	const { isReading } = state;

	const isFirstRender = useIsFirstRender();

	const {
		// isReading,
		enableChunksMode,
		// stopReading,
		// setVoice,
		// setVoices,
		// setElapsedTime,
		isMinimized,
		isVisible,
		setNumberOfWords,
		setCurrentWordIndex,
		setDuration,
		setIsLoading,
	} = useTextReaderStore();

	const textReaderRef = useRef<SpeechSynth>();

	useEffect(() => {
		/* Reset browser active speech synth queue on refresh or new load */

		window.speechSynthesis.cancel();

		if (!textContainer) return;

		textReaderRef.current = new SpeechSynth(textContainer, {
			...options,
			color1: styleOptions?.highlightColor1 || '#DEE',
			color2: styleOptions.highlightColor2 || '#9DE',
			onStart: (reader: SpeechSynth) => {
				console.log('Start');
			},
			onPause: (reader: SpeechSynth) => {
				console.log('Pause');
			},
			onResume: (reader: SpeechSynth) => {
				console.log('Resume');
			},
			onReset: (reader: SpeechSynth) => {
				console.log('Reset Event called', reader?.state.elapsedTime);
				dispatch(stopReading());
				dispatch(setElapsedTime(reader?.state.elapsedTime as number));
				setCurrentWordIndex(reader?.state.currentWordIndex as number);
			},
			onEnd: (reader: SpeechSynth) => {
				console.log('End');
				reader.reset();
			},
			onBoundary: (reader: SpeechSynth, e: Event) => {
				setCurrentWordIndex(reader.state.currentWordIndex);
			},
			onSeek: (reader: SpeechSynth, value: number) => {
				setCurrentWordIndex(value);
			},
			onTimeTick: (reader: SpeechSynth, value: number) => {
				dispatch(setElapsedTime(reader.state.elapsedTime));
			},
			onWordClick: (reader: SpeechSynth, e: MouseEvent) => {
				const target: HTMLElement = e.target as HTMLElement;
				const idx: number = +(target.dataset.id as string);
				reader?.seekTo(idx);
			},
		});

		textReaderRef.current
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

				dispatch(setVoices(formattedVoices));
				dispatch(setVoice(reader.state.voices[0].voiceURI));
				setNumberOfWords(reader.state.numberOfWords);
				setDuration(reader.state.duration);
				/* Automatically set chunks mode ON on mobile devices since single word highlighting engine is not supported on mobile browsers */
				if (reader.state.isMobile) {
					reader.options.isChunksModeOn = true;
					reader.editUtterance({});

					enableChunksMode();
				}
			})
			.catch((e) => console.log(e));

		return () => {
			textReaderRef.current?.reset();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textContainer]);

	/* Declarative management of play/pause/resume logic */

	useEffect(() => {
		const reader = textReaderRef.current;

		if (!reader || isFirstRender) return setIsLoading(false);
		if (isReading) {
			if (reader.isPaused()) {
				/* Play button pressed and Reader in pause state case */
				reader.resume();
			} else {
				/* Play button pressed and Reader not yet started case */
				setIsLoading(true);
				reader.play('start').then(() => {
					setIsLoading(false);
				});
			}
			/* Pause button pressed and Reader in play state case */
		} else if (reader.isPlaying()) reader.pause();
	}, [isReading, textContainer, isFirstRender, setIsLoading]);

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			<Container
				isvisible={isVisible.toString()}
				isminimized={isMinimized.toString()}
				styleoptions={styleOptions}
			>
				<WindowControls styleOptions={styleOptions} />
				<SeekBar
					readerRef={textReaderRef}
					styleOptions={styleOptions}
				/>
				<MainControls
					readerRef={textReaderRef}
					styleOptions={styleOptions}
				/>
				{/* Settings unit */}
				{!isMinimized && (
					<SecondaryControls
						readerRef={textReaderRef}
						styleOptions={styleOptions}
					/>
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
