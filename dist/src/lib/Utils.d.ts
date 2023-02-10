export declare class Utils {
    static isMobile(): boolean;
    static isFunction(fn: any): any;
    static formatMsToTime(n: number): string;
    static debounce(fn: (...arg: any[]) => any, delay: number): (...args: any[]) => void;
    static hexToRGB(hex: string, format?: 'object' | 'string'): string | {
        r: number;
        g: number;
        b: number;
    } | null;
    static isDarkColor(hex: string): boolean;
    static invertColor(hex: string): string;
    static formatVoices(voices: SpeechSynthesisVoice[]): {
        name: string;
        value: string;
    }[];
    static getBrushURL(name: string, color: string): {
        http: string;
        css: string;
    };
    static isBrushAvailable(brush: string, color: string): Promise<boolean>;
    static isSafari(): boolean;
}
//# sourceMappingURL=Utils.d.ts.map