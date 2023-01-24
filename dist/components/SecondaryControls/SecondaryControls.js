import React from 'react';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { BiVolumeFull } from '@react-icons/all-files/bi/BiVolumeFull';
import { setDuration, setisOptionsVisible } from 'store/actions';
import { useReader, useStore, useMainProps } from 'contexts';
import styles from './styles.module.css';
import { FcSettings } from '@react-icons/all-files/fc/FcSettings';
import GenericSlider from 'components/GenericSlider/GenericSlider';
/* import { ImInfo } from 'react-icons/im';
 */
const SecondaryControls = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { styleOptions } = useMainProps();
    const { voices, isOptionsVisible, settings: { voiceURI, volume, rate }, options: { isChunksModeOn, isHighlightTextOn, isPreserveHighlighting }, } = state;
    const toggleSettings = () => {
        dispatch(setisOptionsVisible(!isOptionsVisible));
    };
    /* Settings Handlers */
    const handleRateChange = (value) => {
        reader === null || reader === void 0 ? void 0 : reader.changeSettings({ rate: +value });
        dispatch(setDuration((reader === null || reader === void 0 ? void 0 : reader.state.duration) || 0));
    };
    const handleVoiceChange = (value) => {
        reader === null || reader === void 0 ? void 0 : reader.changeSettings({ voiceURI: value });
    };
    const handleVolumeChange = (value) => {
        reader === null || reader === void 0 ? void 0 : reader.changeSettings({ volume: value });
    };
    /* Options Handlers */
    const handlePreserveHighlighting = (e) => {
        const target = e.target;
        reader === null || reader === void 0 ? void 0 : reader.changeOptions({ isPreserveHighlighting: target.checked });
    };
    const handleIsHighlightTextOn = (e) => {
        const target = e.target;
        reader === null || reader === void 0 ? void 0 : reader.changeOptions({ isHighlightTextOn: target.checked });
    };
    const handleIsChunksModeOn = (e) => {
        if (reader === null || reader === void 0 ? void 0 : reader.state.isMobile)
            return; // Disable this option for mobile devices
        const target = e.target;
        reader === null || reader === void 0 ? void 0 : reader.changeOptions({ isChunksModeOn: target.checked });
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.optionsWrapper1 },
            React.createElement(CustomSelect, { name: "rate", options: [
                    { value: '0.5', name: '0.5x' },
                    { value: '0.75', name: '0.75x' },
                    { value: '1', name: '1x' },
                    { value: '1.25', name: '1.25x' },
                    { value: '1.5', name: '1.5x' },
                    { value: '2', name: '2x' },
                ], onChange: handleRateChange, value: rate.toString(), defaultValue: "1", title: "Rate", styleOptions: styleOptions }),
            React.createElement(CustomSelect, { name: "voice", options: voices, onChange: handleVoiceChange, value: voiceURI || '', defaultValue: "1", title: "Voices", styleOptions: styleOptions }),
            React.createElement(FcSettings, { className: styles.icon, onPointerDown: toggleSettings })),
        React.createElement("div", { className: styles.optionsWrapper2 },
            React.createElement(GenericSlider, { icon: React.createElement(BiVolumeFull, null), onChange: handleVolumeChange, data: {
                    min: '0.1',
                    max: '1',
                    step: '0.1',
                    value: volume,
                    unit: '%',
                } })),
        React.createElement("div", { className: `${styles.overlayContainer} ${isOptionsVisible && styles.visible}`, onPointerDown: toggleSettings },
            React.createElement("label", { htmlFor: "preserve-option", onPointerDown: (e) => e.stopPropagation() },
                React.createElement("input", { id: "preserve-option", type: "checkbox", checked: isPreserveHighlighting, onChange: handlePreserveHighlighting }),
                React.createElement("h5", null, "Preserve Highlighting")),
            React.createElement("label", { htmlFor: "highlight-option", onPointerDown: (e) => e.stopPropagation() },
                React.createElement("input", { id: "highlight-option", type: "checkbox", checked: isHighlightTextOn, onChange: handleIsHighlightTextOn }),
                React.createElement("h5", null, "Highlight Text")),
            React.createElement("label", { htmlFor: "mode-option", onPointerDown: (e) => e.stopPropagation() },
                React.createElement("input", { id: "mode-option", type: "checkbox", checked: isChunksModeOn, onChange: handleIsChunksModeOn }),
                React.createElement("h5", null, "Chunks Mode")))));
};
export default SecondaryControls;
//# sourceMappingURL=SecondaryControls.js.map