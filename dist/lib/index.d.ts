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
    tagIndex: number;
    constructor(textContainer: HTMLElement, { language, color1, color2, onEnd, onStart, onPause, onResume, onReset, onBoundary, onTimeTick, onWordClick, onSeek, isSSROn, }: Params);
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
    private getCurrentChunkText;
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
    private delayRestart;
    editUtterance(obj: Partial<ISettings>): void;
    changeChunkMode(b: boolean): void;
    seekTo(idx: number): void;
    play(type?: string): Promise<null>;
    pause(): void;
    resume(): void;
    reset(): void;
    isPlaying(): boolean;
    isPaused(): boolean;
    addHTMLHighlightTags(node: Element, options?: IHighlightOptions): void;
    static addHTMLHighlightTags_(node: Element | string, options?: IHighlightOptions): string;
}
//# sourceMappingURL=index.d.ts.map