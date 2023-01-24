export class Utils {
	HTMLTags: string[];

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
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		)
			return true;

		// check the platform string
		if (/iPad|iPhone|iPod/.test(navigator.platform)) return true;

		// check the screen size and pixel density
		if (window.innerWidth < 768 || window.devicePixelRatio > 1) return true;

		return false;
	}

	/* Regex Utils */

	static isSlashTextContent(str: string) {
		if (!str) return false;
		return /<.+>\/<\/.+>/.test(str);
	}

	static isDigitTextContent(str: string) {
		if (!str) return false;
		return /<.+>\d+<\/.+>/.test(str);
	}

	static isWordTextContent(str: string) {
		if (!str) return false;
		return /<.+>[a-zA-Z]+<\/.+>/.test(str);
	}

	static isWord(str: string) {
		if (!str) return false;
		return /^[a-zA-Z]/.test(str);
	}

	static isWordWithNumbers(str: string) {
		if (!str) return false;
		return /^[a-zA-Z0-9]+$/.test(str);
	}

	static isNumber(str: string) {
		if (!str) return false;
		return (!isNaN(+str) && isFinite(+str)) || parseFloat(str);
	}

	static isURL(str: string) {
		if (!str) return false;
		return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
			str
		);
	}

	static isSpace(str: string) {
		return str === ' ';
	}

	static isEmptyString(str: string) {
		return str === '';
	}

	static isWhitespaceChar(str: string) {
		return /^[\n\r\t]+$/.test(str);
	}

	static isAt(str: string): boolean {
		return str === '@';
	}

	static isDot(str: string): boolean {
		return str === '.';
	}

	static isZero(str: string): boolean {
		return str === '0';
	}

	static isPunctuation(str: string): boolean {
		if (!str) return false;
		return /^[.,;:!?]+$/.test(str);
	}

	static isPunctuationButDot(str: string): boolean {
		if (!str) return false;
		return /^[,;:!?]+$/.test(str);
	}

	static isHashtag(str: string): boolean {
		return str === '#';
	}

	static isSlash(str: string): boolean {
		return str === '/';
	}

	static isParens(str: string): boolean {
		if (!str) return false;
		return /^[()[\]{}]+$/.test(str);
	}

	static isTag(str: string): boolean {
		if (!str) return false;
		return /<.+?>/.test(str);
	}

	static isCodeOpenTag(str: string): boolean {
		if (!str) return false;
		return /<code(@@)?\s?([a-zA-Z-]+="[a-zA-Z-_@\s]+")?>/.test(str);
	}

	static isCodeCloseTag(str: string): boolean {
		if (!str) return false;
		return /<\/code>/.test(str);
	}

	static isWordInsideAngularBrackets(str: string) {
		if (!str) return false;
		return /^<+.*>+\.?$/.test(str);
	}

	static isSpecialReadableCharacter(str: string) {
		if (!str) return false;
		return /^[@#\\/_*^°£$%&=+]+$/.test(str);
	}

	static isSpecialUnreadableCharacter(str: string) {
		if (!str) return false;
		return /^[()[\]{}'"<>`|-]+$/.test(str);
	}

	static isSpecialCharacter(str: string): boolean {
		if (!str) return false;
		return /^([.,;:\-_`'"*+()[\]{}<>\s\n])$/.test(str);
	}

	static isHTMLEntity(str: string): boolean {
		if (!str) return false;
		return /&[a-z]+?;+/.test(str);
	}

	static isValidDate(str: string): boolean {
		// @ts-expect-error
		return new Date(str) > 0;
	}

	/* Array utils */

	static __join__ = function (
		fn: (el: any, i: number, arr: any[]) => string
	) {
		let str = ``;
		let i = 0;

		for (const el of this) {
			const separator = fn(el, i, this);
			str = str + el.toString() + separator;
			i++;
		}
		return str;
	};

	/* Type Checks */

	static isFunction(fn: any) {
		return fn && typeof fn === 'function';
	}

	static debounce(fn: (...arg: any[]) => any, delay: number) {
		let timeout: Timeout | undefined;
		return function (...args) {
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(() => fn(...args), delay);
		};
	}
}
