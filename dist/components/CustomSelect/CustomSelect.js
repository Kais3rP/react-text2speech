var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useRef, useCallback } from 'react';
import { useOnClickOutside } from '../../hooks/index';
import styles from './styles.module.css';
const CustomSelect = (_a) => {
    var { options, value, title, onChange, style, Icon } = _a, props = __rest(_a, ["options", "value", "title", "onChange", "style", "Icon"]);
    const [showOptions, setShowOptions] = useState(false);
    const ref = useRef(null);
    const show = () => {
        setShowOptions(true);
    };
    const hide = useCallback(() => {
        setShowOptions(false);
    }, []);
    const onOptionClick = (val) => {
        onChange(val);
        hide();
    };
    useOnClickOutside(ref, hide);
    return (React.createElement("div", Object.assign({ className: styles.container }, props),
        React.createElement(Icon, { onClick: show, option: options.find((o) => o.value === value) }),
        React.createElement("div", { ref: ref, className: `${styles.optionsContainer} ${showOptions && styles.visible}`, onPointerDown: hide }, options.map((opt) => (React.createElement(Icon, { key: opt.value, onPointerDown: (e) => {
                e.stopPropagation();
                onOptionClick(opt.value);
            }, option: opt }))))));
};
export default CustomSelect;
//# sourceMappingURL=CustomSelect.js.map