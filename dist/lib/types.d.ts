import { SpeechSynth } from 'lib';
export declare type Params = Partial<IEvents> & Partial<IStyle> & Partial<IGenericSettings>;
export interface IGenericSettings {
    language: string;
}
export interface IEvents {
    onPlay: (c: SpeechSynth, v?: any) => void;
    onEnd: (c: SpeechSynth, v?: any) => void;
    onStart: (c: SpeechSynth, v?: any) => void;
    onPause: (c: SpeechSynth, v?: any) => void;
    onResume: (c: SpeechSynth, v?: any) => void;
    onReset: (c: SpeechSynth, v?: any) => void;
    onBoundary: (c: SpeechSynth, v?: any) => void;
    onTimeTick: (c: SpeechSynth, v?: any) => void;
    onWordClick: (c: SpeechSynth, v?: any) => void;
    onSeek: (c: SpeechSynth, v?: any) => void;
    onChunksModeChange: (c: SpeechSynth, v?: any) => void;
    onSettingsChange: (c: SpeechSynth, v?: any) => void;
    onOptionsChange: (c: SpeechSynth, v?: any) => void;
}
export interface IOptions {
    isHighlightTextOn: boolean;
    isPreserveHighlighting: boolean;
    isChunksModeOn: boolean;
}
export interface ISettings {
    pitch: number;
    rate: number;
    language: string;
    voiceURI: string;
    volume: number;
}
export interface IEvent {
    type: string;
    handlers: EventHandler[];
}
export declare type EventHandler = (c: SpeechSynth, v?: any) => void;
export declare type Events = IEvent[];
export declare type Chunk = {
    text: string;
    length: number;
    start: number;
    end: number;
    idx: number;
};
export interface IState {
    isMobile: boolean;
    voice: SpeechSynthesisVoice;
    voices: SpeechSynthesisVoice[];
    isLoading: boolean;
    tagIndex: number;
    currentWord: string;
    currentWordIndex: number;
    currentWordProps: ICurrentWordProps;
    highlightedWords: HTMLElement[];
    lastWordPosition: number;
    numberOfWords: number;
    wholeText: string;
    wholeTextArray: string[];
    textRemaining: string;
    duration: number;
    elapsedTime: number;
    currentChunkIndex: number;
    chunksArray: Chunk[];
    isPaused: boolean;
    isReading: boolean;
}
export interface IStyle {
    color1?: string;
    color2?: string;
}
export interface ICurrentWordProps {
    charIndex: number;
    charLength: number;
}
//# sourceMappingURL=types.d.ts.map