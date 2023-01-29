import { useReader, useStore, useMainProps } from 'contexts';
import { useMemo, useLayoutEffect, useEffect } from 'react';
import {
	changeOptions,
	changeSettings,
	changeState,
	changeHighlightStyle,
	changeUIState,
} from 'store/actions';

export const useBindTextReader = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const { isMinimized, isVisible } = state.UIState;
	const { isReading, isLoading, elapsedTime } = state.state;
	const { bindReader } = useMainProps();

	const handlers = useMemo(
		() => ({
			showReader: () => {
				dispatch(changeUIState({ isVisible: true }));
			},
			hideReader: () => {
				dispatch(changeUIState({ isVisible: false }));
			},
			minimizeReader: () => {
				dispatch(changeUIState({ isMinimized: true }));
			},
			maximizeReader: () => {
				dispatch(changeUIState({ isMinimized: false }));
			},
			play: () => {
				if (reader?.isPaused()) reader?.resume();
				else
					reader?.play('start').then(() => {
						reader.state.isLoading = false;
					});
			},
			pause: () => reader?.pause(),
		}),
		[dispatch, reader]
	);

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
				/* Synchronize UI state with reader initial state */

				dispatch(changeState(reader.state));
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
