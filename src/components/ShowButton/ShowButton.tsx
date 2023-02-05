import React, { FC } from 'react';
import { IoMdArrowBack } from '@react-icons/all-files/io/IoMdArrowBack';
import { changeUIState } from 'store/actions';
import styles from './styles.module.css';
import { useStore } from 'contexts';
import { IShowButtonProps } from './types';

const ShowButton: FC<IShowButtonProps> = () => {
	const { dispatch } = useStore();

	const handleShowReader = (e) => {
		e.stopPropagation();
		dispatch(changeUIState({ isVisible: true }));
	};

	return (
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
	);
};

export default ShowButton;
