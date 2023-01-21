import React, { FC, useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from '../../hooks/index';
import Button from './Button';
import { Container, OptionsContainer, StyledButton } from './styled';
import { ICustomSelectProps } from './types';

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	value,
	title,
	onChange,
	styleOptions,
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
		<Container {...props}>
			<StyledButton
				type="button"
				onClick={show}
				styleoptions={styleOptions}
			>
				{options.find((o) => o.value === value)?.name}
			</StyledButton>
			<OptionsContainer
				ref={ref}
				styleoptions={styleOptions}
				showOptions={showOptions}
			>
				{/* <Label styleoptions={styleOptions}>{title}</Label> */}
				{options.map((opt) => (
					<Button
						key={opt.value}
						onClick={() => {
							onOptionClick(opt.value);
						}}
						styleOptions={styleOptions}
					>
						{opt.name}
					</Button>
				))}
			</OptionsContainer>
		</Container>
	);
};

export default CustomSelect;
