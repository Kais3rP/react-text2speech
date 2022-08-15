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
import { useOnClickOutside } from './hooks/index';
export const Button = (_a) => {
    var { children, styleOptions } = _a, props = __rest(_a, ["children", "styleOptions"]);
    const button = {
        fontSize: '0.7rem',
        fontWeight: 'bold',
        color: styleOptions.primaryColor,
        cursor: 'pointer',
        transition: 'all 0.5s linear',
    };
    return (React.createElement("button", Object.assign({ style: button }, props), children));
};
const CustomSelect = (_a) => {
    var _b;
    var { options, value, title, onChange, styleOptions, style } = _a, props = __rest(_a, ["options", "value", "title", "onChange", "styleOptions", "style"]);
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
    const container = {
        marginRight: '10px',
    };
    const optionsStyle = {
        position: 'absolute',
        width: '100%',
        bottom: '0px',
        right: '0',
        background: styleOptions.bgColor,
        color: styleOptions.textColor,
        padding: '5px',
        zIndex: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in,',
    };
    const titleStyle = {};
    return (React.createElement("div", Object.assign({ style: Object.assign(Object.assign({}, container), props.style) }, props),
        React.createElement(Button, { type: "button", onClick: show, styleOptions: styleOptions }, (_b = options.find((o) => o.value === value)) === null || _b === void 0 ? void 0 : _b.name),
        React.createElement("div", { ref: ref, style: Object.assign(Object.assign({}, optionsStyle), { opacity: showOptions ? 1 : 0, pointerEvents: showOptions ? 'all' : 'none' }) },
            React.createElement("div", { style: titleStyle }, title),
            options.map((opt) => (React.createElement(Button, { key: opt.value, onClick: () => onOptionClick(opt.value), styleOptions: styleOptions }, opt.name))))));
};
export default CustomSelect;
//# sourceMappingURL=CustomSelect.js.map