import React, { FC, useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from '../../hooks/index';
import Button from './Button';
import { ICustomSelectProps } from './types';
import styles from './styles.module.css';

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	value,
	title,
	onChange,
	style,
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
			<Button type="button" onClick={show}>
				{options.find((o) => o.value === value)?.name}
			</Button>
			<div
				ref={ref}
				className={`${styles.optionsContainer} ${
					showOptions && styles.visible
				}`}
			>
				{options.map((opt) => (
					<Button
						key={opt.value}
						onClick={() => {
							onOptionClick(opt.value);
						}}
					>
						{opt.name}
					</Button>
				))}
			</div>
		</div>
	);
};

export default CustomSelect;
