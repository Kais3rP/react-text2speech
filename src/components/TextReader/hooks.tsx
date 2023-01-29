import { useReader, useStore, useMainProps } from 'contexts';
import { Utils } from 'lib';
import { useMemo, useLayoutEffect, useEffect } from 'react';
import {
	changeOptions,
	changeSettings,
	changeState,
	changeHighlightStyle,
	changeUIState,
} from 'store/actions';

/* Produce the binder to pass the state and the state handlers to the Consumer Component */

export const useBindTextReader = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const { isMinimized, isVisible, isDark } = state.UIState;
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
		isDark,
	]);
};

/* Initialize the Reader and synchronize its internal state with the TextReader state */

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

/* Set the theme passed by props as CSS root variables ( calculate the inverted theme for dark/light mode ) */

export const useSetCSSVariables = () => {
	const {
		state: {
			UIState: { isDark },
		},
	} = useStore();

	const { styleOptions } = useMainProps();

	const { lightSet, darkSet } = useMemo(() => {
		let lightSet: IStyleTheme = {
			primaryColor: '',
			secondaryColor: '',
			bgColor: '',
			textColor: '',
			highlightColor1: '',
			highlightColor2: '',
		};
		let darkSet: IStyleTheme = {
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

		lightSet = Utils.isDarkColor(styleOptions.bgColor)
			? (inverted as IStyleTheme)
			: { ...styleOptions };
		darkSet = Utils.isDarkColor(styleOptions.bgColor)
			? { ...styleOptions }
			: (inverted as IStyleTheme);

		return { lightSet, darkSet };
	}, [styleOptions]);

	useEffect(() => {
		const theme = isDark ? darkSet : lightSet;

		for (const entry of Object.entries(theme))
			document.documentElement.style.setProperty(
				`--${entry[0]}`,
				entry[1] as string
			);
	}, [isDark, darkSet, lightSet]);
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
