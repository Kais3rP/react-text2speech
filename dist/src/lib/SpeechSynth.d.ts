/// <reference types="node" />
import EventEmitter from 'events';
import { DOMUtils } from './DOMUtils';
import { IStyle, ISettings, Events, IOptions, IState, Params } from './types';
export declare class SpeechSynth extends EventEmitter {
    textContainer: HTMLElement;
    synth: SpeechSynthesis;
    utterance: SpeechSynthesisUtterance;
    timeoutRef: string | number | Timeout | undefined;
    DOMUtils: DOMUtils;
    events: Events;
    style: IStyle;
    settings: ISettings;
    options: IOptions;
    state: IState;
    constructor(textContainer: HTMLElement, { language, color1, color2, onStateChange, onSettingsChange, onOptionsChange, onStyleChange, }?: Params);
    init(): Promise<SpeechSynth>;
    private initUtterance;
    private highlightText;
    private resetHighlight;
    private highlightChunk;
    private handleChunkHighlighting;
    private timeCount;
    private clearTimeCount;
    private resetTimeCount;
    private handleBoundary;
    private filterVoices;
    private getAllVoices;
    private updateVoices;
    private retrieveAndSetVoices;
    private applyStyleToWord;
    private applyStyleToHighlightedWords;
    private changeChunkMode;
    private changeVoice;
    private changeRate;
    private changeLanguage;
    private getRemainingText;
    private getCurrentChunkText;
    private delayRestart;
    private restart;
    seekTo(idx: number): void;
    play(): Promise<null>;
    pause(): void;
    resume(): void;
    reset(): void;
    isReading(): boolean;
    isPaused(): boolean;
}
//# sourceMappingURL=SpeechSynth.d.ts.map