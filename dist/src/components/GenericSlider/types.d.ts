/// <reference types="react" />
export interface ISliderData {
    value: number;
    min: string;
    max: string;
    step: string;
    unit: string;
}
export interface IGenericSliderProps {
    children?: JSX.Element | string;
    data: ISliderData;
    onChange: (value: number) => void;
    icon?: JSX.Element;
    [key: string]: any;
}
//# sourceMappingURL=types.d.ts.map