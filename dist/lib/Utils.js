export class Utils {
    constructor() {
        this.HTMLTags = [
            'div',
            'span',
            'a',
            'i',
            'img',
            'html',
            'body',
            'section',
            'article',
            'main',
            'head',
            'header',
            'aside',
            'nav',
        ];
    }
    /* Regex Utils */
    static isPunctuation(str) {
        return /^\s*[.,;:]+\s*$/.test(str);
    }
    static isTag(str) {
        return /<.+?>/.test(str);
    }
    static isCodeOpenTag(str) {
        return /<code>/.test(str);
    }
    static isCodeCloseTag(str) {
        return /<\/code>/.test(str);
    }
    static isSpecialCharacter(str) {
        return /^([.,;:\-_`'"*+()[]\{\}<>\s\n])$/.test(str);
    }
    static isHTMLEntity(str) {
        return /&[a-z]+?;+/.test(str);
    }
    /* Type Checks */
    static isFunction(fn) {
        return fn && typeof fn === 'function';
    }
}
/* Array utils */
Utils.__join__ = function (fn) {
    let str = ``;
    let i = 0;
    for (const el of this) {
        const separator = fn(el, i, this);
        str = str + el.toString() + separator;
        i++;
    }
    return str;
};
//# sourceMappingURL=Utils.js.map