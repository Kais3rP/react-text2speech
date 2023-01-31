import { useStore } from 'contexts';
import { Utils } from 'lib';
import React, { FC } from 'react';
import styles from './styles.module.css';
import { IBrushIconProps } from './types';

/* React Components */

export const BrushIcon: FC<IBrushIconProps> = ({
	children,
	option,
	...props
}) => {
	const { state } = useStore();
	const { color1 } = state.highlightStyle;
	const URL = Utils.getBrushURL(option.value, color1);

	return (
		option && (
			<div
				className={styles.icon}
				style={{ backgroundImage: URL.css }}
				{...props}
			>
				<h5 className={styles.label}>{option.name}</h5>
				{children}
			</div>
		)
	);
};

export default BrushIcon;
