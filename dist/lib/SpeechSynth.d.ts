/// <reference types="node" />
import EventEmitter from 'events';
import { IStyle, ISettings, Events, IOptions, IState, Params } from './types';
export declare class SpeechSynth extends EventEmitter {
    textContainer: HTMLElement;
    synth: SpeechSynthesis;
    utterance: SpeechSynthesisUtterance;
    timeoutRef: string | number | Timeout | undefined;
    editTimeoutRef: string | number | Timeout | undefined;
    style: IStyle;
    events: Events;
    settings: ISettings;
    options: IOptions;
    state: IState;
    constructor(textContainer: HTMLElement, { language, color1, color2, onEnd, onStart, onPause, onResume, onReset, onBoundary, onTimeTick, onWordClick, onSeek, onSettingsChange, onOptionsChange, onStyleChange, }?: Params);
    init(): Promise<SpeechSynth>;
    private initUtterance;
    private addHTMLHighlightTags;
    private highlightChunk;
    private retrieveChunks;
    private handleChunkHighlighting;
    private scrollTo;
    private timeCount;
    private clearTimeCount;
    private resetTimeCount;
    private handleBoundary;
    private getVoices;
    private highlightText;
    private applyStyleToWord;
    private changeChunkMode;
    private resetHighlight;
    private addCustomEventListeners;
    private attachEventListenersToWords;
    private getRemainingText;
    private getCurrentChunkText;
    private retrieveNumberOfWords;
    private retrieveWholeText;
    private retrieveWholeTextArray;
    private applyBasicStyleToWords;
    private getTextDuration;
    private getAverageTextElapsedTime;
    private delayRestart;
    private restart;
    changeSettings(obj: Partial<ISettings>): void;
    changeOptions(obj: Partial<IOptions>): void;
    changeStyle({ type, value }: {
        type: any;
        value: any;
    }): void;
    seekTo(idx: number): void;
    play(type?: string): Promise<null>;
    pause(): void;
    resume(): void;
    reset(): void;
    isReading(): boolean;
    isPaused(): boolean;
}
//# sourceMappingURL=SpeechSynth.d.ts.map