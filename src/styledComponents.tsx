import { BiDotsHorizontal, BiReset } from 'react-icons/bi';
import styled from 'styled-components';

interface IContainerProps {
	isVisible: boolean;
	isMinimized: boolean;
	styleOptions: IStyleOptions;
}

interface IWindowButton {
	styleOptions: IStyleOptions;
}

interface ISeekbarContainer {
	isMinimized: boolean;
}

interface ISeekBar {
	styleOptions: IStyleOptions;
}

interface IControlsContainer {
	isMinimized: boolean;
}

interface IControlButton {
	styleOptions: IStyleOptions;
	isLoading: boolean;
}

interface IDots {
	styleOptions: IStyleOptions;
}

interface IReset {
	styleOptions: IStyleOptions;
}

interface IExtraSettings {
	styleOptions: IStyleOptions;
	issettingsvisible: boolean;
}

/* Styled Components */

export const Container = styled.div<IContainerProps>`
	position: fixed;
	zindex: 1000;
	bottom: 5px;
	right: ${(props: any) => (props.isVisible ? '10px' : '-2000px')};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 200ms linear;
	width: ${(props: any) => (props.isMinimized ? '150px' : '300px')};
	border-radius: 5px;
	box-shadow: 0px 0px 10px 2px #aaa;
	padding: 15px;
	background-color: ${(props: any) => props.styleOptions.bgColor};
`;

export const WindowButton = styled.div<IWindowButton>`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	font-size: 0.8rem;
	width: 12;
	height: 12;
	border-radius: 3px;
	border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
	background-color: ${(props: any) => props.styleOptions.bgColor};
	color: ${(props: any) => props.styleOptions.textColor};
	font-weight: bold;
	cursor: pointer;
	position: absolute;
	top: 2px;
	right: 2px;
	transition: all 0.2s linear;
	&:hover {
		backgroundcolor: ${(props: any) => props.styleOptions.bgColor};
		color: ${(props: any) => props.styleOptions.secondaryColor};
	}
`;

export const SeekbarContainer = styled.div<ISeekbarContainer>`
	text-align: center;
	width: ${(props: any) => (props.isMinimized ? '100%' : '90%')};
	position: relative;
	z-index: 2;
	margin-top: 10px;
`;

export const Time = styled.h5`
	width: 50px;
	font-size: 0.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 3px;
	left: -15px;
	z-index: 100;
	color: #111;
`;

export const Seekbar = styled.input<ISeekBar>`
	width: 100%;
	appearance: none;
	height: 2px;
	background: ${(props: any) => props.styleOptions.primaryColor};
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	::-webkit-slider-thumb {
		appearance: none;
		width: 14px; /* Set a specific slider handle width */
		height: 14px; /* Slider handle height */
		background: ${(props: any) => props.styleOptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
	&::-webkit-slider-thumb:hover {
		transform: scale(1.1);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
	}
	::-moz-range-thumb {
		appearance: none;
		width: 12px; /* Set a specific slider handle width */
		height: 12px; /* Slider handle height */
		background: ${(props: any) => props.styleOptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
`;

export const ControlsContainer = styled.div<IControlsContainer>`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	margin: 5px 0px 5px 0px;
	& div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	${(props: any) =>
		props.isMinimized
			? 'border-bottom: 1px; padding: 2px 0px 2px 0px;'
			: 'padding-top: 2px'}
`;

export const ControlButton = styled.div<IControlButton>`
	border-radius: 50%;
	background-color: ${(props: any) => props.styleOptions.bgColor};
	color: ${(props: any) => props.styleOptions.primaryColor};
	font-size: bold;
	cursor: pointer;
	border: 2px solid ${(props: any) => props.styleOptions.secondaryColor};
	&:hover {
		border: 2px solid ${(props: any) => props.styleOptions.primaryColor};
		background-color: ${(props: any) => props.styleOptions.bgColor};
		color: ${(props: any) => props.styleOptions.secondaryColor};
	}
	transition: all 0.2s;
	font-size: 1rem;
	pointer-events: ${(props) => (props.isLoading ? 'none' : 'default')};
`;

export const OptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 13px;
	& div#options-wrapper-1 {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
	}
	& div#options-wrapper-2 {
		width: 200px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;

export const Dots = styled(BiDotsHorizontal)<IDots>`
	font-size: 0.8rem;
	color: ${(props) => props.styleOptions.primaryColor};
	margin-bottom: 3px;
	padding: 0px;
	cursor: pointer;
	&:hover {
		color: ${(props) => props.styleOptions.secondaryColor};
	}
`;

export const Reset = styled(BiReset)<IReset>`
	position: absolute;
	top: 50%;
	right: 5px;
	font-weight: bold;
	cursor: pointer;
	transition: 0.2s ease-in;
	font-size: 0.9rem;
	color: ${(props) => props.styleOptions.primaryColor};
	&:hover {
		color: ${(props) => props.styleOptions.secondaryColor};
	}
`;

export const SliderContainer = styled.div`
	width: 70px;
`;

export const ExtraSettings = styled.div<IExtraSettings>`
	opacity: ${(props) => (props.issettingsvisible ? 1 : 0)};
	pointer-events: ${(props) => (props.issettingsvisible ? 'all' : 'none')};
	position: absolute;
	width: 100%;
	height: 50px;
	bottom: 0px;
	right: 0px;
	background-color: ${(props) => props.styleOptions.bgColor};
	color: ${(props) => props.styleOptions.primaryColor};
	z-index: 100;
	display: flex;
	justify-content: start;
	align-items: center;
	transition: all 0.2s linear;

	& label {
		display: flex;
		padding: 0px;
		margin: 0px;
	}

	& input {
		cursor: pointer;
	}

	& h5 {
		padding: 0px;
		margin: 0px;
		font-size: 0.8rem;
		margin-left: 1px;
	}
`;
