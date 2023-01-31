import { SpeechSynth } from 'lib';
export declare type Params = Partial<IEvents> & Partial<IStyle> & Partial<IGenericSettings>;
export interface IGenericSettings {
    language: string;
}
export interface IEvents {
    onStateChange: (c: SpeechSynth, v?: any) => void;
    onSettingsChange: (c: SpeechSynth, v?: any) => void;
    onOptionsChange: (c: SpeechSynth, v?: any) => void;
    onStyleChange: (c: SpeechSynth, v?: any) => void;
}
export interface IOptions {
    isHighlightTextOn: boolean;
    isPreserveHighlighting: boolean;
    isChunksModeOn: boolean;
    isUnderlinedOn: boolean;
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
    allVoices: SpeechSynthesisVoice[];
    voice: SpeechSynthesisVoice;
    voices: SpeechSynthesisVoice[];
    isLoading: boolean;
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
    isBrushAvailable: boolean;
    isPaused: boolean;
    isReading: boolean;
}
export interface IStyle {
    color1: string;
    color2: string;
    brush: string;
}
export interface ICurrentWordProps {
    charIndex: number;
    charLength: number;
}
//# sourceMappingURL=types.d.ts.map