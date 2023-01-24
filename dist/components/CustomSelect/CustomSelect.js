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
import Button from './Button';
import styles from './styles.module.css';
const CustomSelect = (_a) => {
    var _b;
    var { options, value, title, onChange, style } = _a, props = __rest(_a, ["options", "value", "title", "onChange", "style"]);
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
        React.createElement(Button, { type: "button", onClick: show }, (_b = options.find((o) => o.value === value)) === null || _b === void 0 ? void 0 : _b.name),
        React.createElement("div", { ref: ref, className: `${styles.optionsContainer} ${showOptions && styles.visible}` }, options.map((opt) => (React.createElement(Button, { key: opt.value, onClick: () => {
                onOptionClick(opt.value);
            } }, opt.name))))));
};
export default CustomSelect;
//# sourceMappingURL=CustomSelect.js.map