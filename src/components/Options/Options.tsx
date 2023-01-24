import React, { ChangeEventHandler, FC, useRef } from 'react';
import styles from './styles.module.css';
import { FcSettings } from '@react-icons/all-files/fc/FcSettings';
import { useReader, useStore } from 'contexts';
import { useOnClickOutside } from 'hooks';
import { setIsOptionsVisible } from 'store/actions';

const Options: FC = () => {
	const ref = useRef(null);
	const { reader } = useReader();
	const { state, dispatch } = useStore();

	const {
		isOptionsVisible,
		options: { isChunksModeOn, isHighlightTextOn, isPreserveHighlighting },
	} = state;

	const showOptions = () => {
		dispatch(setIsOptionsVisible(true));
	};

	const hideOptions = () => {
		dispatch(setIsOptionsVisible(false));
	};
	/* Options Handlers */

	const handlePreserveHighlighting: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		reader?.changeOptions({ isPreserveHighlighting: target.checked });
	};

	const handleIsHighlightTextOn: ChangeEventHandler = (e) => {
		const target = e.target as HTMLInputElement;
		reader?.changeOptions({ isHighlightTextOn: target.checked });
	};

	const handleIsChunksModeOn: ChangeEventHandler = (e) => {
		if (reader?.state.isMobile) return; // Disable this option for mobile devices
		const target = e.target as HTMLInputElement;
		reader?.changeOptions({ isChunksModeOn: target.checked });
	};

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
				<label
					htmlFor="preserve-option"
					onPointerDown={(e) => e.stopPropagation()}
				>
					<input
						id="preserve-option"
						type="checkbox"
						checked={isPreserveHighlighting}
						onChange={handlePreserveHighlighting}
					/>
					<h5>Preserve Highlighting</h5>
				</label>
				<label
					htmlFor="highlight-option"
					onPointerDown={(e) => e.stopPropagation()}
				>
					<input
						id="highlight-option"
						type="checkbox"
						checked={isHighlightTextOn}
						onChange={handleIsHighlightTextOn}
					/>
					<h5>Highlight Text</h5>
				</label>
				<label
					htmlFor="mode-option"
					onPointerDown={(e) => e.stopPropagation()}
				>
					<input
						id="mode-option"
						type="checkbox"
						checked={isChunksModeOn}
						onChange={handleIsChunksModeOn}
					/>
					<h5>Chunks Mode</h5>
				</label>
			</div>
		</div>
	);
};

export default Options;
