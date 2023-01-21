import styled from 'styled-components';

interface IWindowButton {
	styleoptions: IStyleOptions;
}

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
