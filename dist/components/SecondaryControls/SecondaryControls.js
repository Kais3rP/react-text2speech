import React, { useMemo } from 'react';
import CustomSelect from 'components/CustomSelect/CustomSelect';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
import Options from 'components/Options/Options';
import ColorIcon from 'components/ColorIcon/ColorIcon';
import UnderlinedTextIcon from 'components/UnderlinedTextIcon/UnderlinedTextIcon';
const rates = [
    { value: '0.5', name: '0.5x' },
    { value: '0.75', name: '0.75x' },
    { value: '1', name: '1x' },
    { value: '1.25', name: '1.25x' },
    { value: '1.5', name: '1.5x' },
    { value: '2', name: '2x' },
];
const palette = [
    { name: 'Chocolate', value: '#C85A17' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Light Slate Blue', value: '#736AFF' },
    { name: 'Ruby Red', value: '#F62217' },
    { name: 'Bright Neon Pink', value: '#F433FF' },
    { name: 'Desert Sand', value: '#EDC9AF' },
    { name: 'Dark Goldenrod', value: '#AF7817' },
    { name: 'Cotton Candy', value: '#FCDFFF' },
    { name: 'Chartreuse', value: '#8AFB17' },
];
const SecondaryControls = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { voices, settings: { voiceURI, rate }, highlightStyle, } = state;
    /* Settings Handlers */
    const handleRateChange = (value) => {
        if (!reader)
            return;
        reader.settings.rate = +value;
    };
    const handleVoiceChange = (value) => {
        if (!reader)
            return;
        reader.settings.voiceURI = value;
    };
    const handleHighlightColorChange = (value) => {
        if (!reader)
            return;
        reader.style.color1 = value;
    };
    const handleHighlightFontColorChange = (value) => {
        if (!reader)
            return;
        reader.style.color2 = value;
    };
    const colors = useMemo(() => {
        const updatedPalette = [...palette];
        for (const color of Object.values(highlightStyle))
            if (!palette.find((c) => c.value === color))
                updatedPalette.push({
                    name: color,
                    value: color,
                });
        return updatedPalette;
    }, [highlightStyle]);
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.optionsWrapper1 },
            React.createElement(CustomSelect, { name: "rate", options: rates, onChange: handleRateChange, value: rate.toString(), defaultValue: "1", title: "Rate", Icon: UnderlinedTextIcon }),
            React.createElement(CustomSelect, { name: "voice", options: voices, onChange: handleVoiceChange, value: voiceURI || '', defaultValue: "1", title: "Voices", Icon: UnderlinedTextIcon }),
            React.createElement(CustomSelect, { name: "palette", options: colors, onChange: handleHighlightColorChange, value: highlightStyle.color1, defaultValue: "lavander", title: "Palette", Icon: ColorIcon }),
            React.createElement(CustomSelect, { name: "palette", options: colors, onChange: handleHighlightFontColorChange, value: highlightStyle.color2, defaultValue: "lavander", title: "Palette", Icon: ColorIcon })),
        React.createElement("div", { className: styles.optionsWrapper2 },
            React.createElement(Options, null))));
};
export default SecondaryControls;
// "The Sea's Symphony"
/*
Deep in the ocean blue,
Where colorful fishes swim,
They sing a melody,
A symphony within.

The whales and dolphins join in,
Their songs so grand and true,
The sea is alive, gives chillings,
A symphony for me and you.

The coral reefs, the seaweed beds,
All play their part,
That's a real work of art.

The ocean is a treasure,
We must protect it still,
For the sea's symphony,
Is a melody worth the thrill.

*/
//# sourceMappingURL=SecondaryControls.js.map