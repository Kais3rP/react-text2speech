import React, { FC } from 'react';
import { Container } from './styles';
import { ITextReaderProps } from './types';
import MainControls from 'components/MainControls/MainControls';
import WindowControls from 'components/WindowControls/WindowControls';
import SeekBar from 'components/SeekBar/SeekBar';
import SecondaryControls from 'components/SecondaryControls/SecondaryControls';
import { useBindTextReader, useInitializeReader } from './hooks';
import { useStore, useMainProps } from 'contexts';
// import styles from './styles.module.css';

const TextReader: FC<ITextReaderProps> = () => {
	const { state } = useStore();
	const { isMinimized, isVisible } = state;
	const { styleOptions } = useMainProps();

	useBindTextReader();

	useInitializeReader();

	return (
		<Container
			isvisible={isVisible.toString()}
			isminimized={isMinimized.toString()}
			styleoptions={styleOptions}
		>
			<WindowControls />
			<SeekBar />
			<MainControls />
			{/* Settings */}
			{!isMinimized && <SecondaryControls />}
		</Container>
	);
};

export default TextReader;
