import React from 'react';
import { FiMaximize } from '@react-icons/all-files/fi/FiMaximize';
import { FiMinimize } from '@react-icons/all-files/fi/FiMinimize';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { setIsMinimized, setIsVisible } from 'store/actions';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
const WindowControls = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { isMinimized } = state;
    const handleHideReader = () => {
        dispatch(setIsVisible(false));
        reader === null || reader === void 0 ? void 0 : reader.reset();
    };
    const handleMinimizeReader = () => {
        dispatch(setIsMinimized(true));
    };
    const handleMaximizeReader = () => {
        dispatch(setIsMinimized(false));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { position: 'absolute', top: '2px', right: '3px' }, title: 'Close', className: styles.button, onPointerDown: handleHideReader },
            React.createElement(MdClose, { title: "Close" })),
        React.createElement("div", { style: { position: 'absolute', top: '2px', right: '24px' }, title: isMinimized ? 'Maximize' : 'Minimize', className: styles.button, onPointerDown: isMinimized ? handleMaximizeReader : handleMinimizeReader }, isMinimized ? React.createElement(FiMaximize, null) : React.createElement(FiMinimize, null))));
};
export default WindowControls;
//# sourceMappingURL=WindowControls.js.map