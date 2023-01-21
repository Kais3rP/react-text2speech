import styled from 'styled-components';

interface IStyledButtonProps {
	styleoptions: IStyleOptions;
}

interface IOptionsContainer {
	styleoptions: IStyleOptions;
	showOptions: boolean;
}

export const Container = styled.div`
	margin-right: 10px;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
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

export const OptionsContainer = styled.div<IOptionsContainer>`
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
