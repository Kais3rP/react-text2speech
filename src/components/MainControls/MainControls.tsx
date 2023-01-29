import React, { FC } from 'react';
import { AiFillFastBackward } from '@react-icons/all-files/ai/AiFillFastBackward';
import { AiFillFastForward } from '@react-icons/all-files/ai/AiFillFastForward';
import { AiFillPlayCircle } from '@react-icons/all-files/ai/AiFillPlayCircle';
import { AiFillPauseCircle } from '@react-icons/all-files/ai/AiFillPauseCircle';
import { BiReset } from '@react-icons/all-files/bi/BiReset';
import { IMainControlsProps } from './types';
import { setIsLoading } from 'store/actions';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import { BiVolumeFull } from '@react-icons/all-files/bi/BiVolumeFull';
import { BsMusicNote } from '@react-icons/all-files/bs/BsMusicNote';
import GenericSlider from 'components/GenericSlider/GenericSlider';

const MainControls: FC<IMainControlsProps> = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const {
		isReading,
		isLoading,
		isMinimized,
		settings: { volume, pitch },
	} = state;

	const handleTextReadPlay = () => {
		if (reader?.isPaused()) reader?.resume();
		else
			reader?.play('start').then(() => {
				dispatch(setIsLoading(false));
			});
	};

	const handleTextReadPause = () => {
		reader?.pause();
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

	const handleVolumeChange = (value: number) => {
		if (!reader) return;
		reader.settings.volume = value;
	};

	const handlePitchChange = (value: number) => {
		if (!reader) return;
		reader.settings.pitch = value;
	};

	return (
		<div
			className={`${styles.container} ${
				isMinimized ? styles.minimized : styles.notMinimized
			}`}
		>
			{!isMinimized && (
				<div className={styles.sliderContainer}>
					<div className={styles.volumeContainer}>
						<GenericSlider
							title="Volume"
							icon={<BiVolumeFull />}
							onChange={handleVolumeChange}
							data={{
								min: '0.1',
								max: '1',
								step: '0.1',
								value: volume,
								unit: 'x',
							}}
						/>
					</div>
					<div className={styles.pitchContainer}>
						{' '}
						<GenericSlider
							title="Pitch"
							icon={<BsMusicNote />}
							onChange={handlePitchChange}
							data={{
								min: '0.1',
								max: '2',
								step: '0.1',
								value: pitch,
								unit: 'x',
							}}
						/>
					</div>
				</div>
			)}
			<div className={styles.controlsContainer}>
				<AiFillFastBackward
					className={`${styles.button} ${
						isLoading ? styles.loading : styles.notLoading
					}`}
					title="Fast backward"
					onDoubleClick={(e) => e.preventDefault()}
					onPointerDown={handleFastBackward}
				/>
				{isReading ? (
					<AiFillPauseCircle
						style={{
							fontSize: '2em',
						}}
						className={`${styles.button} ${
							isLoading ? styles.loading : styles.notLoading
						}`}
						title={'Pause'}
						onPointerDown={handleTextReadPause}
					/>
				) : (
					<AiFillPlayCircle
						style={{
							fontSize: '2em',
						}}
						className={`${styles.button} ${
							isLoading ? styles.loading : styles.notLoading
						}`}
						title={'Play'}
						onPointerDown={handleTextReadPlay}
					/>
				)}
				<AiFillFastForward
					title="Fast forward"
					className={`${styles.button} ${
						isLoading ? styles.loading : styles.notLoading
					}`}
					onPointerDown={handleFastForward}
				/>
			</div>
			{/* {!isMinimized && (
				<div className={styles.pitchContainer}>
					<GenericSlider
						icon={<BsMusicNote />}
						onChange={handlePitchChange}
						data={{
							min: '0.1',
							max: '2',
							step: '0.1',
							value: pitch,
							unit: 'x',
						}}
					/>
				</div>
			)} */}
			<BiReset
				className={styles.reset}
				title="reset"
				onClick={handleReset}
			/>
		</div>
	);
};

export default MainControls;
