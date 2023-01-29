import React, { FC, useRef, useReducer } from 'react';
import { SpeechSynth } from 'lib';
import { rootReducer, globalState } from 'store';
import {
	changeSettings,
	changeOptions,
	changeHighlightStyle,
	changeState,
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
			onWordClick: (reader: SpeechSynth, e: MouseEvent) => {
				const target: HTMLElement = e.target as HTMLElement;
				const idx: number = +(target.dataset.id as string);
				// console.log('Word click, seek to:', idx);
				reader?.seekTo(idx);
			},
			onStateChange: (reader: SpeechSynth, key) => {
				// console.log('State change', key);
				/* Avoid unnecessary rerenders, update elapsedTime only each second */
				if (key === 'elapsedTime' && reader.state[key] % 1000 === 0)
					dispatch(changeState({ [key]: reader.state[key] }));
				else dispatch(changeState({ [key]: reader.state[key] }));
			},
			onSettingsChange: (reader: SpeechSynth) => {
				// console.log('Settings change');
				dispatch(changeSettings(reader.settings));
			},
			onOptionsChange: (reader: SpeechSynth) => {
				// console.log('Options change', reader.options);
				dispatch(changeOptions(reader.options));
			},
			onStyleChange: (reader: SpeechSynth) => {
				// console.log('Style change');
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
