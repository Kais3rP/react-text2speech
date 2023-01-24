import React, { FC } from 'react';
import styles from './styles.module.css';

export interface IButtonProps {
	children?: JSX.Element | string;
	[key: string]: any;
}

/* React Components */

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<div className={styles.button} {...props}>
			{children}
		</div>
	);
};

export default Button;
