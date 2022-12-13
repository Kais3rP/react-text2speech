interface IAudioReaderState {
    isReading: boolean;
    rate: string;
    voice: string;
    voices: SpeechSynthesisVoice[];
    volume: string;
    elapsedTime: number;
    isPreserveHighlighting: boolean;
    isMinimized: boolean;
    isVisible: boolean;
    isSettingsVisible: boolean;
    numberOfWords: number;
    currentWordIndex: number;
    duration: number;
    isLoading: boolean;
    setDuration: (n: number) => void;
    setCurrentWordIndex: (n: number) => void;
    setNumberOfWords: (n: number) => void;
    enablePreserveHighlighting: () => void;
    disablePreserveHighlighting: () => void;
    showSettings: () => void;
    hideSettings: () => void;
    showAudioReader: () => void;
    hideAudioReader: () => void;
    minimize: () => void;
    maximize: () => void;
    stopReading: () => void;
    startReading: () => void;
    setRate: (rate: string) => void;
    setVoice: (voice: string) => void;
    setVoices: (voices: SpeechSynthesisVoice[]) => void;
    setVolume: (volume: string) => void;
    setElapsedTime: (time: number) => void;
    setIsLoading: (b: boolean) => void;
}
export declare const useAudioReaderStore: import("zustand").UseBoundStore<Omit<Omit<import("zustand").StoreApi<IAudioReaderState>, "setState"> & {
    setState(partial: IAudioReaderState | Partial<IAudioReaderState> | ((state: IAudioReaderState) => IAudioReaderState | Partial<IAudioReaderState>), replace?: boolean | undefined, actionType?: string | {
        type: unknown;
    } | undefined): void;
}, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<IAudioReaderState, {
            [k: string]: any;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: IAudioReaderState) => void) => () => void;
        onFinishHydration: (fn: (state: IAudioReaderState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<IAudioReaderState, {
            [k: string]: any;
        }>>;
    };
}>;
export {};
//# sourceMappingURL=index.d.ts.map