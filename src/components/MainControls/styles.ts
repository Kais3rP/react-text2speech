import { BiReset } from 'react-icons/bi';
import styled from 'styled-components';

interface IControlsContainer {
	isminimized: string;
}

interface IControlButton {
	styleoptions: IStyleOptions;
	isloading: string;
}

interface IReset {
	styleoptions: IStyleOptions;
}

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
