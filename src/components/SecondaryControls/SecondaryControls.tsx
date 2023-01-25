import React, { FC, useMemo } from 'react';
import { ISecondaryControlsProps } from './types';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { BiVolumeFull } from '@react-icons/all-files/bi/BiVolumeFull';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import GenericSlider from 'components/GenericSlider/GenericSlider';
import Options from 'components/Options/Options';
import ColorIcon from 'components/ColorIcon/ColorIcon';
import UnderlinedTextIcon from 'components/UnderlinedTextIcon/UnderlinedTextIcon';
import { IOption } from 'components/CustomSelect/types';

const rates: IOption[] = [
	{ value: '0.5', name: '0.5x' },
	{ value: '0.75', name: '0.75x' },
	{ value: '1', name: '1x' },
	{ value: '1.25', name: '1.25x' },
	{ value: '1.5', name: '1.5x' },
	{ value: '2', name: '2x' },
];

const palette: IOption[] = [
	{ name: 'Chocolate', value: '#C85A17' },
	{ name: 'Yellow', value: '#FFFF00' },
	{ name: 'Orange', value: '#FFA500' },
	{ name: 'Light Slate Blue', value: '#736AFF' },
	{ name: 'Ruby Red', value: '#F62217' },
	{ name: 'Bright Neon Pink', value: '#F433FF' },
	{ name: 'Desert Sand', value: '#EDC9AF' },
	{ name: 'Dark Goldenrod', value: '#AF7817' },
	{ name: 'Cotton Candy', value: '#FCDFFF' },
	{ name: 'Chartreuse', value: '#8AFB17' },
];

const SecondaryControls: FC<ISecondaryControlsProps> = () => {
	const { reader } = useReader();
	const { state } = useStore();

	const {
		voices,
		settings: { voiceURI, volume, rate },
		highlightStyle,
	} = state;

	/* Settings Handlers */

	const handleRateChange = (value: string) => {
		if (!reader) return;
		reader.settings.rate = +value;
	};

	const handleVoiceChange = (value: string) => {
		if (!reader) return;
		reader.settings.voiceURI = value;
	};

	const handleVolumeChange = (value: number) => {
		if (!reader) return;
		reader.settings.volume = value;
	};

	const handleHighlightColorChange = (value: string) => {
		if (!reader) return;
		reader.style.color1 = value;
	};

	const handleHighlightFontColorChange = (value: string) => {
		if (!reader) return;
		reader.style.color2 = value;
	};

	const colors = useMemo(() => {
		const updatedPalette = [...palette];
		for (const color of Object.values(highlightStyle))
			if (!palette.find((c) => c.value === color))
				updatedPalette.push({
					name: color,
					value: color,
				});
		return updatedPalette;
	}, [highlightStyle]);

	return (
		<div className={styles.container}>
			<div className={styles.optionsWrapper1}>
				{/* Rate setting button */}
				<CustomSelect
					name="rate"
					options={rates}
					onChange={handleRateChange}
					value={rate.toString()}
					defaultValue="1"
					title="Rate"
					Icon={UnderlinedTextIcon}
				/>
				{/* Voice setting button */}
				<CustomSelect
					name="voice"
					options={voices}
					onChange={handleVoiceChange}
					value={voiceURI || ''}
					defaultValue="1"
					title="Voices"
					Icon={UnderlinedTextIcon}
				/>
				{/* Palette */}
				<CustomSelect
					name="palette"
					options={colors}
					onChange={handleHighlightColorChange}
					value={highlightStyle.color1}
					defaultValue="lavander"
					title="Palette"
					Icon={ColorIcon}
				/>
				<CustomSelect
					name="palette"
					options={colors}
					onChange={handleHighlightFontColorChange}
					value={highlightStyle.color2}
					defaultValue="lavander"
					title="Palette"
					Icon={ColorIcon}
				/>
				{/* Reader Options Button */}
				<Options />
				{/* <ImInfo
					style={{ marginLeft: '10px' }}
					className={styles.icon}
					onPointerDown={toggleSettings}
				/> */}
			</div>

			<div className={styles.optionsWrapper2}>
				<GenericSlider
					icon={<BiVolumeFull />}
					onChange={handleVolumeChange}
					data={{
						min: '0.1',
						max: '1',
						step: '0.1',
						value: volume,
						unit: '%',
					}}
				/>
			</div>
		</div>
	);
};

export default SecondaryControls;

// "The Sea's Symphony"

/* 
Deep in the ocean blue,
Where colorful fishes swim,
They sing a melody,
A symphony within.

The whales and dolphins join in,
Their songs so grand and true,
The sea is alive, gives chillings,
A symphony for me and you.

The coral reefs, the seaweed beds,
All play their part,
That's a real work of art.

The ocean is a treasure,
We must protect it still,
For the sea's symphony,
Is a melody worth the thrill. 

*/
