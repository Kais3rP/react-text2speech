import React, { FC, useMemo } from 'react';
import { ISecondaryControlsProps } from './types';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import Options from 'components/Options/Options';
import ColorIcon from 'components/ColorIcon/ColorIcon';
import UnderlinedTextIcon from 'components/UnderlinedTextIcon/UnderlinedTextIcon';
import { IOption } from 'components/CustomSelect/types';
import ColorPreview from 'components/ColorPreview/ColorPreview';
import BrushIcon from 'components/BrushIcon/BrushIcon';
import BrushPreview from 'components/BrushPreview/BrushPreview';

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
	{ name: 'White', value: '#FFFFFF' },
	{ name: 'Black', value: '#000000' },
];

const brushes: IOption[] = [
	{ name: '1', value: 'brush-1' },
	{ name: '2', value: 'brush-2' },
	{ name: '3', value: 'brush-3' },
	{ name: '4', value: 'brush-4' },
	{ name: '5', value: 'brush-5' },
	{ name: '6', value: 'brush-6' },
	{ name: '7', value: 'brush-7' },
	{ name: '8', value: 'brush-8' },
	{ name: '9', value: 'brush-9' },
	{ name: '10', value: 'brush-10' },
];

const languages: IOption[] = [
	{ name: 'English', value: 'en' },
	{ name: 'Italian', value: 'it' },
	{ name: 'French', value: 'fr' },
	{ name: 'Spanish', value: 'es' },
	{ name: 'German', value: 'de' },
	{ name: 'Chinese', value: 'ch' },
];

const SecondaryControls: FC<ISecondaryControlsProps> = () => {
	const { reader } = useReader();
	const { state } = useStore();

	const {
		voices,
		settings: { voiceURI, rate, language },
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

	const handleLanguageChange = (value: string) => {
		if (!reader) return;
		reader.settings.language = value;
	};

	const handleHighlightColorChange = (value: string) => {
		if (!reader) return;
		reader.style.color1 = value;
	};

	const handleHighlightFontColorChange = (value: string) => {
		if (!reader) return;
		reader.style.color2 = value;
	};

	const handleBrushChange = (value: string) => {
		if (!reader) return;
		reader.style.brush = value;
	};

	/* Update the palette colors shown adding the custom highlight colors passed by props on the initial TextReader render */

	const colors = useMemo(() => {
		const updatedPalette = [...palette];
		for (const entry of Object.entries(highlightStyle))
			if (
				!palette.find((c) => c.value === entry[1]) &&
				/color/.test(entry[0])
			)
				updatedPalette.push({
					name: entry[1],
					value: entry[1],
				});
		return updatedPalette;
	}, [highlightStyle]);

	return (
		<div className={styles.container}>
			<div className={styles.optionsWrapper1}>
				{/* Rate setting  */}
				<CustomSelect
					name="rate"
					options={rates}
					onChange={handleRateChange}
					value={rate.toString()}
					defaultValue="1"
					title="Rate"
					Icon={UnderlinedTextIcon}
				/>
				{/* Language setting  */}
				<CustomSelect
					name="language"
					options={languages}
					onChange={handleLanguageChange}
					value={language || ''}
					defaultValue="1"
					title="Language"
					Icon={UnderlinedTextIcon}
				/>
				{/* Voice setting  */}
				<CustomSelect
					name="voice"
					options={voices}
					onChange={handleVoiceChange}
					value={voiceURI || ''}
					defaultValue="1"
					title="Voice"
					Icon={UnderlinedTextIcon}
				/>
				{/* Palette style */}
				<CustomSelect
					name="palette"
					options={colors}
					onChange={handleHighlightColorChange}
					value={highlightStyle.color1}
					defaultValue="lavander"
					title="Palette"
					Icon={ColorIcon}
					ExtraComponent={ColorPreview}
				/>
				<CustomSelect
					name="palette"
					options={colors}
					onChange={handleHighlightFontColorChange}
					value={highlightStyle.color2}
					defaultValue="lavander"
					title="Palette"
					Icon={ColorIcon}
					ExtraComponent={ColorPreview}
				/>
				{/* Brush type */}
				<CustomSelect
					name="brush-type"
					options={brushes}
					onChange={handleBrushChange}
					value={highlightStyle.brush}
					defaultValue="lavander"
					title="Palette"
					Icon={BrushIcon}
					ExtraComponent={BrushPreview}
				/>

				{/* <ImInfo
					style={{ marginLeft: '10px' }}
					className={styles.icon}
					onPointerDown={toggleSettings}
				/> */}
			</div>

			<div className={styles.optionsWrapper2}>
				{/* Reader Options Button */}
				<Options />
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
