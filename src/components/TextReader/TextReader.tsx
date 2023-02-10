import React, { FC } from 'react';
import { ITextReaderProps } from './types';
import MainControls from 'components/MainControls/MainControls';
import WindowControls from 'components/WindowControls/WindowControls';
import SeekBar from 'components/SeekBar/SeekBar';
import SecondaryControls from 'components/SecondaryControls/SecondaryControls';
import {
	useBindTextReader,
	useInitializeReader,
	useSetCSSVariables,
	useUserColorScheme,
} from './hooks';
import { useStore } from 'contexts';
import styles from './styles.module.css';
import { useScrollToTop } from 'hooks';
import { ErrorOverlay } from 'components/ErrorOverlay/ErrorOverlay';

const TextReader: FC<ITextReaderProps> = () => {
	const {
		state: {
			UIState: { isMinimized, isVisible },
			error,
		},
	} = useStore();

	useScrollToTop();

	useSetCSSVariables();

	useUserColorScheme();

	useBindTextReader();

	useInitializeReader();

	console.log('Error', error);

	return (
		<div
			className={`${styles.container} ${isVisible && styles.visible} ${
				isMinimized && styles.minimized
			}`}
		>
			{/* Display overlays */}
			{error && <ErrorOverlay error={error} />}
			{/* Manage window behaviour */}
			<WindowControls />
			{/* Seekable bar */}
			<SeekBar />
			{/* Control playback */}
			<MainControls />
			{/* Settings */}
			{!isMinimized && <SecondaryControls />}
		</div>
	);
};

export default TextReader;
