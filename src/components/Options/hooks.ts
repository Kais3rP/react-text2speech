import { useReader, useStore } from 'contexts';
import { useMemo, ChangeEventHandler } from 'react';

export const useOptions = () => {
	const { reader } = useReader();
	const { state } = useStore();

	const {
		options: {
			isChunksModeOn,
			isHighlightTextOn,
			isPreserveHighlighting,
			isUnderlinedOn,
			isBrushOn,
		},
	} = state;

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
			if (reader?.deviceInfo.isMobile || !reader) return; // Disable this option for mobile devices
			const target = e.target as HTMLInputElement;
			reader.options.isChunksModeOn = target.checked;
		};

		const handleIsUnderlinedOn: ChangeEventHandler = (e) => {
			if (!reader) return;
			const target = e.target as HTMLInputElement;
			reader.options.isUnderlinedOn = target.checked;
		};

		const handleIsBrushOn: ChangeEventHandler = (e) => {
			if (!reader) return;
			const target = e.target as HTMLInputElement;
			reader.options.isBrushOn = target.checked;
		};

		return [
			{
				id: 'highlight-option',
				label: 'Highlight',
				value: isHighlightTextOn,
				handler: handleIsHighlightTextOn,
			},
			{
				id: 'preserve-option',
				label: 'Preserve',
				value: isPreserveHighlighting,
				handler: handlePreserveHighlighting,
			},
			{
				id: 'chunksmode-option',
				label: 'Chunks',
				value: isChunksModeOn,
				handler: handleIsChunksModeOn,
			},
			{
				id: 'underlined-option',
				label: 'Underline',
				value: isUnderlinedOn,
				handler: handleIsUnderlinedOn,
			},
			{
				id: 'brush-option',
				label: 'Brush',
				value: isBrushOn,
				handler: handleIsBrushOn,
			},
		];
	}, [
		isBrushOn,
		isChunksModeOn,
		isHighlightTextOn,
		isPreserveHighlighting,
		isUnderlinedOn,
		reader,
	]);

	return options;
};
