import React, { ChangeEventHandler, FC } from 'react';
import { IGenericSliderProps } from './types';
import styles from './styles.module.css';
import { Utils } from 'lib';

const GenericSlider: FC<IGenericSliderProps> = ({
	data,
	onChange,
	icon,
	...props
}) => {
	const debouncedOnChange = Utils.debounce(onChange, 5);

	const handleChange: ChangeEventHandler = (e) => {
		const value = +(e.target as HTMLInputElement).value;
		debouncedOnChange(value);
	};

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
				onChange={handleChange}
			/>
		</div>
	);
};

export default GenericSlider;
