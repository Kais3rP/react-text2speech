import { useStore } from 'contexts';
import { Utils } from 'lib';
import React, { FC } from 'react';
import styles from './styles.module.css';
import { IBrushPreviewProps } from './types';

/* React Components */

const BrushPreview: FC<IBrushPreviewProps> = ({ option }) => {
	const { state } = useStore();
	const { color1 } = state.highlightStyle;
	const URL = Utils.getBrushURL(option.value, color1);
	return (
		<div className={styles.container} style={{ backgroundImage: URL.css }}>
			{/* <h5 className={styles.label}>{option.name}</h5> */}
			{/* <h5 className={styles.ascii}>{option.value}</h5> */}
		</div>
	);
};

export default BrushPreview;
