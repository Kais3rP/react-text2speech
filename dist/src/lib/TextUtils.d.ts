import { Chunk } from './types';
export declare class TextUtils {
    static isSlashTextContent(str: string): boolean;
    static isDigitTextContent(str: string): boolean;
    static isWordTextContent(str: string): boolean;
    static isWord(str: string): boolean;
    static isWordWithNumbers(str: string): boolean;
    static isNumber(str: string): number | boolean;
    static isURL(str: string): boolean;
    static isSpace(str: string): boolean;
    static isEmptyString(str: string): boolean;
    static isWhitespaceChar(str: string): boolean;
    static isAt(str: string): boolean;
    static isDot(str: string): boolean;
    static isZero(str: string): boolean;
    static isPunctuation(str: string): boolean;
    static isPunctuationButDot(str: string): boolean;
    static isHashtag(str: string): boolean;
    static isSlash(str: string): boolean;
    static isParens(str: string): boolean;
    static isTag(str: string): boolean;
    static isCodeOpenTag(str: string): boolean;
    static isCodeCloseTag(str: string): boolean;
    static isWordInsideAngularBrackets(str: string): boolean;
    static isSpecialReadableCharacter(str: string): boolean;
    static isSpecialUnreadableCharacter(str: string): boolean;
    static isSpecialCharacter(str: string): boolean;
    static isHTMLEntity(str: string): boolean;
    static isValidDate(str: string): boolean;
    static retrieveChunks(text: string): Chunk[];
    static getTextDuration(str: string, rate: number): number;
    static getAverageTextElapsedTime(textArray: string[], idx: number): (rate: number) => number;
    static __split__(separator: string | RegExp, pre: string | RegExp, post: string | RegExp): string[];
    static __join__: (fn: (el: string, i: number, arr: any[]) => string) => string;
}
//# sourceMappingURL=TextUtils.d.ts.map