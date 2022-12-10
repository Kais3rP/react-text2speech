import React, { FC, ChangeEventHandler } from 'react';
import styled from 'styled-components';

export type SliderData = {
	value: number;
	min: string;
	max: string;
	step: string;
	unit: string;
};

interface IIcon {
	styleOptions: IStyleOptions;
}

interface ISlider {
	styleOptions: IStyleOptions;
}

interface IProps {
	children?: JSX.Element | string;
	data: SliderData;
	onChange: ChangeEventHandler;
	styleOptions: IStyleOptions;
	icon?: JSX.Element;
	[key: string]: any;
}

/* Styled Components */

const SliderContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	& input {
		width: 100%;
	}

	& label {
		position: absolute;
		top: 0;
		font-size: 0.7rem;
		right: 0%;
	}

	& label.value {
		top: -1rem;
		color: var(--color-extra1);
	}
`;

const StyledSlider = styled.input<ISlider>`
	width: 100%;
	appearance: none;
	height: 2px;
	background: ${(props: any) => props.styleOptions.primaryColor};
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	&:hover {
		opacity: 1;
	}
	&::-webkit-slider-thumb {
		appearance: none;
		width: 8px; /* Set a specific slider handle width */
		height: 17px; /* Slider handle height */
		background: ${(props: any) => props.styleOptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		border-radius: 2px;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
	&::-webkit-slider-thumb:hover {
		transform: scale(2, 1.1);
	}
	&::-moz-range-thumb {
		appearance: none;
		width: 8px; /* Set a specific slider handle width */
		height: 20px; /* Slider handle height */
		background: ${(props: any) => props.styleOptions.primaryColor};
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		border-radius: 2px;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
`;

const Icon = styled.div<IIcon>`
	font-size: 0.9rem;
	margin-right: 5px;
	& * {
		stroke: ${(props: any) => props.styleOptions.primaryColor};
		color: ${(props: any) => props.styleOptions.primaryColor};
	}
`;

const Slider: FC<IProps> = ({
	data,
	onChange,
	icon,
	styleOptions,
	...props
}) => {
	return (
		<SliderContainer {...props}>
			{icon && <Icon styleOptions={styleOptions}>{icon}</Icon>}
			<StyledSlider
				min={data.min}
				max={data.max}
				step={data.step}
				type="range"
				value={data.value}
				onChange={onChange}
				styleOptions={styleOptions}
			/>
		</SliderContainer>
	);
};

export default Slider;
