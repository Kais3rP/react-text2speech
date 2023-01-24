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
import React from 'react';
import styles from './styles.module.css';
import { Utils } from 'lib';
const GenericSlider = (_a) => {
    var { data, onChange, icon } = _a, props = __rest(_a, ["data", "onChange", "icon"]);
    const debouncedOnChange = Utils.debounce(onChange, 20);
    const handleChange = (e) => {
        const value = +e.target.value;
        debouncedOnChange(value);
    };
    return (React.createElement("div", Object.assign({ className: styles.container }, props),
        icon && React.createElement("div", { className: styles.icon }, icon),
        React.createElement("input", { className: styles.slider, min: data.min, max: data.max, step: data.step, type: "range", value: data.value, onChange: handleChange })));
};
export default GenericSlider;
//# sourceMappingURL=GenericSlider.js.map