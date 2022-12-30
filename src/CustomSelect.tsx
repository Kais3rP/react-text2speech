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
	styleoptions: IStyleOptions;
}

interface IOptionsContainer {
	styleoptions: IStyleOptions;
	showOptions: boolean;
}

const Container = styled.div`
	margin-right: 10px;
`;

const StyledButton = styled.button<IStyledButtonProps>`
	position: relative;
	font-size: 0.7em;
	font-weight: bold;
	color: ${(props) => props.styleoptions.primaryColor};
	cursor: pointer;
	transition: all 0.5s linear;
	border: none;
	background: none;
	padding: 1px 6px !important;
	&:hover {
		color: ${(props) => props.styleoptions.secondaryColor};
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0px;
		height: 1.2px;
		background-color: ${(props) => props.styleoptions.primaryColor};
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
	height: 46px;
	bottom: 0px;
	right: 0;
	background-color: ${(props) => props.styleoptions.bgColor};
	color: ${(props) => props.styleoptions.primaryColor};
	z-index: 100;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
`;

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
		onChange(val);
		hide();
	};

	useOnClickOutside(ref, hide);

	return (
		<Container {...props}>
			<StyledButton
				type="button"
				onClick={show}
				styleoptions={styleOptions}
			>
				{options.find((o) => o.value === value)?.name}
			</StyledButton>
			<OptionsContainer
				ref={ref}
				styleoptions={styleOptions}
				showOptions={showOptions}
			>
				{/* <Label styleoptions={styleOptions}>{title}</Label> */}
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
