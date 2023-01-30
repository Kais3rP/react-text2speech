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

	const handleShowReader = (e) => {
		e.stopPropagation();
		dispatch(changeUIState({ isVisible: true }));
	};

	const handleHideReader = (e) => {
		e.stopPropagation();
		dispatch(changeUIState({ isVisible: false }));
	};

	const toggleMinimizeReader = (e) => {
		e.stopPropagation();
		dispatch(changeUIState({ isMinimized: !isMinimized }));
	};

	const toggleDarkMode = (e) => {
		e.stopPropagation();
		dispatch(changeUIState({ isDark: !isDark }));
	};

	return (
		<div className={styles.container}>
			{/* Show button overlay */}
			{!isVisible && (
				<div
					title={'Show'}
					className={styles.showButton}
					onPointerDown={handleShowReader}
					onTouchEnd={(e) => {
						e.preventDefault();
						e.stopPropagation();
					}}
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
				onTouchEnd={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				{isDark ? <BsSun /> : <BsMoon />}
			</div>
			{/* Hide button */}
			<div
				title={'Hide'}
				className={`${styles.button} ${styles.hideButton}`}
				onPointerDown={handleHideReader}
				onTouchEnd={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				<MdClose />
			</div>
			{/* Minimize button */}
			<div
				title={isMinimized ? 'Maximize' : 'Minimize'}
				className={`${styles.button} ${styles.minimizeButton}`}
				onPointerDown={toggleMinimizeReader}
				onTouchEnd={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				{isMinimized ? <FiMaximize /> : <FiMinimize />}
			</div>
		</div>
	);
};

export default WindowControls;
