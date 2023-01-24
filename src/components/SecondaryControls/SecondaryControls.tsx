import React, { FC } from 'react';
import { ISecondaryControlsProps } from './types';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { BiVolumeFull } from '@react-icons/all-files/bi/BiVolumeFull';
import { setDuration } from 'store/actions';
import { useReader, useStore, useMainProps } from 'contexts';
import styles from './styles.module.css';
import GenericSlider from 'components/GenericSlider/GenericSlider';
import Options from 'components/Options/Options';

const SecondaryControls: FC<ISecondaryControlsProps> = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const { styleOptions } = useMainProps();
	const {
		voices,
		settings: { voiceURI, volume, rate },
	} = state;

	/* Settings Handlers */

	const handleRateChange = (value: string) => {
		reader?.changeSettings({ rate: +value });
		dispatch(setDuration(reader?.state.duration || 0));
	};

	const handleVoiceChange = (value: string) => {
		reader?.changeSettings({ voiceURI: value });
	};

	const handleVolumeChange = (value: number) => {
		reader?.changeSettings({ volume: value });
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
