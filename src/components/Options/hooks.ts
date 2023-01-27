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
			if (reader?.state.isMobile || !reader) return; // Disable this option for mobile devices
			const target = e.target as HTMLInputElement;
			reader.options.isChunksModeOn = target.checked;
		};

		const handleIsUnderlinedOn: ChangeEventHandler = (e) => {
			if (!reader) return;
			const target = e.target as HTMLInputElement;
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

	return options;
};
