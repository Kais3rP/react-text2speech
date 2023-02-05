/* Providers */

import Wrapper from 'components/Wrapper/Wrapper';
import { MainPropsProvider, StoreProvider, ReaderProvider } from 'contexts';
import { BindReader } from 'contexts/types';
import React, { FC, useCallback, useState } from 'react';

export interface IProps {
	children?: JSX.Element | string;
	options: { language: string };
	styleOptions: IStyleTheme;
	textContainer: HTMLElement;
	bindReader?: BindReader;
}

const App: FC<IProps> = ({
	options,
	styleOptions,
	textContainer,
	bindReader,
}) => {
	return (
		<MainPropsProvider
			value={{
				options,
				styleOptions,
				textContainer,
				bindReader,
			}}
		>
			<StoreProvider>
				<ReaderProvider>
					<Wrapper />
				</ReaderProvider>
			</StoreProvider>
		</MainPropsProvider>
	);
};

App.defaultProps = {
	options: {
		language: 'en',
	},
	styleOptions: {
		primaryColor: '#00D',
		secondaryColor: '#55F',
		bgColor: '#FFF',
		textColor: '#222',
		highlightColor1: '#306EFF', // background color
		highlightColor2: '#FCDFFF', // font color
	},
};

/* Exported members */

export const useTextReader = () => {
	const [handlers, setHandlers] = useState({});
	const [state, setState] = useState({});

	const bindReader = useCallback(
		(state, handlers) => {
			setState(state);
			setHandlers(handlers);
		},
		[setState, setHandlers]
	);

	return { handlers, state, bindReader };
};

export { SpeechSynth } from './lib';

export default App;
