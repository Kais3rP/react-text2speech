/// <reference types="node" />
import EventEmitter from 'events';
export declare class SpeechSynth extends EventEmitter {
    textContainer: HTMLElement;
    synth: SpeechSynthesis;
    utterance: SpeechSynthesisUtterance;
    timeoutRef: string | number | Timeout | undefined;
    seekTimeoutRef: string | number | Timeout | undefined;
    editTimeoutRef: string | number | Timeout | undefined;
    style: IStyle;
    settings: ISettings;
    events: Events;
    options: IOptions;
    state: IState;
    constructor(textContainer: HTMLElement, { pitch, rate, language, voiceURI, volume, color1, color2, onEnd, onStart, onPause, onResume, onReset, onBoundary, onTimeTick, onWordClick, onSeek, isHighlightTextOn, isPreserveHighlighting, isSSROn, }: Params);
    init(): Promise<SpeechSynth>;
    private initUtterance;
    private highlightChunk;
    private retrieveChunks;
    private handleChunkHighlighting;
    private scrollTo;
    private timeCount;
    private pauseTimeCount;
    private resetTimeCount;
    private getRemainingText;
    private handleBoundary;
    private getVoices;
    private highlightText;
    private resetHighlight;
    private addCustomEventListeners;
    private attachEventListenersToWords;
    private retrieveNumberOfWords;
    private retrieveWholeText;
    private retrieveWholeTextArray;
    private applyBasicStyleToWords;
    private getTextDuration;
    private getAverageTextElapsedTime;
    editUtterance(obj: Partial<ISettings>): void;
    seekTo(index: number): void;
    play(): Promise<null>;
    pause(): void;
    resume(): void;
    reset(): void;
    isPlaying(): boolean;
    isPaused(): boolean;
    static addHTMLHighlightTags(node: Element | string, options?: IHighlightOptions): string;
}
//# sourceMappingURL=index.d.ts.map