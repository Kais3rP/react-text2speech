import React, { FC } from 'react';
import { IVolumeSliderProps } from './types';
import styles from './styles.module.css';

const VolumeSlider: FC<IVolumeSliderProps> = ({
	data,
	onChange,
	icon,
	styleOptions,
	...props
}) => {
	return (
		<div className={styles.container} {...props}>
			{icon && <div className={styles.icon}>{icon}</div>}
			<input
				className={styles.slider}
				min={data.min}
				max={data.max}
				step={data.step}
				type="range"
				value={data.value}
				onChange={onChange}
			/>
		</div>
	);
};

export default VolumeSlider;
