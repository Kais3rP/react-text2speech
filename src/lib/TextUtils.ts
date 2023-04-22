import { Chunk } from './types';

export class TextUtils {
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

	static retrieveChunks(text: string): Chunk[] {
		let currentPunctuationSymbol = '.';
		const chunks: Chunk[] = [];
		let previousEnd = 0;

		/* 1
		Take into account that all the special readable characters will be counted as plain words hence we need to:
		- use the "wholeTextArray" which holds all the text elements that were wrapped in a span tag with a data-id attribute,
		  this ensures that it will contain all readable content, since only readable words/characters are given such a wrap tag in 
		  "addHTMLHighlightTags" method.
		  This further ensures to have a unique source of truth to keep in sync reading content and visual highlighting.
		- join with spaces every single character wrapped with a data-id attribute tag to be able to further split on given breakpoints
		- split in segments relative to periods that have words ending with a punctuation mark, to do so we use this regexp "/(?<=[a-zA-Z0-9])[.?!;]/"
		  to make sure to select any punctuation mark that is preceeded by a word
		  ( to avoid to consider punctuation in the middle of words as chunk edges, we use the wholeTextArray array
			which already owns all characters that will be read, included dots in the middle of words e.g. text.text -> "text dot text" ).
		- for each of the chunk extracted we build an object containg all the info on the chunk, start,end,length, index and text.
		  The text is the content that will be passed to the speech synth 
		- The chunk text has to be further manipulated since now as we manipulated the chunk the dots in the middle of the word won't be read as they are detached from the previous and next words.
		  The strategy here is the same used in the "retrieveWholeText" method, which is: using the custom __join__ method
		  tho use a space " " to join all the plain words and a no space "" to join the words that have a punctuation element next to them and dots element themselves */
		/* 		
		Alternative regexps:
			1- /(?<![\s])[.?!;]+(?=[\s\n])/ This is safer since it just checks if there are spaces before and after the dot 
			2- /(?<=[a-zA-Z0-9])[.?!;]/  This does not take into account dots placed after a special character like a parens e.g. (word). <-- That dot won't be matched
			*/

		/* 
		Since Safari does not handle lookbehind I needed to implement a custom split() method. Using this until Safari won't add support for lookbehind.
		The __split__ method takes 3 params, the first one is the separator, the second and the third ones are respectively the char to lookbehind and the one to lookahead, they are tested
		against any single char of the string passed.
		*/

		// @ts-ignore
		const textArray = text.__split__(/[.!?;]/, /[^\s]/, /[\s\n]+/);

		/* Breaking on punctuation followed by a space is problematic since some words might use the dot even if not being a period break point ( e.g. , Mr., etc... )
   Consider using new line as chunk delimiter */

		textArray.forEach((c, i) => {
			if (TextUtils.isPunctuation(c)) currentPunctuationSymbol = c;
			else {
				const length = c
					.trim()
					.split(/[\s]/)
					.filter((el) => el).length;
				/*  */

				const text = c.split(/\s+/).__join__((el, i, arr) => {
					if (
						TextUtils.isPunctuation(arr[i + 1] as string) ||
						TextUtils.isDot(el)
					) {
						return '';
					} else return ' ';
				});

				const result: Chunk = {
					text: text + currentPunctuationSymbol,
					length: length,
					start: previousEnd,
					end: previousEnd + length - 1,
					idx: i,
				};

				previousEnd = previousEnd + length;
				chunks.push(result);
			}
		});
		return chunks;
	}

	static getTextDuration(str: string, rate: number) {
		return (str.length * 100 * 1) / rate;
	}

	static getAverageTextElapsedTime(textArray: string[], idx: number) {
		const _text = textArray.slice(0, idx).join(' ');
		return (rate: number) => TextUtils.getTextDuration(_text, rate);
	}

	/* Prototype extension of primitives */

	static __split__(
		separator: string | RegExp,
		pre: string | RegExp,
		post: string | RegExp
	) {
		if (typeof separator !== 'string' && !(separator instanceof RegExp))
			throw new Error(
				'The separator must be a string or a Regular Expression'
			);
		const words: string[] = [];
		let currentWord: string = '';
		const _separator =
			separator instanceof RegExp ? separator : new RegExp(separator);
		let prevChar = '';
		let postChar = '';
		const _pre = pre instanceof RegExp ? pre : new RegExp(pre);
		const _post = post instanceof RegExp ? post : new RegExp(post);

		for (const [i, c] of Object.entries(this)) {
			postChar = this[+i + 1];
			if (
				_separator.test(c) &&
				_pre.test(prevChar) &&
				_post.test(postChar)
			) {
				words.push(currentWord);
				currentWord = '';
			} else {
				currentWord += c;
			}
			prevChar = c;
		}
		if (currentWord.length > 0) {
			words.push(currentWord);
		}
		return words;
	}

	static __join__ = function (
		fn: (el: string, i: number, arr: any[]) => string
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
