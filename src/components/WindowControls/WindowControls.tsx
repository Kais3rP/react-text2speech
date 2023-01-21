import { WindowButton } from './styles';
import React, { FC } from 'react';
import { useTextReaderStore } from 'store';
import { IWindowControlsProps } from './types';
import { MdOutlineClose } from 'react-icons/md';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

const WindowControls: FC<IWindowControlsProps> = ({ styleOptions }) => {
	const { isMinimized, stopReading, hideTextReader, minimize, maximize } =
		useTextReaderStore();

	const handleHideReader = () => {
		hideTextReader();
		stopReading();
	};

	const handleMinimizeReader = () => {
		minimize();
	};

	const handleMaximizeReader = () => {
		maximize();
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
