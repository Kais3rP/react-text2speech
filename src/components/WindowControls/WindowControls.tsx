import { WindowButton } from './styles';
import React, { FC } from 'react';
import { IWindowControlsProps } from './types';
import { MdOutlineClose } from 'react-icons/md';
import { FiMaximize, FiMinimize } from 'react-icons/fi';
import { setIsMinimized, setIsVisible } from 'store/actions';
import { useReader, useStore, useMainProps } from 'contexts';

const WindowControls: FC<IWindowControlsProps> = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
	const { styleOptions } = useMainProps();
	const { isMinimized } = state;

	const handleHideReader = () => {
		dispatch(setIsVisible(false));
		reader?.reset();
	};

	const handleMinimizeReader = () => {
		dispatch(setIsMinimized(true));
	};

	const handleMaximizeReader = () => {
		dispatch(setIsMinimized(false));
	};
	return (
		<>
			<WindowButton
				style={{ position: 'absolute', top: '2px', right: '3px' }}
				styleoptions={styleOptions}
				onPointerDown={handleHideReader}
			>
				<MdOutlineClose title="Close" />
			</WindowButton>
			{/* Minimize button */}
			<WindowButton
				style={{ position: 'absolute', top: '2px', right: '24px' }}
				title={isMinimized ? 'Maximize' : 'Minimize'}
				styleoptions={styleOptions}
				onPointerDown={
					isMinimized ? handleMaximizeReader : handleMinimizeReader
				}
			>
				{isMinimized ? <FiMaximize /> : <FiMinimize />}
			</WindowButton>
		</>
	);
};

export default WindowControls;
