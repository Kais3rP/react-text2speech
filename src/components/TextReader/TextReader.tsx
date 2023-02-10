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
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import { useScrollToTop } from 'hooks';
import { Errors } from 'lib/Errors';

const NoBrowserSupport: FC = () => {
	return (
		<div className={styles.overlay}>
			<h5 className={styles.error}>{Errors.browserNotSupported}</h5>
		</div>
	);
};

const TextReader: FC<ITextReaderProps> = () => {
	const {
		state: {
			UIState: { isMinimized, isVisible },
		},
	} = useStore();
	const {
		reader: {
			deviceInfo: { isBrowserSupported, isSafari },
		},
	} = useReader();

	useScrollToTop();

	useSetCSSVariables();

	useUserColorScheme();

	useBindTextReader();

	useInitializeReader();

	return (
		<div
			className={`${styles.container} ${isVisible && styles.visible} ${
				isMinimized && styles.minimized
			}`}
		>
			{/* Display overlays */}
			{!isBrowserSupported && <NoBrowserSupport />}
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
