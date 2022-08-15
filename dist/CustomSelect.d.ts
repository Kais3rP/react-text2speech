import { FC } from 'react';
export interface IOption {
    name: string;
    value: string;
}
export interface IProps {
    children?: JSX.Element | string;
    options: IOption[];
    value: string;
    title: string;
    onChange: (v: string) => void;
    styleOptions: IStyleOptions;
    style?: {
        [key: string]: string;
    };
    [key: string]: any;
}
export interface IButtonProps {
    children?: JSX.Element | string;
    styleOptions: IStyleOptions;
    [key: string]: any;
}
export declare const Button: FC<IButtonProps>;
declare const CustomSelect: FC<IProps>;
export default CustomSelect;
//# sourceMappingURL=CustomSelect.d.ts.map