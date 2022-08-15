import React, { FC, ChangeEventHandler } from 'react';
import styled from 'styled-components';

export type SliderData = {
	value: number;
	min: string;
	max: string;
	step: string;
	unit: string;
};

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

const StyledSlider = styled.input`
	width: 100%;
	appearance: none;
	height: 2px;
	background: var(--bg-dark);
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
		background: var(--color-extra2); /* Green background */
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid var(--color-extra1);
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
		background: var(--color-extra2); /* Extra background */
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid var(--color-light);
		border-radius: 2px;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
`;

const Icon = styled.div`
	font-size: 0.9rem;
	margin-right: 5px;
	& * {
		stroke: var(--bg-dark);
		color: var(--bg-dark);
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
			{icon && <Icon>{icon}</Icon>}
			<StyledSlider
				min={data.min}
				max={data.max}
				step={data.step}
				type="range"
				value={data.value}
				onChange={onChange}
			/>
		</SliderContainer>
	);
};

export default Slider;
