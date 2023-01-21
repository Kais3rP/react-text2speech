import React, { FC } from 'react';
import { StyledButton } from './styled';

export interface IButtonProps {
	children?: JSX.Element | string;
	styleOptions: IStyleOptions;
	[key: string]: any;
}

/* React Components */

export const Button: FC<IButtonProps> = ({
	children,
	styleOptions,
	...props
}) => {
	return (
		<StyledButton styleoptions={styleOptions} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;
