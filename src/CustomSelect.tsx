import React, { FC, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from './hooks/index';

export interface IOption {
	name: string;
	value: string;
}

export interface ICustomSelectProps {
	children?: JSX.Element | string;
	options: IOption[];
	value: string;
	title: string;
	onChange: (v: string) => void;
	styleOptions: IStyleOptions;
	style?: { [key: string]: string };
	[key: string]: any;
}

export interface IButtonProps {
	children?: JSX.Element | string;
	styleOptions: IStyleOptions;
	[key: string]: any;
}

interface IStyledButtonProps {
	styleOptions: IStyleOptions;
}

interface IOptionsContainer {
	styleOptions: IStyleOptions;
	showOptions: boolean;
}

/* interface ILabel {
	styleOptions: IStyleOptions;
}
 */
const Container = styled.div`
	margin-right: 10px;
`;

const StyledButton = styled.button<IStyledButtonProps>`
	position: relative;
	font-size: 0.7rem;
	font-weight: bold;
	color: ${(props) => props.styleOptions.primaryColor};
	cursor: pointer;
	transition: all 0.5s linear;
	border: none;
	background: none;
	&:hover {
		color: ${(props) => props.styleOptions.secondaryColor};
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0px;
		height: 2px;
		background-color: ${(props) => props.styleOptions.primaryColor};
		transition: all 0.2s ease-in;
	}
	&:hover::after {
		width: 100%;
	}
`;

const OptionsContainer = styled.div<IOptionsContainer>`
	opacity: ${(props) => (props.showOptions ? 1 : 0)};
	pointer-events: ${(props) => (props.showOptions ? 'all' : 'none')};
	position: absolute;
	width: 100%;
	bottom: 0px;
	right: 0;
	background-color: ${(props) => props.styleOptions.bgColor};
	color: ${(props) => props.styleOptions.primaryColor};
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 0px 10px 0px;
`;

/* const Label = styled.div<ILabel>`
	color: ${(props) => props.styleOptions.secondaryColor};
`; */

export const Button: FC<IButtonProps> = ({
	children,
	styleOptions,
	...props
}) => {
	return (
		<StyledButton styleOptions={styleOptions} {...props}>
			{children}
		</StyledButton>
	);
};

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	value,
	title,
	onChange,
	styleOptions,
	style,
	...props
}) => {
	const [showOptions, setShowOptions] = useState(false);
	const ref = useRef(null);

	const show = () => {
		setShowOptions(true);
	};

	const hide = useCallback(() => {
		setShowOptions(false);
	}, []);

	const onOptionClick = (val: string) => {
		console.log('Click and hide');
		onChange(val);
		hide();
	};

	useOnClickOutside(ref, hide);
	console.log('Show options', showOptions);
	return (
		<Container {...props}>
			<StyledButton
				type="button"
				onClick={show}
				styleOptions={styleOptions}
			>
				{options.find((o) => o.value === value)?.name}
			</StyledButton>
			<OptionsContainer
				ref={ref}
				styleOptions={styleOptions}
				showOptions={showOptions}
			>
				{/* <Label styleOptions={styleOptions}>{title}</Label> */}
				{options.map((opt) => (
					<Button
						key={opt.value}
						onClick={() => {
							onOptionClick(opt.value);
						}}
						styleOptions={styleOptions}
					>
						{opt.name}
					</Button>
				))}
			</OptionsContainer>
		</Container>
	);
};

export default CustomSelect;
