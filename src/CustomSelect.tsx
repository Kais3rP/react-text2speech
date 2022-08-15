import React, { FC, useState, useRef, useCallback, CSSProperties } from 'react';
import { useOnClickOutside } from './hooks/index';

export interface IOption {
	name: string;
	value: string;
}

export interface IProps {
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

export const Button: FC<IButtonProps> = ({
	children,
	styleOptions,
	...props
}) => {
	const button = {
		fontSize: '0.7rem',
		fontWeight: 'bold',
		color: styleOptions.primaryColor,
		cursor: 'pointer',
		transition: 'all 0.5s linear',
	};

	return (
		<button style={button} {...props}>
			{children}
		</button>
	);
};

const CustomSelect: FC<IProps> = ({
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

	const container = {
		marginRight: '10px',
	};

	const optionsStyle: CSSProperties = {
		position: 'absolute',
		width: '100%',
		bottom: '0px',
		right: '0',
		background: styleOptions.bgColor,
		color: styleOptions.textColor,
		padding: '5px',
		zIndex: '100',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		transition: 'all 0.2s ease-in,',
	};

	const titleStyle: CSSProperties = {};

	return (
		<div style={{ ...container, ...props.style }} {...props}>
			<Button type="button" onClick={show} styleOptions={styleOptions}>
				{options.find((o) => o.value === value)?.name}
			</Button>
			<div
				ref={ref}
				style={{
					...optionsStyle,
					opacity: showOptions ? 1 : 0,
					pointerEvents: showOptions ? 'all' : 'none',
				}}
			>
				<div style={titleStyle}>{title}</div>
				{options.map((opt) => (
					<Button
						key={opt.value}
						onClick={() => onOptionClick(opt.value)}
						styleOptions={styleOptions}
					>
						{opt.name}
					</Button>
				))}
			</div>
		</div>
	);
};

export default CustomSelect;
