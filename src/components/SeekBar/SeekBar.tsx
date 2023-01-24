import React, { FC } from 'react';
import { ISeekBarProps } from './types';
import format from 'format-duration';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import { Utils } from 'lib/Utils';

const SeekBar: FC<ISeekBarProps> = () => {
	const { reader } = useReader();
	const { state } = useStore();

	const {
		elapsedTime,
		numberOfWords,
		currentWordIndex,
		isMinimized,
		duration,
	} = state;

	const debouncedHandleManualSeek = Utils.debounce(
		reader?.seekTo.bind(reader) || Function,
		5
	);

	const handleManualSeek = (e) => {
		const value = +(e.target as HTMLInputElement).value;
		debouncedHandleManualSeek(value);
	};

	return (
		<div
			className={`${styles.container} ${isMinimized && styles.minimized}`}
		>
			<h5 className={styles.time}>{format(elapsedTime)}</h5>
			<input
				className={styles.seekbar}
				type="range"
				min="0"
				max={numberOfWords}
				step="1"
				value={currentWordIndex}
				onChange={handleManualSeek}
			/>
			<h5
				style={{ left: 'auto', right: '-15px' }}
				className={styles.time}
			>
				{format(duration)}*
			</h5>
		</div>
	);
};

export default SeekBar;
