import React, { FC } from 'react';
import { IWindowControlsProps } from './types';
import { FiMaximize } from '@react-icons/all-files/fi/FiMaximize';
import { FiMinimize } from '@react-icons/all-files/fi/FiMinimize';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { IoMdArrowBack } from '@react-icons/all-files/io/IoMdArrowBack';
import { changeUIState } from 'store/actions';
import styles from './styles.module.css';
import { useStore } from 'contexts';

const WindowControls: FC<IWindowControlsProps> = () => {
	const { state, dispatch } = useStore();
	const { isMinimized, isVisible } = state.UIState;

	const handleShowReader = () => {
		dispatch(changeUIState({ isVisible: true }));
	};

	const handleHideReader = () => {
		dispatch(changeUIState({ isVisible: false }));
	};

	const handleMinimizeReader = () => {
		dispatch(changeUIState({ isMinimized: true }));
	};

	const handleMaximizeReader = () => {
		dispatch(changeUIState({ isMinimized: false }));
	};
	return (
		<>
			{/* Show button overlay */}
			{!isVisible && (
				<div
					title={'Show'}
					className={styles.showButton}
					onPointerDown={handleShowReader}
				>
					<div className={styles.line} />
					<IoMdArrowBack className={styles.arrow} />
				</div>
			)}
			{/* Hide button */}
			<div
				title={'Hide'}
				className={`${styles.button} ${styles.hideButton}`}
				onPointerDown={handleHideReader}
			>
				<MdClose />
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
