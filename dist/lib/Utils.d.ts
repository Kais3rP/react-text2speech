export declare class Utils {
    HTMLTags: string[];
    constructor();
    static isMobile(): boolean;
    static isPunctuation(str: string): boolean;
    static isTag(str: string): boolean;
    static isCodeOpenTag(str: string): boolean;
    static isCodeCloseTag(str: string): boolean;
    static isSpecialCharacter(str: string): boolean;
    static isHTMLEntity(str: string): boolean;
    static __join__: (fn: (el: any, i: number, arr: any[]) => string) => string;
    static isFunction(fn: any): any;
}
//# sourceMappingURL=Utils.d.ts.map