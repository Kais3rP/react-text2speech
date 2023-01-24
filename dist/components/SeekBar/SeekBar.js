import React from 'react';
import format from 'format-duration';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import { Utils } from 'lib';
const SeekBar = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { elapsedTime, numberOfWords, currentWordIndex, isMinimized, duration, } = state;
    const debouncedHandleManualSeek = Utils.debounce((reader === null || reader === void 0 ? void 0 : reader.seekTo.bind(reader)) || Function, 5);
    const handleManualSeek = (e) => {
        const value = +e.target.value;
        debouncedHandleManualSeek(value);
    };
    return (React.createElement("div", { className: `${styles.container} ${isMinimized && styles.minimized}` },
        React.createElement("h5", { className: styles.time }, format(elapsedTime)),
        React.createElement("input", { className: styles.seekbar, type: "range", min: "0", max: numberOfWords, step: "1", value: currentWordIndex, onChange: handleManualSeek }),
        React.createElement("h5", { style: { left: 'auto', right: '-15px' }, className: styles.time },
            format(duration),
            "*")));
};
export default SeekBar;
//# sourceMappingURL=SeekBar.js.map