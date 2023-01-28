import { useReader, useStore, useMainProps } from 'contexts';
import { useMemo, useLayoutEffect, useEffect } from 'react';
import {
	setIsVisible,
	setIsMinimized,
	setIsLoading,
	changeOptions,
	changeSettings,
	setDuration,
	setNumberOfWords,
	setVoices,
	changeHighlightStyle,
} from 'store/actions';

export const useBindTextReader = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const { isMinimized, isVisible, isReading, isLoading, elapsedTime } = state;
	const { bindReader } = useMainProps();

	const handlers = useMemo(
		() => ({
			showReader: () => {
				dispatch(setIsVisible(true));
			},
			hideReader: () => {
				dispatch(setIsVisible(false));
			},
			minimizeReader: () => {
				dispatch(setIsMinimized(true));
			},
			maximizeReader: () => {
				dispatch(setIsMinimized(false));
			},
			play: () => {
				if (reader?.isPaused()) reader?.resume();
				else
					reader?.play('start').then(() => {
						dispatch(setIsLoading(false));
					});
			},
			pause: () => reader?.pause(),
		}),
		[dispatch, reader]
	);

	console.log('Elapsed time', elapsedTime);

	useLayoutEffect(() => {
		if (!bindReader || typeof bindReader !== 'function') return;
		const exposedState = {
			isMinimized,
			isVisible,
			isReading,
			isLoading,
			elapsedTime,
		};
		bindReader(exposedState, handlers);
	}, [
		bindReader,
		dispatch,
		handlers,
		isLoading,
		isMinimized,
		isReading,
		isVisible,
		elapsedTime,
	]);
};

export const useInitializeReader = () => {
	const { reader } = useReader();
	const { dispatch } = useStore();

	useEffect(() => {
		/* Reset browser active speech synth queue on refresh or new load */

		window.speechSynthesis.cancel();
		reader
			?.init()
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
				dispatch(setNumberOfWords(reader.state.numberOfWords));
				dispatch(setDuration(reader.state.duration));

				dispatch(changeSettings(reader.settings));
				dispatch(changeOptions(reader.options));
				dispatch(changeHighlightStyle(reader.style));
			})
			.catch((e) => console.log(e));
		return () => window.speechSynthesis.cancel();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export const useSetCSSVariables = () => {
	const { styleOptions } = useMainProps();

	useEffect(() => {
		for (const entry of Object.entries(styleOptions))
			document.documentElement.style.setProperty(
				`--${entry[0]}`,
				entry[1]
			);
	}, [styleOptions]);
};
