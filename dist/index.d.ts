import { FC } from 'react';
interface IProps {
    children?: JSX.Element | string;
    options: ISettings & IOptions & IStyle;
    styleOptions: IStyleOptions;
    textContainer: HTMLElement;
}
declare const TextReader: FC<IProps>;
export default TextReader;
export * from './store';
export * from './lib';
//# sourceMappingURL=index.d.ts.map