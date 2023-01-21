import { ChangeEventHandler } from 'react';

export interface SliderData {
	value: number;
	min: string;
	max: string;
	step: string;
	unit: string;
}

export interface IVolumeSliderProps {
	children?: JSX.Element | string;
	data: SliderData;
	onChange: ChangeEventHandler;
	styleOptions: IStyleOptions;
	icon?: JSX.Element;
	[key: string]: any;
}
