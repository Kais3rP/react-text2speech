import React, { FC } from 'react';
import { IWindowControlsProps } from './types';
import { FiMaximize } from '@react-icons/all-files/fi/FiMaximize';
import { FiMinimize } from '@react-icons/all-files/fi/FiMinimize';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { changeUIState } from 'store/actions';
import styles from './styles.module.css';
import { useStore } from 'contexts';
import { BsSun } from '@react-icons/all-files/bs/BsSun';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';

const WindowControls: FC<IWindowControlsProps> = () => {
	const {
		state: {
			UIState: { isMinimized, isDark },
		},
		dispatch,
	} = useStore();

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
