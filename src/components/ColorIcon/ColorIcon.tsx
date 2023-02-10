import React, { FC } from 'react';
import styles from './styles.module.css';
import { IColorIconProps } from './types';

/* React Components */

export const ColorIcon: FC<IColorIconProps> = ({
	children,
	option,
	...props
}) => {
	return (
		option && (
			<span
				className={styles.icon}
				style={{ backgroundColor: option.value }}
				{...props}
			>
				{children}
			</span>
		)
	);
};

export default ColorIcon;
