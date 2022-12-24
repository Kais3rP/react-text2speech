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
import styled from 'styled-components';
/* Styled Components */
const SliderContainer = styled.div `
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	& input {
		width: 100%;
	}

	& label {
		position: absolute;
		top: 0;
		font-size: 0.7rem;
		right: 0%;
	}

	& label.value {
		top: -1rem;
		color: var(--color-extra1);
	}
`;
const StyledSlider = styled.input `
	width: 100%;
	appearance: none;
	height: 2px;
	background: ${(props) => props.styleoptions.primaryColor};
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	&:hover {
		opacity: 1;
	}
	&::-webkit-slider-thumb {
		appearance: none;
		width: 8px; /* Set a specific slider handle width */
		height: 17px; /* Slider handle height */
		background: ${(props) => props.styleoptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid ${(props) => props.styleoptions.primaryColor};
		border-radius: 2px;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
	&::-webkit-slider-thumb:hover {
		transform: scale(2, 1.1);
	}
	&::-moz-range-thumb {
		appearance: none;
		width: 8px; /* Set a specific slider handle width */
		height: 20px; /* Slider handle height */
		background: ${(props) => props.styleoptions.primaryColor};
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid ${(props) => props.styleoptions.primaryColor};
		border-radius: 2px;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
`;
const Icon = styled.div `
	font-size: 0.9rem;
	margin-right: 5px;
	& * {
		stroke: ${(props) => props.styleoptions.primaryColor};
		color: ${(props) => props.styleoptions.primaryColor};
	}
`;
const Slider = (_a) => {
    var { data, onChange, icon, styleOptions } = _a, props = __rest(_a, ["data", "onChange", "icon", "styleOptions"]);
    return (React.createElement(SliderContainer, Object.assign({}, props),
        icon && React.createElement(Icon, { styleoptions: styleOptions }, icon),
        React.createElement(StyledSlider, { min: data.min, max: data.max, step: data.step, type: "range", value: data.value, onChange: onChange, styleoptions: styleOptions })));
};
export default Slider;
//# sourceMappingURL=CustomSlider.js.map