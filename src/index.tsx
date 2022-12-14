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
import { useTextReaderStore } from './store';
import { BiVolumeFull } from 'react-icons/bi';
import { FiMinimize, FiMaximize } from 'react-icons/fi';
import CustomSelect from './CustomSelect';
import Slider from './CustomSlider';
import format from 'format-duration';
import { MdOutlineClose } from 'react-icons/md';
import debounce from 'lodash.debounce';
import { useIsFirstRender } from 'hooks';
import {
	CheckBox,
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
	options: ISettings & IOptions & IStyle;
	styleOptions: IStyleOptions;
	textContainer: HTMLElement;
}

const TextReader: FC<IProps> = ({ textContainer, options, styleOptions }) => {
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
		hideTextReader,
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
	} = useTextReaderStore();

	const textReaderRef = useRef<SpeechSynth>();

	/* Handlers */

	const handleTextReadPlay = () => {
		startReading();
	};

	const handleTextReadPause = () => {
		stopReading();
	};

	const handleReset = () => {
		const reader = textReaderRef.current;
		reader?.reset();
		stopReading();
		setElapsedTime(0);
		setCurrentWordIndex(1);
	};

	const handleRateChange = (value: string) => {
		const reader = textReaderRef.current;
		if (!reader) return;
		reader.editUtterance({ rate: +value });
		setRate(value);
		setDuration(reader.state.duration);
	};

	const handleVoiceChange = (value: string) => {
		const reader = textReaderRef.current;
		reader?.editUtterance({ voiceURI: value });
		setVoice(value);
	};

	const handleVolumeChange: ChangeEventHandler = (e) => {
		const reader = textReaderRef.current;
		const target = e.target as HTMLInputElement;
		if (!reader) return;
		reader.editUtterance({ volume: +target.value });
		setVolume(target.value);
	};

	const handleHideReader = () => {
		hideTextReader();
		handleTextReadPause();
	};

	const handleMinimizeReader = () => {
		minimize();
	};

	const handleMaximizeReader = () => {
		maximize();
	};

	const handlePreserveHighlighting: ChangeEventHandler = (e) => {
		const reader = textReaderRef.current;
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
		const reader = textReaderRef.current;
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
		const reader = textReaderRef.current;
		reader?.seekTo(val);
	};

	useEffect(() => {
		/* Reset browser active speech synth queue on refresh or new load */

		window.speechSynthesis.cancel();

		if (!textContainer) return;

		textReaderRef.current = new SpeechSynth(textContainer, {
			...options,
			color1: styleOptions?.highlightColor1 || '#DEE',
			color2: styleOptions.highlightColor2 || '#9DE',
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
				handleGenericSeek(idx);
			},
		});

		textReaderRef.current
			.init()
			.then((reader) => {
				setVoices(reader.state.voices);
				setVoice(reader.state.voices[0].voiceURI);
				setNumberOfWords(reader.state.numberOfWords);
				setDuration(reader.state.duration);
			})
			.catch((e) => console.log(e));

		return () => {
			textReaderRef.current?.reset();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textContainer]);

	/* Play */

	useEffect(() => {
		const reader = textReaderRef.current;

		if (!reader || isFirstRender) return setIsLoading(false);
		if (isReading) {
			if (reader.isPaused()) {
				console.log('Resuming');
				reader.resume();
			} else {
				console.log('Playing');
				setIsLoading(true);
				reader.play().then(() => {
					console.log('Effectively starts to speak');
					setIsLoading(false);
				});
			}
		} else if (reader.isPlaying()) reader.pause();
	}, [isReading, textContainer, isFirstRender, setIsLoading]);

	return (
		<Container
			isvisible={isVisible.toString()}
			isminimized={isMinimized.toString()}
			styleoptions={styleOptions}
		>
			{/* Close button */}
			<WindowButton
				style={{ position: 'absolute', top: '2px', right: '3px' }}
				styleoptions={styleOptions}
				onPointerDown={handleHideReader}
			>
				<MdOutlineClose title="Close" />
			</WindowButton>
			{/* Minimize button */}
			<WindowButton
				style={{ position: 'absolute', top: '2px', right: '24px' }}
				title={isMinimized ? 'Maximize' : 'Minimize'}
				styleoptions={styleOptions}
				onPointerDown={
					isMinimized ? handleMaximizeReader : handleMinimizeReader
				}
			>
				{isMinimized ? <FiMaximize /> : <FiMinimize />}
			</WindowButton>

			{/* Seek bar */}

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

			{/* Main controls unit */}
			<ControlsContainer isminimized={isMinimized.toString()}>
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
						onPointerDown={() =>
							handleGenericSeek(
								currentWordIndex + 5 >=
									(textReaderRef.current?.state.wholeTextArray
										.length as number)
									? (textReaderRef.current?.state
											.wholeTextArray?.length as number)
									: currentWordIndex + 5
							)
						}
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
										/(Microsoft\s)|(Online\s)|(\(Natural\))|(\s-.*$)/gm, // Display only the plain voice name
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
						issettingsvisible={isSettingsVisible.toString()}
						onPointerDown={toggleSettings}
					>
						<label
							htmlFor="is-row-check"
							onPointerDown={(e) => e.stopPropagation()}
						>
							<CheckBox
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

TextReader.defaultProps = {
	options: {
		/* Voice settings */
		pitch: 1,
		rate: 1,
		language: 'en',
		voiceURI: 'Microsoft Aria Online (Natural) - English (United States)',
		volume: 1,
		/* Options */
		isHighlightTextOn: true,
		isPreserveHighlighting: true,
		isSSROn: false,
	},
	styleOptions: {
		primaryColor: '#00D',
		secondaryColor: '#55F',
		bgColor: '#FFF',
		textColor: '#222',
		highlightColor1: '#98AFC7',
		highlightColor2: '#737CA1',
	},
};

export default TextReader;
export * from './store';
export * from './lib';
