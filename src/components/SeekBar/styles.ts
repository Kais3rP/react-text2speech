import styled from 'styled-components';

interface ISeekbarContainer {
	isminimized: string;
}

interface ISeekBar {
	styleoptions: IStyleOptions;
}

export const SeekbarContainer = styled.div<ISeekbarContainer>`
	text-align: center;
	width: ${(props: any) => (props.isminimized === 'true' ? '100%' : '90%')};
	position: relative;
	z-index: 2;
	margin-top: 10px;
`;

export const Seekbar = styled.input<ISeekBar>`
	width: 100%;
	appearance: none;
	height: 2px;
	background: ${(props: any) => props.styleoptions.primaryColor};
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	::-webkit-slider-thumb {
		appearance: none;
		width: 14px; /* Set a specific slider handle width */
		height: 14px; /* Slider handle height */
		background: ${(props: any) => props.styleoptions.bgColor};
		cursor: grab; /* Cursor on hover */
		border: 2px solid ${(props: any) => props.styleoptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px
			${(props: any) => props.styleoptions.secondaryColor};
		transition: transform 0.1s ease-out;
	}
	::-moz-range-thumb {
		appearance: none;
		width: 12px; /* Set a specific slider handle width */
		height: 12px; /* Slider handle height */
		background: ${(props: any) => props.styleoptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		border: 2px solid ${(props: any) => props.styleoptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px
			${(props: any) => props.styleoptions.secondaryColor};
		transition: transform 0.4s ease-out;
	}
	&::-webkit-slider-thumb:hover {
		transform: scale(1.1);
		box-shadow: 0 2px 10px ${(props: any) => props.styleoptions.bgColor};
	}

	&::-webkit-slider-thumb:active {
		cursor: grabbing;
	}
`;

export const Time = styled.h5`
	width: 50px;
	font-size: 0.7em !important;
	font-weight: normal !important;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 19px;
	left: -15px;
	z-index: 100 !important;
	color: #111;
	margin: 0 !important;
`;
