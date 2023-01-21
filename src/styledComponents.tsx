import { BiReset } from 'react-icons/bi';
import { VscGithub } from 'react-icons/vsc';
// import { DiGithubFull } from 'react-icons/di';
import { ImInfo } from 'react-icons/im';
import { FcSettings } from 'react-icons/fc';
import styled from 'styled-components';

interface IContainerProps {
	isvisible: string;
	isminimized: string;
	styleoptions: IStyleOptions;
}

interface IWindowButton {
	styleoptions: IStyleOptions;
}

interface ISeekbarContainer {
	isminimized: string;
}

interface ISeekBar {
	styleoptions: IStyleOptions;
}

interface IControlsContainer {
	isminimized: string;
}

interface IControlButton {
	styleoptions: IStyleOptions;
	isloading: string;
}

interface ISettingsIcon {
	styleoptions: IStyleOptions;
}

interface IReset {
	styleoptions: IStyleOptions;
}

interface IExtraSettings {
	styleoptions: IStyleOptions;
	issettingsvisible: string;
}

interface ICheckBox {}

interface IGIthubIcon {
	styleoptions: IStyleOptions;
}

interface IInfoIcon {
	styleoptions: IStyleOptions;
}

/* Styled Components */

export const Container = styled.div<IContainerProps>`
	font-size: 16px;
	position: fixed;
	z-index: 1000;
	bottom: 5px;
	right: ${(props: any) => (props.isvisible === 'true' ? '10px' : '-2000px')};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 200ms linear;
	width: ${(props: any) =>
		props.isminimized === 'true' ? '150px' : '300px'};
	height: 115px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px 2px #aaa;
	padding: 15px;
	background-color: ${(props: any) => props.styleoptions.bgColor};
	font-family: Arial, sans-serif !important;
	box-sizing: border-box;
	& * {
		box-sizing: border-box;
	}
`;

export const WindowButton = styled.div<IWindowButton>`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	font-size: 1em !important;
	width: 20px;
	height: 20px;
	border-radius: 3px;
	border: 2px solid ${(props: any) => props.styleoptions.primaryColor};
	background-color: ${(props: any) => props.styleoptions.bgColor};
	color: ${(props: any) => props.styleoptions.textColor};
	font-weight: bold !important;
	cursor: pointer;
	transition: all 0.2s linear;
	&:hover {
		backgroundcolor: ${(props: any) => props.styleoptions.bgColor};
		color: ${(props: any) => props.styleoptions.secondaryColor};
	}
`;

export const SeekbarContainer = styled.div<ISeekbarContainer>`
	text-align: center;
	width: ${(props: any) => (props.isminimized === 'true' ? '100%' : '90%')};
	position: relative;
	z-index: 2;
	margin-top: 10px;
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
		props.isminimized === 'true'
			? 'border-bottom: 1px; padding: 2px 0px 2px 0px;'
			: 'padding-top: 2px'}
`;

export const ControlButton = styled.div<IControlButton>`
	border-radius: 50%;
	margin: 2px;
	background-color: ${(props: any) => props.styleoptions.bgColor};
	color: ${(props: any) => props.styleoptions.primaryColor};
	font-weight: normal !important;
	cursor: pointer;
	border: 2px solid ${(props: any) => props.styleoptions.secondaryColor};
	&:hover {
		border: 2px solid ${(props: any) => props.styleoptions.primaryColor};
		background-color: ${(props: any) => props.styleoptions.bgColor};
		color: ${(props: any) => props.styleoptions.secondaryColor};
	}
	transition: all 0.2s;
	font-size: 1.1em;
	pointer-events: ${(props) =>
		props.isloading === 'true' ? 'none' : 'auto'};
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

export const SettingsIcon = styled(FcSettings)<ISettingsIcon>`
	font-size: 1.1em;
	padding: 0px;
	cursor: pointer;
	transition: all 0.4s ease-out;
	& path {
		fill: ${(props) => props.styleoptions.primaryColor};
	}
	&:hover path {
		fill: ${(props) => props.styleoptions.secondaryColor};
	}
`;

export const InfoIcon = styled(ImInfo)<IInfoIcon>`
	font-size: 1.05em;
	padding: 0px;
	cursor: pointer;
	transition: all 0.4s ease-out;
	margin: 0px 0px 0px 10px;
	& path {
		fill: ${(props) => props.styleoptions.primaryColor};
	}
	&:hover path {
		fill: ${(props) => props.styleoptions.secondaryColor};
	}
`;

export const Reset = styled(BiReset)<IReset>`
	position: absolute;
	top: 50%;
	right: 5px;
	font-weight: bold;
	cursor: pointer;
	transition: 0.2s ease-in;
	font-size: 0.9em;
	color: ${(props) => props.styleoptions.primaryColor};
	&:hover {
		color: ${(props) => props.styleoptions.secondaryColor};
	}
`;

export const SliderContainer = styled.div`
	width: 70px;
`;

export const ExtraSettings = styled.div<IExtraSettings>`
	opacity: ${(props) => (props.issettingsvisible === 'true' ? 1 : 0)};
	pointer-events: ${(props) =>
		props.issettingsvisible === 'true' ? 'all' : 'none'};
	position: absolute;
	width: 100%;
	height: 46px;
	bottom: 0px;
	right: 0px;
	background-color: ${(props) => props.styleoptions.bgColor};
	color: ${(props) => props.styleoptions.primaryColor};
	z-index: 100;
	display: flex;
	justify-content: start;
	flex-direction: column;
	align-items: start;
	flex-wrap: wrap;
	transition: all 0.2s linear;
	padding: 0px 0px 0px 10px;
	overflow-y: auto;
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
		font-size: 0.6em;
		margin-left: 1px;
		font-weight: normal !important;
		line-height: 20px !important;
	}
`;

export const CheckBox = styled.input<ICheckBox>`
	margin: 0 !important;
	padding: 0 !important;
`;

export const GithubIcon = styled(VscGithub)<IGIthubIcon>`
	position: absolute;
	top: 3px;
	left: 3px;
	width: 17px;
	height: 17px;
	fill: ${(props) => props.styleoptions.primaryColor};
`;
