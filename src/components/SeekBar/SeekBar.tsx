import React, { ChangeEventHandler, FC } from 'react';

import { useTextReaderStore } from 'store';
import { ISeekBarProps } from './types';
import { Seekbar, SeekbarContainer, Time } from './styles';
import format from 'format-duration';
import debounce from 'lodash.debounce';

const SeekBar: FC<ISeekBarProps> = ({ readerRef, styleOptions }) => {
	const {
		isMinimized,
		elapsedTime,
		numberOfWords,
		currentWordIndex,
		duration,
	} = useTextReaderStore();

	const debouncedHandleManualSeek = debounce((value: number) => {
		const reader = readerRef.current;
		if (!reader) return;
		reader.seekTo(value);
	}, 5);

	const handleManualSeek: ChangeEventHandler = (e) => {
		debouncedHandleManualSeek(+(e.target as HTMLInputElement).value);
	};

	return (
		<SeekbarContainer isminimized={isMinimized.toString()}>
			<Time>{format(elapsedTime)}</Time>
			<Seekbar
				styleoptions={styleOptions}
				type="range"
				min="0"
				max={numberOfWords}
				step="1"
				value={currentWordIndex}
				onChange={handleManualSeek}
			/>
			<Time style={{ left: 'auto', right: '-15px' }}>
				{format(duration)}*
			</Time>
		</SeekbarContainer>
	);
};

export default SeekBar;
