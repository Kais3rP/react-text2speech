import React, { ChangeEventHandler, FC } from 'react';
import { ISeekBarProps } from './types';
import format from 'format-duration';
import debounce from 'lodash.debounce';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';

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

	const debouncedHandleManualSeek = debounce((value: number) => {
		reader?.seekTo(value);
	}, 5);

	const handleManualSeek: ChangeEventHandler = (e) => {
		debouncedHandleManualSeek(+(e.target as HTMLInputElement).value);
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
