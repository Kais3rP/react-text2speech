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
    static isMobile() {
        /* Dev mode */
        //	return true;
        // check the user agent string
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            return true;
        // check the platform string
        if (/iPad|iPhone|iPod/.test(navigator.platform))
            return true;
        // check the screen size and pixel density
        if (window.innerWidth < 768 || window.devicePixelRatio > 1)
            return true;
        return false;
    }
    /* Regex Utils */
    static isSlashTextContent(str) {
        if (!str)
            return false;
        return /<.+>\/<\/.+>/.test(str);
    }
    static isDigitTextContent(str) {
        if (!str)
            return false;
        return /<.+>\d+<\/.+>/.test(str);
    }
    static isWordTextContent(str) {
        if (!str)
            return false;
        return /<.+>[a-zA-Z]+<\/.+>/.test(str);
    }
    static isWord(str) {
        if (!str)
            return false;
        return /^[a-zA-Z]/.test(str);
    }
    static isWordWithNumbers(str) {
        if (!str)
            return false;
        return /^[a-zA-Z0-9]+$/.test(str);
    }
    static isNumber(str) {
        if (!str)
            return false;
        return (!isNaN(+str) && isFinite(+str)) || parseFloat(str);
    }
    static isURL(str) {
        if (!str)
            return false;
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(str);
    }
    static isSpace(str) {
        return str === ' ';
    }
    static isEmptyString(str) {
        return str === '';
    }
    static isWhitespaceChar(str) {
        return /^[\n\r\t]+$/.test(str);
    }
    static isAt(str) {
        return str === '@';
    }
    static isDot(str) {
        return str === '.';
    }
    static isZero(str) {
        return str === '0';
    }
    static isPunctuation(str) {
        if (!str)
            return false;
        return /^[.,;:!?]+$/.test(str);
    }
    static isPunctuationButDot(str) {
        if (!str)
            return false;
        return /^[,;:!?]+$/.test(str);
    }
    static isHashtag(str) {
        return str === '#';
    }
    static isSlash(str) {
        return str === '/';
    }
    static isParens(str) {
        if (!str)
            return false;
        return /^[()[\]{}]+$/.test(str);
    }
    static isTag(str) {
        if (!str)
            return false;
        return /<.+?>/.test(str);
    }
    static isCodeOpenTag(str) {
        if (!str)
            return false;
        return /<code(@@)?\s?([a-zA-Z-]+="[a-zA-Z-_@\s]+")?>/.test(str);
    }
    static isCodeCloseTag(str) {
        if (!str)
            return false;
        return /<\/code>/.test(str);
    }
    static isWordInsideAngularBrackets(str) {
        if (!str)
            return false;
        return /^<+.*>+\.?$/.test(str);
    }
    static isSpecialReadableCharacter(str) {
        if (!str)
            return false;
        return /^[@#\\/_*^°£$%&=+]+$/.test(str);
    }
    static isSpecialUnreadableCharacter(str) {
        if (!str)
            return false;
        return /^[()[\]{}'"<>`|-]+$/.test(str);
    }
    static isSpecialCharacter(str) {
        if (!str)
            return false;
        return /^([.,;:\-_`'"*+()[\]{}<>\s\n])$/.test(str);
    }
    static isHTMLEntity(str) {
        if (!str)
            return false;
        return /&[a-z]+?;+/.test(str);
    }
    static isValidDate(str) {
        // @ts-expect-error
        return new Date(str) > 0;
    }
    /* Type Checks */
    static isFunction(fn) {
        return fn && typeof fn === 'function';
    }
    /* Utilities */
    static formatMsToTime(n) {
        let seconds, minutes, hours;
        let secondsLeft = 0;
        let minutesLeft = 0;
        seconds = Math.floor(n / 1000);
        secondsLeft = Math.floor(seconds % 60);
        minutes = Math.floor(seconds / 60);
        minutesLeft = Math.floor(minutes % 60);
        hours = Math.floor(minutes / 60);
        /* format */
        seconds = secondsLeft.toString().padStart(2, '0');
        minutes = (minutes === minutesLeft ? minutes : minutesLeft)
            .toString()
            .padStart(2, '0');
        hours = hours.toString().padStart(2, 0);
        return hours > 0
            ? `${hours}:${minutes}:${seconds}`
            : `${minutes}:${seconds}`;
    }
    static debounce(fn, delay) {
        let timeout;
        return function (...args) {
            if (timeout)
                clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    }
    static hexToRGB(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
            : null;
    }
}
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