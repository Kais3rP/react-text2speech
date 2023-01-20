export declare class Utils {
    HTMLTags: string[];
    constructor();
    static isMobile(): boolean;
    static isSlashTextContent(str: string): boolean;
    static isDigitTextContent(str: string): boolean;
    static isWordTextContent(str: string): boolean;
    static isWord(str: string): boolean;
    static isWordWithNumbers(str: string): boolean;
    static isNumber(str: string): boolean;
    static isURL(str: string): boolean;
    static isSpace(str: string): boolean;
    static isEmptyString(str: string): boolean;
    static isWhitespaceChar(str: string): boolean;
    static isAt(str: string): boolean;
    static isDot(str: string): boolean;
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
    static __join__: (fn: (el: any, i: number, arr: any[]) => string) => string;
    static isFunction(fn: any): any;
}
//# sourceMappingURL=Utils.d.ts.map