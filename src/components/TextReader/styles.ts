import { VscGithub } from 'react-icons/vsc';
import styled from 'styled-components';

interface IContainerProps {
	isvisible: string;
	isminimized: string;
	styleoptions: IStyleOptions;
}

interface IGIthubIcon {
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

export const SliderContainer = styled.div`
	width: 70px;
`;

export const GithubIcon = styled(VscGithub)<IGIthubIcon>`
	position: absolute;
	top: 3px;
	left: 3px;
	width: 17px;
	height: 17px;
	fill: ${(props) => props.styleoptions.primaryColor};
`;
