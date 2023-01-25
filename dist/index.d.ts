import { BindReader } from 'contexts/types';
import { FC } from 'react';
export interface IProps {
    children?: JSX.Element | string;
    options: {
        language: string;
    };
    styleOptions: IStyleOptions;
    textContainer: HTMLElement;
    bindReader?: BindReader;
}
declare const App: FC<IProps>;
export declare const useTextReader: () => {
    handlers: {};
    state: {};
    bindReader: (state: any, handlers: any) => void;
};
export { SpeechSynth } from './lib';
export default App;
//# sourceMappingURL=index.d.ts.map