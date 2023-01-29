import React, { FC, useRef, useState } from 'react';
import styles from './styles.module.css';
import { FcSettings } from '@react-icons/all-files/fc/FcSettings';
import { useOnClickOutside } from 'hooks';
import { IOptionsProps } from './types';
import { useOptions } from './hooks';

const Options: FC<IOptionsProps> = () => {
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);
	const ref = useRef(null);

	const showOptions = () => {
		setIsOptionsVisible(true);
	};

	const hideOptions = () => {
		setIsOptionsVisible(false);
	};

	const options = useOptions();

	useOnClickOutside(ref, hideOptions);

	return (
		<div className={styles.container} ref={ref}>
			<FcSettings className={styles.icon} onPointerDown={showOptions} />
			<div
				className={`${styles.overlayContainer} ${
					isOptionsVisible && styles.visible
				}`}
				onPointerDown={hideOptions}
			>
				{options.map((o) => (
					<label
						key={o.id}
						htmlFor={o.id}
						onPointerDown={(e) => e.stopPropagation()}
					>
						<input
							id={o.id}
							type="checkbox"
							checked={o.value}
							onChange={o.handler}
						/>
						<h5>{o.label}</h5>
					</label>
				))}
			</div>
		</div>
	);
};

export default Options;
