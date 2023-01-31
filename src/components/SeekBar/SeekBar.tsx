import React, { FC } from 'react';
import { ISeekBarProps } from './types';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import { Utils } from 'lib';

const SeekBar: FC<ISeekBarProps> = () => {
	const { reader } = useReader();
	const { state } = useStore();

	const {
		state: { elapsedTime, numberOfWords, currentWordIndex, duration },
		UIState: { isMinimized },
	} = state;

	const debouncedHandleManualSeek = Utils.debounce(
		reader?.seekTo.bind(reader) || Function,
		3
	);

	const handleManualSeek = (e) => {
		if (!reader) return;
		const value = +(e.target as HTMLInputElement).value;
		debouncedHandleManualSeek(value);
	};

	return (
		<div
			className={`${styles.container} ${isMinimized && styles.minimized}`}
		>
			<h5 className={styles.time}>{Utils.formatMsToTime(elapsedTime)}</h5>

			<input
				className={styles.seekbar}
				type="range"
				min="0"
				max={numberOfWords - 1}
				step="1"
				value={currentWordIndex}
				onChange={handleManualSeek}
			/>
			<h5
				style={{ left: 'auto', right: '-15px' }}
				className={styles.time}
			>
				{Utils.formatMsToTime(duration)}*
			</h5>
		</div>
	);
};

export default SeekBar;
