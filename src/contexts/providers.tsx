import React, { FC, useRef, useReducer } from 'react';
import { SpeechSynth, Utils } from 'lib';
import { rootReducer, globalState } from 'store';
import {
	setIsReading,
	setElapsedTime,
	setCurrentWordIndex,
	changeSettings,
	changeOptions,
	changeHighlightStyle,
	setDuration,
	setVoices,
} from 'store/actions';
import { MainPropsContext, ReaderContext, StoreContext } from './contexts';
import {
	IMainPropsProviderProps,
	IReaderProviderProps,
	IStoreProviderProps,
} from './types';
import { useStore, useMainProps } from './hooks';

/* Provides the main props */

export const MainPropsProvider: FC<IMainPropsProviderProps> = ({
	value,
	children,
}) => {
	return (
		<MainPropsContext.Provider value={value}>
			{children}
		</MainPropsContext.Provider>
	);
};

/* Provides the reader instance */

export const ReaderProvider: FC<IReaderProviderProps> = ({ children }) => {
	const { dispatch } = useStore();
	const { textContainer, options, styleOptions } = useMainProps();

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
				// console.log('Boundary event');
			},
			onSeek: (reader: SpeechSynth) => {
				dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
			},
			onTimeTick: (reader: SpeechSynth) => {
				dispatch(setElapsedTime(reader.state.elapsedTime));
			},
			onWordClick: (reader: SpeechSynth, e: MouseEvent) => {
				const target: HTMLElement = e.target as HTMLElement;
				const idx: number = +(target.dataset.id as string);
				console.log('Word click, seek to:', idx);

				reader?.seekTo(idx);
			},
			onStateChange: (reader: SpeechSynth, key) => {
				switch (key) {
					case 'duration':
						dispatch(setDuration(reader.state.duration));
						break;
					case 'voices':
						dispatch(
							setVoices(Utils.formatVoices(reader.state.voices))
						);
						break;
					default:
					/* Synchronize UI state with reader initial state */
				}
			},
			onSettingsChange: (reader: SpeechSynth) => {
				console.log('Settings change');
				dispatch(changeSettings(reader.settings));
			},
			onOptionsChange: (reader: SpeechSynth) => {
				console.log('Options change', reader.options);
				dispatch(changeOptions(reader.options));
			},
			onStyleChange: (reader: SpeechSynth) => {
				console.log('Style change');
				dispatch(changeHighlightStyle(reader.style));
			},
		})
	);

	return (
		<ReaderContext.Provider value={{ reader: readerRef.current }}>
			{children}
		</ReaderContext.Provider>
	);
};

/* Provides the store */

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, globalState);

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};
