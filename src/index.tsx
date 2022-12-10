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
	options?: ISettings & IOptions & IStyle;
	styleOptions: IStyleOptions;
	textContainer: HTMLElement;
}

interface IContainerProps {
	isVisible: boolean;
	isMinimized: boolean;
	styleOptions: IStyleOptions;
}

interface IWindowButton {
	styleOptions: IStyleOptions;
}

interface ISeekbarContainer {
	isMinimized: boolean;
}

interface ISeekBar {
	styleOptions: IStyleOptions;
}

interface IControlsContainer {
	isMinimized: boolean;
}

interface IControlButton {
	styleOptions: IStyleOptions;
	isLoading: boolean;
}

interface IDots {
	styleOptions: IStyleOptions;
}

interface IReset {
	styleOptions: IStyleOptions;
}

/* Styled Components */

const Container = styled.div<IContainerProps>`
	position: fixed;
	zindex: 1000;
	bottom: 5px;
	right: ${(props: any) => (props.isVisible ? '10px' : '-2000px')};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 200ms linear;
	width: ${(props: any) => (props.isMinimized ? '150px' : '300px')};
	border-radius: 5px;
	box-shadow: 0px 0px 10px 2px #aaa;
	padding: 15px;
	background-color: ${(props: any) => props.styleOptions.bgColor};
`;

const WindowButton = styled.div<IWindowButton>`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	font-size: 0.8rem;
	width: 12;
	height: 12;
	border-radius: 3px;
	border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
	background-color: ${(props: any) => props.styleOptions.bgColor};
	color: ${(props: any) => props.styleOptions.textColor};
	font-weight: bold;
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

const SeekbarContainer = styled.div<ISeekbarContainer>`
	text-align: center;
	width: ${(props: any) => (props.isMinimized ? '100%' : '90%')};
	position: relative;
	z-index: 2;
	margin-top: 10px;
`;

const Time = styled.h5`
	width: 50px;
	font-size: 0.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: -15px;
	z-index: 100;
	color: #111;
`;

const Seekbar = styled.input<ISeekBar>`
	width: 100%;
	appearance: none;
	height: 2px;
	background: ${(props: any) => props.styleOptions.primaryColor};
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	::-webkit-slider-thumb {
		appearance: none;
		width: 12px; /* Set a specific slider handle width */
		height: 12px; /* Slider handle height */
		background: ${(props: any) => props.styleOptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
	&::-webkit-slider-thumb:hover {
		transform: scale(1.1);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
	}
	::-moz-range-thumb {
		appearance: none;
		width: 12px; /* Set a specific slider handle width */
		height: 12px; /* Slider handle height */
		background: ${(props: any) => props.styleOptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
`;

const ControlsContainer = styled.div<IControlsContainer>`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	margin: 5px 0px 5px 0px;
	& div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	${(props: any) =>
		props.isMinimized
			? 'border-bottom: 1px; padding: 2px 0px 2px 0px;'
			: 'padding-top: 2px'}
`;

const ControlButton = styled.div<IControlButton>`
	border-radius: 50%;
	background-color: ${(props: any) => props.styleOptions.bgColor};
	color: ${(props: any) => props.styleOptions.primaryColor};
	font-size: bold;
	cursor: pointer;
	border: 2px solid ${(props: any) => props.styleOptions.secondaryColor};
	&:hover {
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		background-color: ${(props: any) => props.styleOptions.bgColor};
		color: ${(props: any) => props.styleOptions.secondaryColor};
	}
	transition: all 0.2s;
	font-size: 1rem;
	pointer-events: ${(props) => (props.isLoading ? 'none' : 'default')};
`;

const OptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	& div#options-wrapper-1 {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
	}
	& div#options-wrapper-2 {
		width: 200px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-top: 1px;
	}
`;

const Dots = styled(BiDotsHorizontal)<IDots>`
	font-size: 0.8rem;
	color: ${(props) => props.styleOptions.primaryColor};
	margin-bottom: 3px;
	padding: 0px;
	cursor: pointer;
	&:hover {
		color: ${(props) => props.styleOptions.secondaryColor};
	}
`;

const Reset = styled(BiReset)<IReset>`
	position: absolute;
	top: 50%;
	right: 5px;
	font-weight: bold;
	cursor: pointer;
	transition: 0.2s ease-in;
	font-size: 0.9rem;
	color: ${(props) => props.styleOptions.primaryColor};
	&:hover {
		color: ${(props) => props.styleOptions.secondaryColor};
	}
`;

const SliderContainer = styled.div`
	width: 70px;
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
		isLoading,
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
		setIsLoading,
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
		/* Reset browser active speech synth queue on refresh or new load */

		window.speechSynthesis.cancel();

		if (!textContainer) return;

		audioReaderRef.current = new SpeechSynth(textContainer, {
			...options,
			onStart: (reader: SpeechSynth) => {
				console.log('Start');
				setIsLoading(true);
			},
			onEffectivelySpeakingStart: (reader: SpeechSynth) => {
				console.log('Voice speaking');
				setIsLoading(false);
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

		if (!reader || isFirstRender) return setIsLoading(false);
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
	}, [isReading, textContainer, isFirstRender, setIsLoading]);

	return (
		<Container
			isVisible={isVisible}
			isMinimized={isMinimized}
			styleOptions={styleOptions}
		>
			{/* Close button */}
			<WindowButton
				styleOptions={styleOptions}
				onPointerDown={handleHideReader}
			>
				<MdOutlineClose title="Close" />
			</WindowButton>
			{/* Minimize button */}
			<WindowButton
				style={{ right: '20px' }}
				title={isMinimized ? 'Maximize' : 'Minimize'}
				styleOptions={styleOptions}
				onPointerDown={
					isMinimized ? handleMaximizeReader : handleMinimizeReader
				}
			>
				{isMinimized ? <FiMaximize /> : <FiMinimize />}
			</WindowButton>

			{/* Seek bar */}

			<SeekbarContainer isMinimized={isMinimized}>
				<Time>{format(elapsedTime)}</Time>
				<Seekbar
					styleOptions={styleOptions}
					type="range"
					min="0"
					max={numberOfWords}
					step="1"
					value={currentWordIndex}
					onChange={handleManualSeek}
				/>
				<Time style={{ top: '0px', left: 'auto', right: '-15px' }}>
					{format(duration)}*
				</Time>
			</SeekbarContainer>

			{/* Main controls unit */}
			<ControlsContainer isMinimized={isMinimized}>
				<div>
					<ControlButton
						as={AiFillFastBackward}
						title="Fast backward"
						onDoubleClick={(e) => e.preventDefault()}
						onPointerDown={() =>
							handleGenericSeek(currentWordIndex - 5)
						}
						styleOptions={styleOptions}
						isLoading={isLoading}
					/>
					{!isReading ? (
						<ControlButton
							as={AiFillPlayCircle}
							title="Play"
							onPointerDown={handleAudioReadPlay}
							styleOptions={styleOptions}
							isLoading={isLoading}
						/>
					) : (
						<ControlButton
							as={AiFillPauseCircle}
							title="Pause"
							styleOptions={styleOptions}
							onPointerDown={handleAudioReadPause}
							isLoading={isLoading}
						/>
					)}
					<ControlButton
						as={AiFillFastForward}
						title="Fast forsward"
						onPointerDown={() =>
							handleGenericSeek(currentWordIndex + 5)
						}
						styleOptions={styleOptions}
						isLoading={isLoading}
					/>
					<Reset
						title="reset"
						styleOptions={styleOptions}
						onClick={handleReset}
					/>
				</div>
			</ControlsContainer>
			{/* Settings unit */}
			{!isMinimized && (
				<>
					<OptionsContainer>
						<div id="options-wrapper-1">
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
							<Dots
								styleOptions={styleOptions}
								onPointerDown={toggleSettings}
							/>
						</div>

						<div id="options-wrapper-2">
							<SliderContainer>
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
							</SliderContainer>
						</div>
					</OptionsContainer>

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
