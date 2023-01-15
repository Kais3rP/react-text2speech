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
		return /<.+>\/<\/.+>/.test(str);
	}

	static isDigitTextContent(str: string) {
		return /<.+>\d+<\/.+>/.test(str);
	}

	static isNumber(n: number) {
		return !isNaN(n) && isFinite(n);
	}

	static isURL(str: string) {
		return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
			str
		);
	}

	static isPunctuation(str: string): boolean {
		return /^\s*[.,;:]+\s*$/.test(str);
	}

	static isTag(str: string): boolean {
		return /<.+?>/.test(str);
	}

	static isCodeOpenTag(str: string): boolean {
		return /<code>/.test(str);
	}

	static isCodeCloseTag(str: string): boolean {
		return /<\/code>/.test(str);
	}

	static isSpecialCharacter(str: string): boolean {
		return /^([.,;:\-_`'"*+()[\]{}<>\s\n])$/.test(str);
	}

	static isHTMLEntity(str: string): boolean {
		return /&[a-z]+?;+/.test(str);
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

	static isFunction(fn) {
		return fn && typeof fn === 'function';
	}
}
