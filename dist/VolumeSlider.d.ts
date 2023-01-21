import { FC, ChangeEventHandler } from 'react';
export declare type SliderData = {
    value: number;
    min: string;
    max: string;
    step: string;
    unit: string;
};
interface IProps {
    children?: JSX.Element | string;
    data: SliderData;
    onChange: ChangeEventHandler;
    styleOptions: IStyleOptions;
    icon?: JSX.Element;
    [key: string]: any;
}
declare const Slider: FC<IProps>;
export default Slider;
//# sourceMappingURL=VolumeSlider.d.ts.map