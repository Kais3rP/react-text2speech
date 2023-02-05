import ShowButton from 'components/ShowButton/ShowButton';
import TextReader from 'components/TextReader/TextReader';
import { useStore } from 'contexts';
import React, { FC } from 'react';

const Wrapper: FC = () => {
	const {
		state: {
			UIState: { isVisible },
		},
	} = useStore();
	return (
		<>
			{!isVisible && <ShowButton />}
			<TextReader />
		</>
	);
};

export default Wrapper;
