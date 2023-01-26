import { useReader, useStore } from 'contexts';
import { useMemo } from 'react';
export const useOptions = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { options: { isChunksModeOn, isHighlightTextOn, isPreserveHighlighting, isUnderlinedOn, }, } = state;
    /* Options Handlers */
    const options = useMemo(() => {
        const handlePreserveHighlighting = (e) => {
            if (!reader)
                return;
            const target = e.target;
            reader.options.isPreserveHighlighting = target.checked;
        };
        const handleIsHighlightTextOn = (e) => {
            if (!reader)
                return;
            const target = e.target;
            reader.options.isHighlightTextOn = target.checked;
        };
        const handleIsChunksModeOn = (e) => {
            if ((reader === null || reader === void 0 ? void 0 : reader.state.isMobile) || !reader)
                return; // Disable this option for mobile devices
            const target = e.target;
            reader.options.isChunksModeOn = target.checked;
        };
        const handleIsUnderlinedOn = (e) => {
            if (!reader)
                return;
            const target = e.target;
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
    return options;
};
//# sourceMappingURL=hooks.js.map