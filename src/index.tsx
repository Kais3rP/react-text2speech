import React, {
	FC,
	useRef,
	useEffect,
	useMemo,
	ChangeEventHandler,
} from 'react';
import {
	AiFillFastBackward,
	AiFillFastForward,
	AiFillPauseCircle,
	AiFillPlayCircle,
} from 'react-icons/ai';
import { SpeechSynth } from './lib';
import { useAudioReaderStore } from './store';
import { BiDotsHorizontal, BiReset, BiVolumeFull } from 'react-icons/bi';
import { FiMinimize, FiMaximize } from 'react-icons/fi';
import CustomSelect from './CustomSelect';
import Slider from './CustomSlider';
import format from 'format-duration';
import { MdOutlineClose } from 'react-icons/md';
import debounce from 'lodash.debounce';
import { useIsFirstRender } from 'hooks';
import styled from 'styled-components';

interface IProps {
	children?: JSX.Element | string;
	options?: ISettings & IOptions;
	styleOptions: IStyleOptions;
	textContainer: HTMLElement;
}

interface IContainerProps {
	isVisible: boolean;
	isMinimized: boolean;
	styleOptions: IStyleOptions;
}

interface ICloseButtonProps {
	styleOptions: IStyleOptions;
}

/* Styled Components */

const Container = styled.div<IContainerProps>`
	position: fixed;
	zindex: 1000;
	bottom: 5px;
	right: ${(props: any) => (props.isVisible ? '10px' : '-2000px')};
	display: flex;
	flexdirection: column;
	alignitems: center;
	justifycontent: center;
	transition: all 200ms linear;
	width: ${(props: any) => (props.isMinimized ? '100px' : '300px')};
	borderradius: 10px;
	boxshadow: 0px 0px 5px 10px #aaa;
	padding: 5px;
	backgroundcolor: ${(props: any) => props.styleOptions.bgColor};
`;

const CloseButton = styled.div<ICloseButtonProps>`
	display: flex;
	justifycontent: center;
	alignitems: center;
	zindex: 100;
	fontsize: 0.8rem;
	width: 16px;
	height: 16px;
	borderradius: 3px;
	border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
	backgroundcolor: ${(props: any) => props.styleOptions.primaryColor};
	color: ${(props: any) => props.styleOptions.textColor};
	fontweight: bold;
	cursor: pointer;
	position: absolute;
	top: 2px;
	right: 2px;
	transition: all 0.2s linear;
	&:hover {
		backgroundcolor: ${(props: any) => props.styleOptions.bgColor};
		color: ${(props: any) => props.styleOptions.secondaryColor};
	}
`;

const AudioReader: FC<IProps> = ({ textContainer, options, styleOptions }) => {
	const isFirstRender = useIsFirstRender();

	const {
		isReading,
		rate,
		voice,
		voices,
		volume,
		elapsedTime,
		currentWordIndex,
		duration,
		numberOfWords,
		stopReading,
		startReading,
		setRate,
		setVoice,
		setVoices,
		setVolume,
		setElapsedTime,
		isMinimized,
		minimize,
		maximize,
		hideAudioReader,
		isVisible,
		isSettingsVisible,
		showSettings,
		hideSettings,
		isPreserveHighlighting,
		enablePreserveHighlighting,
		disablePreserveHighlighting,
		setNumberOfWords,
		setCurrentWordIndex,
		setDuration,
	} = useAudioReaderStore();

	const audioReaderRef = useRef<SpeechSynth>();

	/* Handlers */

	const handleAudioReadPlay = () => {
		startReading();
	};

	const handleAudioReadPause = () => {
		stopReading();
	};

	const handleReset = () => {
		const reader = audioReaderRef.current;
		reader?.reset();
		stopReading();
		setElapsedTime(0);
		setCurrentWordIndex(1);
	};

	const handleRateChange = (value: string) => {
		const reader = audioReaderRef.current;
		if (!reader) return;
		reader.editUtterance({ rate: +value });
		setRate(value);
		setDuration(reader.state.duration);
	};

	const handleVoiceChange = (value: string) => {
		const reader = audioReaderRef.current;
		reader?.editUtterance({ voiceURI: value });
		setVoice(value);
	};

	const handleVolumeChange: ChangeEventHandler = (e) => {
		const reader = audioReaderRef.current;
		const target = e.target as HTMLInputElement;
		if (!reader) return;
		reader.editUtterance({ volume: +target.value });
		setVolume(target.value);
	};

	const handleHideReader = () => {
		hideAudioReader();
		handleAudioReadPause();
	};

	const handleMinimizeReader = () => {
		minimize();
	};

	const handleMaximizeReader = () => {
		maximize();
	};

	const handlePreserveHighlighting: ChangeEventHandler = (e) => {
		const reader = audioReaderRef.current;
		const target = e.target as HTMLInputElement;
		if (!reader) return;
		if (target.checked) {
			enablePreserveHighlighting();
			reader.options.isPreserveHighlighting = true;
		} else {
			disablePreserveHighlighting();
			reader.options.isPreserveHighlighting = false;
		}
	};

	const toggleSettings = () => {
		if (isSettingsVisible) hideSettings();
		else showSettings();
	};

	/* Seeking handlers */

	const debouncedHandleManualSeek = debounce((value: number) => {
		console.log('Seek value', value);
		const reader = audioReaderRef.current;
		if (!reader) return;
		reader.seekTo(value);
	}, 5);

	const handleManualSeek: ChangeEventHandler = useMemo(
		() => (e) => {
			debouncedHandleManualSeek(+(e.target as HTMLInputElement).value);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const handleGenericSeek = (val: number) => {
		const reader = audioReaderRef.current;
		reader?.seekTo(val);
	};

	useEffect(() => {
		if (!textContainer) return;

		audioReaderRef.current = new SpeechSynth(textContainer, {
			...options,
			onStart: (reader: SpeechSynth) => {
				console.log('Start');
			},
			onPause: (reader: SpeechSynth) => {
				console.log('Pause');
			},
			onResume: (reader: SpeechSynth) => {
				console.log('Resume');
			},
			onReset: (reader: SpeechSynth) => {
				console.log('Reset');
			},
			onEnd: () => {
				console.log('End');
				handleReset();
			},
			onBoundary: (reader: SpeechSynth, e: Event) => {
				setCurrentWordIndex(reader.state.currentWordIndex);
			},
			onSeek: (reader: SpeechSynth, value: number) => {
				setCurrentWordIndex(value);
			},
			onTimeTick: (reader: SpeechSynth, value: number) => {
				setElapsedTime(reader.state.elapsedTime);
			},
			onWordClick: (reader: SpeechSynth, e: MouseEvent) => {
				const target: HTMLElement = e.target as HTMLElement;
				const idx: number = +(target.dataset.id as string);
				handleGenericSeek(idx - 1);
			},
		});

		audioReaderRef.current
			.init()
			.then((reader) => {
				setVoices(reader.state.voices);
				setNumberOfWords(reader.state.numberOfWords);
				setDuration(reader.state.duration);
			})
			.catch((e) => console.log(e));

		return () => {
			audioReaderRef.current?.reset();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textContainer]);

	/* Play */

	useEffect(() => {
		const reader = audioReaderRef.current;

		if (!reader || isFirstRender) return;
		if (isReading) {
			if (reader.isPaused()) {
				console.log('Resuming');
				reader.resume();
			} else {
				console.log('Playing');
				reader.play();
			}
		} else {
			if (reader.isPlaying()) reader.pause();
		}
	}, [isReading, textContainer, isFirstRender]);

	return (
		<Container
			isVisible={isVisible}
			isMinimized={isMinimized}
			styleOptions={styleOptions}
		>
			{/* Close button */}
			<CloseButton
				styleOptions={styleOptions}
				onPointerDown={handleHideReader}
			>
				<MdOutlineClose title="Close" />
			</CloseButton>
			{/* Minimize button */}
			<div
				title={isMinimized ? 'Maximize' : 'Minimize'}
				onPointerDown={
					isMinimized ? handleMaximizeReader : handleMinimizeReader
				}
				className="flex justify-center items-center z-[100] text-[0.8rem] w-[16px] h-[16px] rounded-[3px] border-[2px] border-colorExtra1 bg-colorExtra1 text-colorDark font-bold cursor-pointer absolute top-[2px] right-[21px] hover:bg-bgLight hover:text-colorExtra2 transition-all"
			>
				{isMinimized ? <FiMaximize /> : <FiMinimize />}
			</div>

			{/* Seek bar */}

			<div
				className={`text-center ${
					isMinimized ? 'w-[100%] ' : 'w-[70%] '
				} relative z-[2]`}
			>
				<h5 className=" w-[50px] text-[0.6rem] flex justify-center absolute bottom-[-5px]  left-[-15px]">
					{format(elapsedTime)}
				</h5>
				<input
					//	className={styles.slider}
					type="range"
					min="0"
					max={numberOfWords}
					step="1"
					value={currentWordIndex}
					onChange={handleManualSeek}
				/>
				<h5 className=" w-[50px] text-[0.6rem] flex justify-center absolute bottom-[-5px]  right-[-15px]">
					{format(duration)}*
				</h5>
			</div>

			{/* Main controls unit */}
			<div
				className={`w-[100%] flex flex-col relative z-[1] ${
					!isMinimized ? ' border-b-[1px] py-2' : 'pt-2'
				}  `}
			>
				<div className={`flex items-center justify-center`}>
					<AiFillFastBackward
						title="Fast backward"
						onDoubleClick={(e) => e.preventDefault()}
						onPointerDown={() =>
							handleGenericSeek(currentWordIndex - 5)
						}
						className={`rounded-[50%] bg-colorExtra2 text-colorDark font-bold cursor-pointer border-[2px] border-colorExtra1 hover:border-colorExtra1 hover:bg-bgLight hover:text-colorExtra2 transition-all text-[1rem]`}
					/>
					{!isReading ? (
						<AiFillPlayCircle
							title="Play"
							onPointerDown={handleAudioReadPlay}
							className={`rounded-[50%] bg-colorExtra1 text-colorDark font-bold cursor-pointer mx-[5px] border-[2px] border-colorExtra2 hover:border-colorExtra1 hover:bg-bgLight hover:text-colorExtra2 transition-all text-[1.2rem]`}
						/>
					) : (
						<AiFillPauseCircle
							title="Pause"
							className={`rounded-[50%] bg-colorExtra1 text-colorDark font-bold cursor-pointer mx-[5px] border-[2px] border-colorExtra2 hover:border-colorExtra1 hover:bg-bgLight hover:text-colorExtra2 transition-all text-[1.2rem]`}
							onPointerDown={handleAudioReadPause}
						/>
					)}
					<AiFillFastForward
						title="Fast forsward"
						onPointerDown={() =>
							handleGenericSeek(currentWordIndex + 5)
						}
						className={`rounded-[50%] bg-colorExtra2 text-colorDark font-bold cursor-pointer  border-[2px] border-colorExtra1 hover:border-colorExtra1 hover:bg-bgLight hover:text-colorExtra2 transition-all text-[1rem]`}
					/>
				</div>
			</div>
			{/* Settings unit */}
			{!isMinimized && (
				<>
					<div className="flex justify-between w-100">
						<div className="flex items-end">
							<CustomSelect
								name="rate"
								options={[
									{ value: '0.5', name: '0.5x' },
									{ value: '0.75', name: '0.75x' },
									{ value: '1', name: '1x' },
									{ value: '1.25', name: '1.25x' },
									{ value: '1.5', name: '1.5x' },
									{ value: '2', name: '2x' },
								]}
								onChange={handleRateChange}
								value={rate}
								defaultValue="1"
								title="Rate"
								styleOptions={styleOptions}
							/>
							<CustomSelect
								name="voice"
								options={voices?.map((voice) => ({
									name: voice.name?.replace(
										/(Microsoft)|(Online)|(\(Natural\)) -\s.*$/gm,
										''
									),
									value: voice.voiceURI,
								}))}
								onChange={handleVoiceChange}
								value={voice}
								defaultValue="1"
								title="Voices"
								styleOptions={styleOptions}
							/>
							<BiDotsHorizontal
								onPointerDown={toggleSettings}
								className="text-[0.8rem] text-colorExtra1 mb-[3px] p-[0px] cursor-pointer hover:text-colorExtra1"
							/>
						</div>

						<div className="w-[100px] flex items-center pt-1">
							<BiReset
								title="reset"
								className={` mr-2 font-bold cursor-pointer hover:text-[#D00] hover:bg-bgLight hover:text-colorLight transition-all text-[0.9rem]`}
								onClick={handleReset}
							/>
							<div className="w-[70px]">
								<Slider
									icon={<BiVolumeFull />}
									onChange={handleVolumeChange}
									data={{
										min: '0.1',
										max: '1',
										step: '0.1',
										value: +volume,
										unit: '%',
									}}
									styleOptions={styleOptions}
								/>
							</div>
						</div>
					</div>

					<div
						style={{
							opacity: isSettingsVisible ? 1 : 0,
							pointerEvents: isSettingsVisible ? 'all' : 'none',
						}}
						className="absolute w-100 bottom-[0px] right-0 bg-bgLight text-colorLight pb-[20px] px-[10px] z-[100] flex justify-start items-center transition-all"
					>
						<label htmlFor="is-row-check" className="flex">
							<input
								id="is-row-check"
								type="checkbox"
								checked={isPreserveHighlighting}
								onChange={handlePreserveHighlighting}
								className="cursor-pointer"
							/>
							<h5 className="text-[0.8rem] ml-1">
								{' '}
								Preserve Highlighting
							</h5>
							<BiDotsHorizontal
								onPointerDown={toggleSettings}
								className="text-[0.8rem] text-colorExtra1 cursor-pointer hover:text-colorExtra1 absolute bottom-[0px] left-[5px]"
							/>
						</label>
					</div>
				</>
			)}
		</Container>
	);
};

AudioReader.defaultProps = {
	styleOptions: {
		primaryColor: '#00D',
		secondaryColor: '#55F',
		bgColor: '#DDD',
		textColor: '#222',
	},
};

export default AudioReader;
export * from './store';
export * from './lib';
