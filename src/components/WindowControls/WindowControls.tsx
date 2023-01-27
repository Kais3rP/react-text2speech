import React, { FC } from 'react';
import { IWindowControlsProps } from './types';
import { FiMaximize } from '@react-icons/all-files/fi/FiMaximize';
import { FiMinimize } from '@react-icons/all-files/fi/FiMinimize';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { IoMdArrowBack } from '@react-icons/all-files/io/IoMdArrowBack';
import { setIsMinimized, setIsVisible } from 'store/actions';
import styles from './styles.module.css';
import { useStore } from 'contexts';

const WindowControls: FC<IWindowControlsProps> = () => {
	const { state, dispatch } = useStore();
	const { isMinimized, isVisible } = state;

	const handleShowReader = () => {
		dispatch(setIsVisible(true));
	};

	const handleHideReader = () => {
		dispatch(setIsVisible(false));
	};

	const handleMinimizeReader = () => {
		dispatch(setIsMinimized(true));
	};

	const handleMaximizeReader = () => {
		dispatch(setIsMinimized(false));
	};
	return (
		<>
			{/* Hide button */}
			{isVisible ? (
				<div
					title={'Hide'}
					className={`${styles.button} ${styles.hideButton}`}
					onPointerDown={handleHideReader}
				>
					<MdClose />
				</div>
			) : (
				<div
					title={'Show'}
					className={styles.showButton}
					onPointerDown={handleShowReader}
				>
					<div className={styles.line} />
					<IoMdArrowBack className={styles.arrow} />
				</div>
			)}
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
