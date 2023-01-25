import React, { FC, useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from '../../hooks/index';
import { ICustomSelectProps } from './types';
import styles from './styles.module.css';

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	value,
	title,
	onChange,
	style,
	Icon,
	...props
}) => {
	const [showOptions, setShowOptions] = useState(false);
	const ref = useRef(null);

	const show = () => {
		setShowOptions(true);
	};

	const hide = useCallback(() => {
		setShowOptions(false);
	}, []);

	const onOptionClick = (val: string) => {
		onChange(val);
		hide();
	};

	useOnClickOutside(ref, hide);

	return (
		<div className={styles.container} {...props}>
			<Icon
				onClick={show}
				option={options.find((o) => o.value === value)}
			/>

			<div
				ref={ref}
				className={`${styles.optionsContainer} ${
					showOptions && styles.visible
				}`}
				onPointerDown={hide}
			>
				{options.map((opt) => (
					<Icon
						key={opt.value}
						onPointerDown={(e) => {
							e.stopPropagation();
							onOptionClick(opt.value);
						}}
						option={opt}
					/>
				))}
			</div>
		</div>
	);
};

export default CustomSelect;
