import React, { FC } from 'react';
import styles from './styles.module.css';
import { IError } from 'store/types';

export const ErrorOverlay: FC<{ error: IError }> = ({ error }) => {
	return (
		<div className={styles.overlay}>
			<h5 className={styles.error}>{error.message}</h5>
		</div>
	);
};
