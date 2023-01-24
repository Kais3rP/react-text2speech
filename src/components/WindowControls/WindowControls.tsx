import React, { FC } from 'react';
import { IWindowControlsProps } from './types';
import { FiMaximize } from '@react-icons/all-files/fi/FiMaximize';
import { FiMinimize } from '@react-icons/all-files/fi/FiMinimize';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { setIsMinimized, setIsVisible } from 'store/actions';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';

const WindowControls: FC<IWindowControlsProps> = () => {
	const { reader } = useReader();
	const { state, dispatch } = useStore();
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
			<div
				style={{ position: 'absolute', top: '2px', right: '3px' }}
				title={'Close'}
				className={styles.button}
				onPointerDown={handleHideReader}
			>
				<MdClose title="Close" />
			</div>
			{/* Minimize button */}
			<div
				style={{ position: 'absolute', top: '2px', right: '24px' }}
				title={isMinimized ? 'Maximize' : 'Minimize'}
				className={styles.button}
				onPointerDown={
					isMinimized ? handleMaximizeReader : handleMinimizeReader
				}
			>
				{isMinimized ? <FiMaximize /> : <FiMinimize />}
			</div>
		</>
	);
};

export default WindowControls;
