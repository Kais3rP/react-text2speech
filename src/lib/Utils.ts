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

	/* Regex Utils */

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
