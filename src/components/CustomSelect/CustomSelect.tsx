import React, { FC, useState, useRef, useCallback, useMemo } from 'react';
import { useOnClickOutside } from '../../hooks/index';
import { ICustomSelectProps, IOption } from './types';
import styles from './styles.module.css';

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	value,
	title,
	onChange,
	Icon,
	ExtraComponent,
	...props
}) => {
	const currentOption = useMemo(
		() => options.find((o) => o.value === value),
		[options, value]
	);

	const [showOptions, setShowOptions] = useState(false);
	const [localOption, setLocalOption] = useState(currentOption); // This state is used only locally to the selector

	const ref = useRef(null);

	const show = useCallback(() => {
		setShowOptions(true);
	}, []);

	const hide = useCallback(() => {
		setShowOptions(false);
	}, []);

	const onOptionClick = (val: string) => {
		onChange(val);
		hide();
	};

	const changeLocalOption = (value: IOption) => {
		setLocalOption(value);
	};

	useOnClickOutside(ref, hide);

	return (
		<div className={styles.container} {...props} ref={ref}>
			<Icon
				onPointerDown={(e) => {
					e.stopPropagation();
					show();
				}}
				option={currentOption}
			/>

			<div
				className={`${styles.optionsContainer} ${
					showOptions && styles.visible
				}`}
				// onPointerDown={hide}
			>
				<div className={styles.optionsWrapper}>
					{options.map((opt) => (
						<Icon
							key={opt.value}
							onPointerDown={(e) => {
								e.stopPropagation();
								onOptionClick(opt.value);
							}}
							onMouseEnter={() => changeLocalOption(opt)}
							option={opt}
						/>
					))}
				</div>
				{ExtraComponent && (
					<div className={styles.extraComponentWrapper}>
						<ExtraComponent option={localOption} />
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomSelect;
