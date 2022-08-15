import { FC } from 'react';
interface IProps {
    children?: JSX.Element | string;
    options?: ISettings & IOptions;
    styleOptions: IStyleOptions;
    textContainer: HTMLElement;
}
declare const AudioReader: FC<IProps>;
export default AudioReader;
export * from './store';
export * from './lib';
//# sourceMappingURL=index.d.ts.map