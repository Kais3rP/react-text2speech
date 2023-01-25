import React, { ChangeEventHandler, FC, useMemo, useRef } from 'react';
import styles from './styles.module.css';
import { FcSettings } from '@react-icons/all-files/fc/FcSettings';
import { useReader, useStore } from 'contexts';
import { useOnClickOutside } from 'hooks';
import { setIsOptionsVisible } from 'store/actions';
import { IOptionsProps } from './types';

const Options: FC<IOptionsProps> = () => {
	const ref = useRef(null);
	const { reader } = useReader();
	const { state, dispatch } = useStore();

	const {
		isOptionsVisible,
		options: {
			isChunksModeOn,
			isHighlightTextOn,
			isPreserveHighlighting,
			isUnderlinedOn,
		},
	} = state;

	const showOptions = () => {
		dispatch(setIsOptionsVisible(true));
	};

	const hideOptions = () => {
		dispatch(setIsOptionsVisible(false));
	};
	/* Options Handlers */

	const options = useMemo(() => {
		const handlePreserveHighlighting: ChangeEventHandler = (e) => {
			if (!reader) return;
			const target = e.target as HTMLInputElement;
			reader.options.isPreserveHighlighting = target.checked;
		};

		const handleIsHighlightTextOn: ChangeEventHandler = (e) => {
			if (!reader) return;
			const target = e.target as HTMLInputElement;
			reader.options.isHighlightTextOn = target.checked;
		};

		const handleIsChunksModeOn: ChangeEventHandler = (e) => {
			if (reader?.state.isMobile || !reader) return; // Disable this option for mobile devices
			const target = e.target as HTMLInputElement;
			reader.options.isChunksModeOn = target.checked;
		};

		const handleIsUnderlinedOn: ChangeEventHandler = (e) => {
			if (!reader) return;
			const target = e.target as HTMLInputElement;
			console.log('Is underlined on', target.checked);
			reader.options.isUnderlinedOn = target.checked;
		};

		return [
			{
				id: 'highlight-option',
				label: 'Enable Highlighting',
				value: isHighlightTextOn,
				handler: handleIsHighlightTextOn,
			},
			{
				id: 'preserve-option',
				label: 'Preserve Highlighting',
				value: isPreserveHighlighting,
				handler: handlePreserveHighlighting,
			},
			{
				id: 'chunksmode-option',
				label: 'Enable Chunks Mode',
				value: isChunksModeOn,
				handler: handleIsChunksModeOn,
			},
			{
				id: 'underlined-option',
				label: 'Enable Underline',
				value: isUnderlinedOn,
				handler: handleIsUnderlinedOn,
			},
		];
	}, [
		isChunksModeOn,
		isHighlightTextOn,
		isPreserveHighlighting,
		isUnderlinedOn,
		reader,
	]);

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
