import React from 'react';
import MainControls from 'components/MainControls/MainControls';
import WindowControls from 'components/WindowControls/WindowControls';
import SeekBar from 'components/SeekBar/SeekBar';
import SecondaryControls from 'components/SecondaryControls/SecondaryControls';
import { useBindTextReader, useInitializeReader, useSetCSSVAriables, } from './hooks';
import { useStore } from 'contexts';
import styles from './styles.module.css';
const TextReader = () => {
    const { state } = useStore();
    const { isMinimized, isVisible } = state;
    useSetCSSVAriables();
    useBindTextReader();
    useInitializeReader();
    return (React.createElement("div", { className: `${styles.container} ${isVisible && styles.visible} ${isMinimized && styles.minimized}` },
        React.createElement(WindowControls, null),
        React.createElement(SeekBar, null),
        React.createElement(MainControls, null),
        !isMinimized && React.createElement(SecondaryControls, null)));
};
export default TextReader;
//# sourceMappingURL=TextReader.js.map