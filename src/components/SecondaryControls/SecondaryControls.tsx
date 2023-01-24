import React, { ChangeEventHandler, FC } from 'react';
import { ISecondaryControlsProps } from './types';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { BiVolumeFull } from 'react-icons/bi';
import VolumeSlider from 'components/VolumeSlider/VolumeSlider';
import { setDuration, setIsSettingsVisible } from 'store/actions';
import { useReader, useStore, useMainProps } from 'contexts';
import styles from './styles.module.css';
import { FcSettings } from 'react-icons/fc';
/* import { ImInfo } from 'react-icons/im';
 */
const SecondaryControls: FC<ISecondaryControlsProps> = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const { styleOptions } = useMainProps();
	const {
		voices,
		isSettingsVisible,
		settings: { voiceURI, volume, rate },
		options: { isChunksModeOn, isHighlightTextOn, isPreserveHighlighting },
	} = state;

	const toggleSettings = () => {
		dispatch(setIsSettingsVisible(!isSettingsVisible));
	};

	/* Settings Handlers */

	const handleRateChange = (value: string) => {
		reader?.changeSettings({ rate: +value });
		dispatch(setDuration(reader?.state.duration || 0));
	};

	const handleVoiceChange = (value: string) => {
		reader?.changeSettings({ voiceURI: value });
	};

	const handleVolumeChange: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		reader?.changeSettings({ volume: +target.value });
	};

	/* Options Handlers */

	const handlePreserveHighlighting: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		reader?.changeOptions({ isPreserveHighlighting: target.checked });
	};

	const handleIsHighlightTextOn: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		reader?.changeOptions({ isHighlightTextOn: target.checked });
	};

	const handleIsChunksModeOn: ChangeEventHandler = (e) => {
		if (reader?.state.isMobile) return; // Disable this option for mobile devices
		const target = e.target as HTMLInputElement;
		reader?.changeOptions({ isChunksModeOn: target.checked });
	};

	return (
		<div className={styles.container}>
			<div className={styles.optionsWrapper1}>
				{/* Rate setting button */}
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
					value={rate.toString()}
					defaultValue="1"
					title="Rate"
					styleOptions={styleOptions}
				/>
				{/* Voice setting button */}
				<CustomSelect
					name="voice"
					options={voices}
					onChange={handleVoiceChange}
					value={voiceURI || ''}
					defaultValue="1"
					title="Voices"
					styleOptions={styleOptions}
				/>
				{/* Reader Options Button */}
				<FcSettings
					className={styles.icon}
					onPointerDown={toggleSettings}
				/>
				{/* <ImInfo
					style={{ marginLeft: '10px' }}
					className={styles.icon}
					onPointerDown={toggleSettings}
				/> */}
			</div>

			<div className={styles.optionsWrapper2}>
				<VolumeSlider
					icon={<BiVolumeFull />}
					onChange={handleVolumeChange}
					data={{
						min: '0.1',
						max: '1',
						step: '0.1',
						value: volume,
						unit: '%',
					}}
					styleOptions={styleOptions}
				/>
			</div>
			<div
				className={`${styles.overlayContainer} ${
					isSettingsVisible && styles.visible
				}`}
				onPointerDown={toggleSettings}
			>
				<label
					htmlFor="preserve-option"
					onPointerDown={(e) => e.stopPropagation()}
				>
					<input
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
					<input
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
					<input
						id="mode-option"
						type="checkbox"
						checked={isChunksModeOn}
						onChange={handleIsChunksModeOn}
					/>
					<h5>Chunks Mode</h5>
				</label>
			</div>
		</div>
	);
};

export default SecondaryControls;
