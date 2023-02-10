import { FC } from 'react';
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
    Icon: FC<any>;
    ExtraComponent?: FC<any>;
    [key: string]: any;
}
//# sourceMappingURL=types.d.ts.map