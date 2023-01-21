import { ControlButton, ControlsContainer, Reset } from './styles';
import React, { FC } from 'react';
import {
	AiFillFastBackward,
	AiFillFastForward,
	AiFillPauseCircle,
	AiFillPlayCircle,
} from 'react-icons/ai';
import { useTextReaderStore } from 'store';
import { IMainControlsProps } from './types';

const MainControls: FC<IMainControlsProps> = ({ readerRef, styleOptions }) => {
	const { isReading, isLoading, isMinimized, startReading, stopReading } =
		useTextReaderStore();

	const reader = readerRef.current;

	const handleTextReadPlay = () => {
		startReading();
	};

	const handleTextReadPause = () => {
		stopReading();
	};

	const handleReset = () => {
		reader?.reset();
	};

	const handleFastBackward = () => {
		if (!reader) return;
		if (reader?.options.isChunksModeOn) {
			if (reader.state.currentChunkIndex - 1 >= 0)
				reader.seekTo(
					reader.state.chunksArray[reader.state.currentChunkIndex - 1]
						.start
				);
		} else if (reader.state.currentWordIndex - 1 >= 0)
			reader.seekTo(reader.state.currentWordIndex - 1);
	};

	const handleFastForward = () => {
		if (!reader) return;

		if (reader?.options.isChunksModeOn) {
			if (
				reader.state.currentChunkIndex + 1 <
				reader.state.chunksArray.length
			)
				/* Go to the next chunk */
				reader.seekTo(
					reader.state.chunksArray[reader.state.currentChunkIndex + 1]
						.start
				);
		} else if (
			reader.state.currentWordIndex + 1 <=
			(reader.state.wholeTextArray.length as number)
		)
			reader.seekTo(reader.state.currentWordIndex + 1);
	};

	return (
		<ControlsContainer isminimized={isMinimized.toString()}>
			<div>
				<ControlButton
					as={AiFillFastBackward}
					title="Fast backward"
					onDoubleClick={(e) => e.preventDefault()}
					onPointerDown={handleFastBackward}
					styleoptions={styleOptions}
					isloading={isLoading.toString()}
				/>
				{!isReading ? (
					<ControlButton
						style={{
							fontSize: '1.5em',
						}}
						as={AiFillPlayCircle}
						title="Play"
						onPointerDown={handleTextReadPlay}
						styleoptions={styleOptions}
						isloading={isLoading.toString()}
					/>
				) : (
					<ControlButton
						style={{
							fontSize: '1.5em',
						}}
						as={AiFillPauseCircle}
						title="Pause"
						styleoptions={styleOptions}
						onPointerDown={handleTextReadPause}
						isloading={isLoading.toString()}
					/>
				)}
				<ControlButton
					as={AiFillFastForward}
					title="Fast forsward"
					onPointerDown={handleFastForward}
					styleoptions={styleOptions}
					isloading={isLoading.toString()}
				/>
				<Reset
					title="reset"
					styleoptions={styleOptions}
					onClick={handleReset}
				/>
			</div>
		</ControlsContainer>
	);
};

export default MainControls;
