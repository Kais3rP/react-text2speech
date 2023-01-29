import React, { FC } from 'react';
import { IWindowControlsProps } from './types';
import { FiMaximize } from '@react-icons/all-files/fi/FiMaximize';
import { FiMinimize } from '@react-icons/all-files/fi/FiMinimize';
/* import { MdDarkMode } from '@react-icons/all-files/md/MdDarkMode';
import { MdLightMode } from '@react-icons/all-files/md/MdLightMode'; */

import { MdClose } from '@react-icons/all-files/md/MdClose';
import { IoMdArrowBack } from '@react-icons/all-files/io/IoMdArrowBack';
import { changeUIState } from 'store/actions';
import styles from './styles.module.css';
import { useStore } from 'contexts';
import { BsSun } from '@react-icons/all-files/bs/BsSun';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';

const WindowControls: FC<IWindowControlsProps> = () => {
	const {
		state: {
			UIState: { isMinimized, isVisible, isDark },
		},
		dispatch,
	} = useStore();

	const handleShowReader = () => {
		dispatch(changeUIState({ isVisible: true }));
	};

	const handleHideReader = () => {
		dispatch(changeUIState({ isVisible: false }));
	};

	const toggleMinimizeReader = () => {
		dispatch(changeUIState({ isMinimized: !isMinimized }));
	};

	const toggleDarkMode = () => {
		dispatch(changeUIState({ isDark: !isDark }));
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
			{/* Dark mode button */}
			<div
				title={`${isDark ? 'Light' : 'Dark'} Mode`}
				className={`${styles.button} ${styles.darkModeButton}`}
				onPointerDown={toggleDarkMode}
			>
				{isDark ? <BsSun /> : <BsMoon />}
			</div>
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
				className={`${styles.button} ${styles.minimizeButton}`}
				onPointerDown={toggleMinimizeReader}
			>
				{isMinimized ? <FiMaximize /> : <FiMinimize />}
			</div>
		</>
	);
};

export default WindowControls;
