export interface ITextReaderProps {
	children?: JSX.Element | string;
	options: { language: string };
	styleOptions: IStyleOptions;
	textContainer: HTMLElement;
}
