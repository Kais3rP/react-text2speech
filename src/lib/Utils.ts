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
		if (!navigator || !window) return false;
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

	/* Type Checks */

	static isFunction(fn: any) {
		return fn && typeof fn === 'function';
	}

	/* Utilities */

	static formatMsToTime(n: number) {
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

	static debounce(fn: (...arg: any[]) => any, delay: number) {
		let timeout: Timeout | undefined;
		return function (...args) {
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(() => fn(...args), delay);
		};
	}

	static hexToRGB(hex: string, format?: 'object' | 'string') {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		switch (format) {
			case 'object':
				return result
					? {
							r: parseInt(result[1], 16),
							g: parseInt(result[2], 16),
							b: parseInt(result[3], 16),
					  }
					: null;
			case 'string':
				return result
					? `rgb(${parseInt(result[1], 16)},${parseInt(
							result[2],
							16
					  )},${parseInt(result[3], 16)})`
					: null;
			default:
				return result
					? `rgb(${parseInt(result[1], 16)},${parseInt(
							result[2],
							16
					  )},${parseInt(result[3], 16)})`
					: null;
		}
	}

	static isDarkColor(hex: string) {
		if (hex.indexOf('#') === 0) {
			hex = hex.slice(1);
		}
		// convert 3-digit hex to 6-digits.
		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		if (hex.length !== 6) {
			throw new Error('Invalid HEX color.');
		}
		// extract color components
		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);
		// calculate luminance
		const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
		// return true if color is dark, false otherwise
		return luminance < 128;
	}

	static invertColor(hex: string) {
		if (hex.indexOf('#') === 0) {
			hex = hex.slice(1);
		}
		// convert 3-digit hex to 6-digits.
		if (hex.length === 3) {
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		if (hex.length !== 6) {
			throw new Error('Invalid HEX color.');
		}
		// invert color components
		const r = (255 - parseInt(hex.slice(0, 2), 16))
			.toString(16)
			.padStart(2, '0');
		const g = (255 - parseInt(hex.slice(2, 4), 16))
			.toString(16)
			.padStart(2, '0');
		const b = (255 - parseInt(hex.slice(4, 6), 16))
			.toString(16)
			.padStart(2, '0');
		// return inverted color
		return '#' + r + g + b;
	}

	static formatVoices(voices: SpeechSynthesisVoice[]) {
		return voices.map((voice) => ({
			name: voice.name?.replace(
				/(Microsoft\s)|(Online\s)|(\(Natural\))|(\s-.*$)/gm, // Display only the plain voice name
				''
			),
			value: voice.voiceURI,
		}));
	}

	static getBrushURL(name: string, color: string) {
		const _color = color.replace('#', '');
		const URL = `s2.svgbox.net/pen-brushes.svg?ic=${name}&color=${_color}`;
		return { http: `https://${URL}`, css: `url(//${URL})` };
	}

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
}
