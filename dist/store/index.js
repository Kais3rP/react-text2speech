import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { produce } from 'immer';
export const useAudioReaderStore = create()(devtools(persist((set) => ({
    isReading: false,
    rate: '1',
    voice: 'Microsoft Aria Online (Natural) - English (United States)',
    voices: [],
    volume: '0.5',
    elapsedTime: 0,
    isPreserveHighlighting: true,
    isMinimized: true,
    isVisible: true,
    isSettingsVisible: false,
    numberOfWords: 0,
    currentWordIndex: 1,
    duration: 0,
    setDuration: (n) => set(produce((state) => {
        state.duration = n;
    })),
    setCurrentWordIndex: (n) => set(produce((state) => {
        state.currentWordIndex = n;
    })),
    setNumberOfWords: (n) => set(produce((state) => {
        state.numberOfWords = n;
    })),
    enablePreserveHighlighting: () => set(produce((state) => {
        state.isPreserveHighlighting = true;
    })),
    disablePreserveHighlighting: () => set(produce((state) => {
        state.isPreserveHighlighting = false;
    })),
    showSettings: () => set(produce((state) => {
        state.isSettingsVisible = true;
    })),
    hideSettings: () => set(produce((state) => {
        state.isSettingsVisible = false;
    })),
    showAudioReader: () => set(produce((state) => {
        state.isVisible = true;
    })),
    hideAudioReader: () => set(produce((state) => {
        state.isVisible = false;
    })),
    minimize: () => set(produce((state) => {
        state.isMinimized = true;
    })),
    maximize: () => set(produce((state) => {
        state.isMinimized = false;
    })),
    stopReading: () => set(produce((state) => {
        state.isReading = false;
    })),
    startReading: () => set(produce((state) => {
        state.isReading = true;
    })),
    setRate: (rate) => set(produce((state) => {
        state.rate = rate;
    })),
    setVoice: (voice) => set(produce((state) => {
        state.voice = voice;
    })),
    setVoices: (voices) => set(produce((state) => {
        state.voices = voices;
    })),
    setVolume: (volume) => set(produce((state) => {
        state.volume = volume;
    })),
    setElapsedTime: (time) => set(produce((state) => {
        state.elapsedTime = time;
    })),
}))));
//# sourceMappingURL=index.js.map