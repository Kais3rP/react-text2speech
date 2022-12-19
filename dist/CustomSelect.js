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
import styled from 'styled-components';
import { useOnClickOutside } from './hooks/index';
const Container = styled.div `
	margin-right: 10px;
`;
const StyledButton = styled.button `
	position: relative;
	font-size: 0.7rem;
	font-weight: bold;
	color: ${(props) => props.styleOptions.primaryColor};
	cursor: pointer;
	transition: all 0.5s linear;
	border: none;
	background: none;
	&:hover {
		color: ${(props) => props.styleOptions.secondaryColor};
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0px;
		height: 2px;
		background-color: ${(props) => props.styleOptions.primaryColor};
		transition: all 0.2s ease-in;
	}
	&:hover::after {
		width: 100%;
	}
`;
const OptionsContainer = styled.div `
	opacity: ${(props) => (props.showOptions ? 1 : 0)};
	pointer-events: ${(props) => (props.showOptions ? 'all' : 'none')};
	position: absolute;
	width: 100%;
	height: 53px;
	bottom: 0px;
	right: 0;
	background-color: ${(props) => props.styleOptions.bgColor};
	color: ${(props) => props.styleOptions.primaryColor};
	z-index: 100;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
`;
export const Button = (_a) => {
    var { children, styleOptions } = _a, props = __rest(_a, ["children", "styleOptions"]);
    return (React.createElement(StyledButton, Object.assign({ styleOptions: styleOptions }, props), children));
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
    return (React.createElement(Container, Object.assign({}, props),
        React.createElement(StyledButton, { type: "button", onClick: show, styleOptions: styleOptions }, (_b = options.find((o) => o.value === value)) === null || _b === void 0 ? void 0 : _b.name),
        React.createElement(OptionsContainer, { ref: ref, styleOptions: styleOptions, showOptions: showOptions }, options.map((opt) => (React.createElement(Button, { key: opt.value, onClick: () => {
                onOptionClick(opt.value);
            }, styleOptions: styleOptions }, opt.name))))));
};
export default CustomSelect;
//# sourceMappingURL=CustomSelect.js.map