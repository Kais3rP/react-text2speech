import { FcSettings } from 'react-icons/fc';
import { ImInfo } from 'react-icons/im';
import styled from 'styled-components';

interface ISettingsIcon {
	styleoptions: IStyleOptions;
}

interface IInfoIcon {
	styleoptions: IStyleOptions;
}

interface IExtraSettings {
	styleoptions: IStyleOptions;
	issettingsvisible: string;
}

interface ICheckBox {}

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

export const ExtraSettingsContainer = styled.div<IExtraSettings>`
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
