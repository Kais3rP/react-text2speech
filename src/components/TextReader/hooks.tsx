import { useReader, useStore, useMainProps } from 'contexts';
import { Utils } from 'lib';
import { useMemo, useLayoutEffect, useEffect } from 'react';
import {
	changeOptions,
	changeSettings,
	changeState,
	changeHighlightStyle,
	changeUIState,
	updateError,
} from 'store/actions';

/* Produce the binder to pass the state and the state handlers to the Consumer Component */

export const useBindTextReader = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const { isMinimized, isVisible, isDark } = state.UIState;
	const { isReading, isLoading, elapsedTime, duration } = state.state;
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
				else reader?.play();
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
			duration,
			isDark,
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
		duration,
		isDark,
	]);
};

/* Initialize the Reader and synchronize its internal state with the TextReader state */

export const useInitializeReader = () => {
	const { reader } = useReader();
	const { dispatch } = useStore();

	useEffect(() => {
		/* Reset browser active speech synth queue on refresh or new load */

		window.speechSynthesis?.cancel();
		reader
			?.init()
			.then((reader) => {
				/* Synchronize UI state with reader initial state */
				dispatch(changeState(reader.state));
				dispatch(changeSettings(reader.settings));
				dispatch(changeOptions(reader.options));
				dispatch(changeHighlightStyle(reader.style));
			})
			.catch((e) => {
				dispatch(updateError({ message: e.message, object: e }));
			});
		return () => window.speechSynthesis?.cancel();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reader]);
};

/* Set the theme passed by props as CSS root variables ( calculate the inverted theme for dark/light mode ) */

export const useSetCSSVariables = () => {
	const {
		state: {
			UIState: { isDark },
		},
	} = useStore();

	const { styleOptions } = useMainProps();

	const { lightTheme, darkTheme } = useMemo(() => {
		let lightTheme: IStyleTheme = {
			primaryColor: '',
			secondaryColor: '',
			bgColor: '',
			textColor: '',
			highlightColor1: '',
			highlightColor2: '',
		};
		let darkTheme: IStyleTheme = {
			primaryColor: '',
			secondaryColor: '',
			bgColor: '',
			textColor: '',
			highlightColor1: '',
			highlightColor2: '',
		};

		const inverted: IStyleTheme | {} = Object.entries(styleOptions).reduce(
			(acc, [key, value]) => {
				if (key === 'highlightColor1' || key === 'highlightColor2')
					return { ...acc, [key]: value };
				else return { ...acc, [key]: Utils.invertColor(value) };
			},
			{}
		);

		lightTheme = Utils.isDarkColor(styleOptions.bgColor)
			? (inverted as IStyleTheme)
			: { ...styleOptions };
		darkTheme = Utils.isDarkColor(styleOptions.bgColor)
			? { ...styleOptions }
			: (inverted as IStyleTheme);

		return { lightTheme, darkTheme };
	}, [styleOptions]);

	useEffect(() => {
		const theme = isDark ? darkTheme : lightTheme;

		for (const entry of Object.entries(theme))
			document.documentElement.style.setProperty(
				`--${entry[0]}`,
				entry[1] as string
			);
	}, [isDark, darkTheme, lightTheme]);
};

/* Check the User Agent color scheme */

export const useUserColorScheme = () => {
	const { dispatch } = useStore();

	useEffect(() => {
		const isDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		dispatch(changeUIState({ isDark }));
	}, [dispatch]);
};
