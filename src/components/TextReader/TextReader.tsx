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
} from './hooks';
import { useStore } from 'contexts';
import styles from './styles.module.css';
import { useScrollToTop } from 'hooks';

const TextReader: FC<ITextReaderProps> = () => {
	const { state } = useStore();
	const { isMinimized, isVisible } = state;

	useScrollToTop();

	useSetCSSVariables();

	useBindTextReader();

	useInitializeReader();
	return (
		<div
			className={`${styles.container} ${isVisible && styles.visible} ${
				isMinimized && styles.minimized
			}`}
		>
			<WindowControls />
			<SeekBar />
			<MainControls />
			{/* Settings */}
			{!isMinimized && <SecondaryControls />}
		</div>
	);
};

export default TextReader;
