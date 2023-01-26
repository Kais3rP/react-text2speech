import React, { useRef, useReducer } from 'react';
import { SpeechSynth } from 'lib';
import { rootReducer, globalState } from 'store';
import { setIsReading, setElapsedTime, setCurrentWordIndex, changeSettings, changeOptions, changeHighlightStyle, setDuration, } from 'store/actions';
import { MainPropsContext, ReaderContext, StoreContext } from './contexts';
import { useStore, useMainProps } from './hooks';
/* Provides the main props */
export const MainPropsProvider = ({ value, children, }) => {
    return (React.createElement(MainPropsContext.Provider, { value: value }, children));
};
/* Provides the reader instance */
export const ReaderProvider = ({ children }) => {
    const { state, dispatch } = useStore();
    const { textContainer, options, styleOptions } = useMainProps();
    const readerRef = useRef(new SpeechSynth(textContainer, Object.assign(Object.assign({}, options), { color1: (styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.highlightColor1) || '#DEE', color2: styleOptions.highlightColor2 || '#9DE', onStart: (reader) => {
            console.log('Start');
            dispatch(setIsReading(reader.state.isReading));
        }, onPause: (reader) => {
            console.log('Pause');
            dispatch(setIsReading(reader.state.isReading));
        }, onResume: (reader) => {
            console.log('Resume');
            dispatch(setIsReading(reader.state.isReading));
        }, onReset: (reader) => {
            console.log('Reset Event called', reader.state.elapsedTime);
            dispatch(setIsReading(reader.state.isReading));
            dispatch(setElapsedTime(reader.state.elapsedTime));
            dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
        }, onEnd: (reader) => {
            console.log('End');
            reader.reset();
        }, onBoundary: (reader, e) => {
            // console.log('Boundary event');
        }, onSeek: (reader) => {
            dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
        }, onTimeTick: (reader) => {
            dispatch(setElapsedTime(reader.state.elapsedTime));
        }, onWordClick: (reader, e) => {
            const target = e.target;
            const idx = +target.dataset.id;
            reader === null || reader === void 0 ? void 0 : reader.seekTo(idx);
        }, onStateChange: (reader) => {
            if (state.duration !== reader.state.duration)
                dispatch(setDuration(reader.state.duration));
        }, onSettingsChange: (reader) => {
            console.log('Settings change');
            dispatch(changeSettings(reader.settings));
        }, onOptionsChange: (reader) => {
            console.log('Options change', reader.options);
            dispatch(changeOptions(reader.options));
        }, onStyleChange: (reader) => {
            console.log('Style change');
            dispatch(changeHighlightStyle(reader.style));
        } })));
    return (React.createElement(ReaderContext.Provider, { value: { reader: readerRef.current } }, children));
};
/* Provides the store */
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, globalState);
    return (React.createElement(StoreContext.Provider, { value: { state, dispatch } }, children));
};
//# sourceMappingURL=providers.js.map