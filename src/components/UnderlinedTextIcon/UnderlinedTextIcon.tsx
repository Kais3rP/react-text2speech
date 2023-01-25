import React, { FC } from 'react';
import styles from './styles.module.css';
import { IUnderlinedTextIconProps } from './types';

export const UnderlinedTextIcon: FC<IUnderlinedTextIconProps> = ({
	children,
	option,
	...props
}) => {
	return (
		option && (
			<div className={styles.container} {...props}>
				{option.name}
				{children}
			</div>
		)
	);
};

export default UnderlinedTextIcon;
