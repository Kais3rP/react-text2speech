import React, { useRef } from 'react';
import styles from './styles.module.css';
import { FcSettings } from '@react-icons/all-files/fc/FcSettings';
import { useStore } from 'contexts';
import { useOnClickOutside } from 'hooks';
import { setIsOptionsVisible } from 'store/actions';
import { useOptions } from './hooks';
const Options = () => {
    const ref = useRef(null);
    const { state, dispatch } = useStore();
    const { isOptionsVisible } = state;
    const showOptions = () => {
        dispatch(setIsOptionsVisible(true));
    };
    const hideOptions = () => {
        dispatch(setIsOptionsVisible(false));
    };
    const options = useOptions();
    useOnClickOutside(ref, hideOptions);
    return (React.createElement("div", { className: styles.container, ref: ref },
        React.createElement(FcSettings, { className: styles.icon, onPointerDown: showOptions }),
        React.createElement("div", { className: `${styles.overlayContainer} ${isOptionsVisible && styles.visible}`, onPointerDown: hideOptions }, options.map((o) => (React.createElement("label", { key: o.id, htmlFor: o.id, onPointerDown: (e) => e.stopPropagation() },
            React.createElement("input", { id: o.id, type: "checkbox", checked: o.value, onChange: o.handler }),
            React.createElement("h5", null, o.label)))))));
};
export default Options;
//# sourceMappingURL=Options.js.map