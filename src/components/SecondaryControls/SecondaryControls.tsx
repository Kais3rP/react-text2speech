import {
	CheckBox,
	ExtraSettingsContainer,
	InfoIcon,
	OptionsContainer,
	SettingsIcon,
} from './styles';
import React, { ChangeEventHandler, FC, useContext } from 'react';
import { useTextReaderStore } from 'store';
import { ISecondaryControlsProps } from './types';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { BiVolumeFull } from 'react-icons/bi';
import VolumeSlider from 'components/VolumeSlider/VolumeSlider';
import { GlobalStateContext } from 'components/TextReader/TextReader';
import { setDuration, setIsSettingsVisible, setVoice } from 'store/actions';

const SecondaryControls: FC<ISecondaryControlsProps> = ({ styleOptions }) => {
	const { state, dispatch, reader } = useContext(GlobalStateContext);
	const { voice, voices, isSettingsVisible, isChunksModeOn } = state;
	const {
		setRate,

		setVolume,

		rate,

		volume,
		enablePreserveHighlighting,
		disablePreserveHighlighting,
		enableHighlightText,
		disableHighlightText,
		isPreserveHighlighting,
		isHighlightTextOn,
	} = useTextReaderStore();

	const handleRateChange = (value: string) => {
		if (!reader) return;
		reader.editUtterance({ rate: +value });
		setRate(value);
		dispatch(setDuration(reader.state.duration));
	};

	const handleVoiceChange = (value: string) => {
		reader?.editUtterance({ voiceURI: value });
		dispatch(setVoice(value));
	};

	const handleVolumeChange: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		if (!reader) return;
		reader.editUtterance({ volume: +target.value });
		setVolume(target.value);
	};

	const toggleSettings = () => {
		dispatch(setIsSettingsVisible(!isSettingsVisible));
	};

	/* Options Handlers */

	const handlePreserveHighlighting: ChangeEventHandler = (e) => {
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

	const handleIsHighlightTextOn: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		if (!reader) return;
		if (target.checked) {
			enableHighlightText();
			reader.options.isHighlightTextOn = true;
		} else {
			disableHighlightText();
			reader.options.isHighlightTextOn = false;
		}
	};

	const handleIsChunksModeOn: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		if (!reader || reader.state.isMobile) return; // Disable this option for mobile devices
		// dispatch(setIsChunksModeOn(true)) // Optimistic update the checkbox for an immediate feel, it's going to be corrected i
		reader.changeChunkMode(target.checked);
	};
	console.log('IS chunks mode', isChunksModeOn);
	return (
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
						options={voices}
						onChange={handleVoiceChange}
						value={voice}
						defaultValue="1"
						title="Voices"
						styleOptions={styleOptions}
					/>
					<SettingsIcon
						styleoptions={styleOptions}
						onPointerDown={toggleSettings}
					/>
					<InfoIcon
						styleoptions={styleOptions}
						onPointerDown={toggleSettings}
					/>
				</div>

				<div id="options-wrapper-2">
					<VolumeSlider
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
				<ExtraSettingsContainer
					styleoptions={styleOptions}
					issettingsvisible={isSettingsVisible.toString()}
					onPointerDown={toggleSettings}
				>
					<label
						htmlFor="preserve-option"
						onPointerDown={(e) => e.stopPropagation()}
					>
						<CheckBox
							id="preserve-option"
							type="checkbox"
							checked={isPreserveHighlighting}
							onChange={handlePreserveHighlighting}
						/>
						<h5>Preserve Highlighting</h5>
					</label>
					<label
						htmlFor="highlight-option"
						onPointerDown={(e) => e.stopPropagation()}
					>
						<CheckBox
							id="highlight-option"
							type="checkbox"
							checked={isHighlightTextOn}
							onChange={handleIsHighlightTextOn}
						/>
						<h5>Highlight Text</h5>
					</label>
					<label
						htmlFor="mode-option"
						onPointerDown={(e) => e.stopPropagation()}
					>
						<CheckBox
							id="mode-option"
							type="checkbox"
							checked={isChunksModeOn}
							onChange={handleIsChunksModeOn}
						/>
						<h5>Chunks Mode</h5>
					</label>
				</ExtraSettingsContainer>
			</OptionsContainer>
		</>
	);
};

export default SecondaryControls;
