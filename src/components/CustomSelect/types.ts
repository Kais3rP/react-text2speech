export interface IOption {
	name: string;
	value: string;
}

export interface ICustomSelectProps {
	children?: JSX.Element | string;
	options: IOption[];
	value: string;
	title: string;
	onChange: (v: string) => void;
	[key: string]: any;
}
