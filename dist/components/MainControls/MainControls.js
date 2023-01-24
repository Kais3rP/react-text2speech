import React from 'react';
import { AiFillFastBackward } from '@react-icons/all-files/ai/AiFillFastBackward';
import { AiFillFastForward } from '@react-icons/all-files/ai/AiFillFastForward';
import { AiFillPlayCircle } from '@react-icons/all-files/ai/AiFillPlayCircle';
import { AiFillPauseCircle } from '@react-icons/all-files/ai/AiFillPauseCircle';
import { BiReset } from '@react-icons/all-files/bi/BiReset';
import { setIsLoading } from 'store/actions';
import { useReader, useStore } from 'contexts';
import styles from './styles.module.css';
const MainControls = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { isReading, isLoading, isMinimized } = state;
    const handleTextReadPlay = () => {
        if (reader === null || reader === void 0 ? void 0 : reader.isPaused())
            reader === null || reader === void 0 ? void 0 : reader.resume();
        else
            reader === null || reader === void 0 ? void 0 : reader.play('start').then(() => {
                dispatch(setIsLoading(false));
            });
    };
    const handleTextReadPause = () => {
        reader === null || reader === void 0 ? void 0 : reader.pause();
    };
    const handleReset = () => {
        reader === null || reader === void 0 ? void 0 : reader.reset();
    };
    const handleFastBackward = () => {
        if (!reader)
            return;
        if (reader === null || reader === void 0 ? void 0 : reader.options.isChunksModeOn) {
            if (reader.state.currentChunkIndex - 1 >= 0)
                reader.seekTo(reader.state.chunksArray[reader.state.currentChunkIndex - 1]
                    .start);
        }
        else if (reader.state.currentWordIndex - 1 >= 0)
            reader.seekTo(reader.state.currentWordIndex - 1);
    };
    const handleFastForward = () => {
        if (!reader)
            return;
        if (reader === null || reader === void 0 ? void 0 : reader.options.isChunksModeOn) {
            if (reader.state.currentChunkIndex + 1 <
                reader.state.chunksArray.length)
                /* Go to the next chunk */
                reader.seekTo(reader.state.chunksArray[reader.state.currentChunkIndex + 1]
                    .start);
        }
        else if (reader.state.currentWordIndex + 1 <=
            reader.state.wholeTextArray.length)
            reader.seekTo(reader.state.currentWordIndex + 1);
    };
    return (React.createElement("div", { className: `${styles.container} ${isMinimized ? styles.minimized : styles.notMinimized}` },
        React.createElement(AiFillFastBackward, { className: `${styles.button} ${isLoading ? styles.loading : styles.notLoading}`, title: "Fast backward", onDoubleClick: (e) => e.preventDefault(), onPointerDown: handleFastBackward }),
        isReading ? (React.createElement(AiFillPauseCircle, { style: {
                fontSize: '2em',
            }, className: `${styles.button} ${isLoading ? styles.loading : styles.notLoading}`, title: 'Pause', onPointerDown: handleTextReadPause })) : (React.createElement(AiFillPlayCircle, { style: {
                fontSize: '2em',
            }, className: `${styles.button} ${isLoading ? styles.loading : styles.notLoading}`, title: 'Play', onPointerDown: handleTextReadPlay })),
        React.createElement(AiFillFastForward, { title: "Fast forward", className: `${styles.button} ${isLoading ? styles.loading : styles.notLoading}`, onPointerDown: handleFastForward }),
        React.createElement(BiReset, { className: styles.reset, title: "reset", onClick: handleReset })));
};
export default MainControls;
//# sourceMappingURL=MainControls.js.map