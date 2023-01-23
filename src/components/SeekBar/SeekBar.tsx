import React, { ChangeEventHandler, FC } from 'react';
import { ISeekBarProps } from './types';
import { Seekbar, SeekbarContainer, Time } from './styles';
import format from 'format-duration';
import debounce from 'lodash.debounce';
import { useReader, useStore, useMainProps } from 'contexts';

const SeekBar: FC<ISeekBarProps> = () => {
	const { reader } = useReader();
	const { state } = useStore();
	const { styleOptions } = useMainProps();
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
