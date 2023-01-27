import React, { FC } from 'react';
import styles from './styles.module.css';
import { IColorPreviewProps } from './types';

/* React Components */

const ColorPreview: FC<IColorPreviewProps> = ({ option }) => {
	return (
		<div
			className={styles.container}
			style={{ backgroundColor: option.value }}
		>
			<h5 className={styles.label}>{option.name}</h5>
			{/* <h5 className={styles.ascii}>{option.value}</h5> */}
		</div>
	);
};

export default ColorPreview;
