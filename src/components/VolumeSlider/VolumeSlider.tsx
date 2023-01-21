import React, { FC } from 'react';
import { Icon, StyledSlider, SliderContainer } from './styles';
import { IVolumeSliderProps } from './types';

const VolumeSlider: FC<IVolumeSliderProps> = ({
	data,
	onChange,
	icon,
	styleOptions,
	...props
}) => {
	return (
		<SliderContainer {...props}>
			{icon && <Icon styleoptions={styleOptions}>{icon}</Icon>}
			<StyledSlider
				min={data.min}
				max={data.max}
				step={data.step}
				type="range"
				value={data.value}
				onChange={onChange}
				styleoptions={styleOptions}
			/>
		</SliderContainer>
	);
};

export default VolumeSlider;
