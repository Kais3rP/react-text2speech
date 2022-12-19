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
import { BiVolumeFull } from 'react-icons/bi';
import { FiMinimize, FiMaximize } from 'react-icons/fi';
import CustomSelect from './CustomSelect';
import Slider from './CustomSlider';
import format from 'format-duration';
import { MdOutlineClose } from 'react-icons/md';
import debounce from 'lodash.debounce';
import { useIsFirstRender } from 'hooks';
import {
	Container,
	ControlButton,
	ControlsContainer,
	Dots,
	ExtraSettings,
	OptionsContainer,
	Reset,
	Seekbar,
	SeekbarContainer,
	SliderContainer,
	Time,
	WindowButton,
} from 'styledComponents';

interface IProps {
	children?: JSX.Element | string;
	options?: ISettings & IOptions & IStyle;
	styleOptions: IStyleOptions;
	textContainer: HTMLElement;
}

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
			styleoptions={styleOptions}
		>
			{/* Close button */}
			<WindowButton
				style={{ position: 'absolute', top: '2px', right: '2px' }}
				styleoptions={styleOptions}
				onPointerDown={handleHideReader}
			>
				<MdOutlineClose title="Close" />
			</WindowButton>
			{/* Minimize button */}
			<WindowButton
				style={{ position: 'absolute', top: '2px', right: '20px' }}
				title={isMinimized ? 'Maximize' : 'Minimize'}
				styleoptions={styleOptions}
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

			{/* Main controls unit */}
			<ControlsContainer isMinimized={isMinimized}>
				<div>
					<ControlButton
						as={AiFillFastBackward}
						title="Fast backward"
						onDoubleClick={(e) => e.preventDefault()}
						onPointerDown={() =>
							handleGenericSeek(
								currentWordIndex - 5 <= 0
									? 0
									: currentWordIndex - 5
							)
						}
						styleoptions={styleOptions}
						isLoading={isLoading}
					/>
					{!isReading ? (
						<ControlButton
							as={AiFillPlayCircle}
							title="Play"
							onPointerDown={handleAudioReadPlay}
							styleoptions={styleOptions}
							isLoading={isLoading}
						/>
					) : (
						<ControlButton
							as={AiFillPauseCircle}
							title="Pause"
							styleoptions={styleOptions}
							onPointerDown={handleAudioReadPause}
							isLoading={isLoading}
						/>
					)}
					<ControlButton
						as={AiFillFastForward}
						title="Fast forsward"
						onPointerDown={() =>
							handleGenericSeek(
								currentWordIndex + 5 >=
									(audioReaderRef.current?.state
										.wholeTextArray.length as number)
									? (audioReaderRef.current?.state
											.wholeTextArray?.length as number)
									: currentWordIndex + 5
							)
						}
						styleoptions={styleOptions}
						isLoading={isLoading}
					/>
					<Reset
						title="reset"
						styleoptions={styleOptions}
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
								styleoptions={styleOptions}
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

					<ExtraSettings
						styleoptions={styleOptions}
						issettingsvisible={isSettingsVisible}
						onPointerDown={toggleSettings}
					>
						<label
							htmlFor="is-row-check"
							onPointerDown={(e) => e.stopPropagation()}
						>
							<input
								id="is-row-check"
								type="checkbox"
								checked={isPreserveHighlighting}
								onChange={handlePreserveHighlighting}
							/>
							<h5>Preserve Highlighting</h5>
						</label>
					</ExtraSettings>
				</>
			)}
		</Container>
	);
};

AudioReader.defaultProps = {
	styleOptions: {
		primaryColor: '#00D',
		secondaryColor: '#55F',
		bgColor: '#FFF',
		textColor: '#222',
	},
};

export default AudioReader;
export * from './store';
export * from './lib';
