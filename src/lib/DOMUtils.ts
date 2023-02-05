import EventEmitter from 'events';
import { IEvent } from './types';
import { TextUtils } from './TextUtils';
import { Utils } from './Utils';

export class DOMUtils {
	HTMLTags: string[];
	tagIndex: number;

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

		this.tagIndex = 0;
	}

	addHTMLHighlightTags(node: Element) {
		const nodes = [...node.childNodes];
		nodes.forEach((el) => {
			/* Exclude code tags and its content from parsing */
			if (
				el.nodeType === 1 &&
				((el as HTMLElement).tagName === 'PRE' ||
					(el as HTMLElement).tagName === 'CODE')
			)
				return;

			/* Recurse if the element is an HTMLElement */

			if (el.nodeType === 1) this.addHTMLHighlightTags(el as Element);

			/* Begin text node parsing if node type is TextNode */

			if (el.nodeType === 3) {
				if (
					TextUtils.isEmptyString(el.textContent as string) ||
					TextUtils.isSpace(el.textContent as string) ||
					TextUtils.isWhitespaceChar(el.textContent as string)
				)
					return;
				const wrapper = document.createElement('span');

				(el as Text).data
					.split('')
					.filter((char, i, arr) => {
						/* Dismiss empty strings or non valid values */

						if (!char) return false;

						/* Get rid of spaces between words and punctuation */

						if (
							TextUtils.isSpace(char) &&
							TextUtils.isPunctuation(arr[i + 1])
						)
							return false;

						/* Get rid of multiple spaces to avoid inconsistencies */

						if (
							TextUtils.isSpace(char) &&
							TextUtils.isSpace(arr[i + 1])
						)
							return false;

						return true;
					})

					/* Separate special characters that will be read as single characters */

					.map((c, i, arr) => {
						/* Replace whitespace characters with common spaces */

						if (TextUtils.isWhitespaceChar(c)) return ' ';

						/* Separate the special readable characters like @#^*° so they can be read accordingly */

						if (TextUtils.isSpecialReadableCharacter(c))
							return ` ${c} `;

						/* Handle dots in the middle of numbers e.g. 1.000 1.23 */

						if (
							TextUtils.isDot(c) &&
							TextUtils.isNumber(arr[i - 1]) &&
							TextUtils.isNumber(arr[i + 1])
						)
							return `${c}`;

						/* Handle dots in the middle of words and numbers e.g. some.text e.g. abc33.bb32 , 
						since in this case they are read as a character : "some dot text" "one dot zero zero zero" */

						if (
							TextUtils.isDot(c) &&
							TextUtils.isWordWithNumbers(arr[i - 1]) &&
							TextUtils.isWordWithNumbers(arr[i + 1])
						)
							return ` ${c} `;

						/* Handle the punctation characters apart dots placed in the middle of a word e.g. test:test --> test: test */

						if (
							TextUtils.isPunctuationButDot(c) &&
							TextUtils.isWord(arr[i - 1]) &&
							TextUtils.isWord(arr[i + 1])
						)
							return `${c} `;

						/* Handle multiple zeroes in a row, since they are read a single separated words */

						return c;
					})
					.join('')
					.split(' ')
					.forEach((word, i, arr) => {
						if (!word) return;

						/* If it's a special unreadable character or a dot it does not add an highlight data-id since those characters won't  be read */

						if (
							// TextUtils.isPunctuation(word) ||
							TextUtils.isSpecialUnreadableCharacter(word) ||
							TextUtils.isWordInsideAngularBrackets(word)
						) {
							const newEl = document.createTextNode(word + ' ');
							wrapper.appendChild(newEl);
						} else {
							/* In all other cases, which is, "plain words or slashes or any other readable character" we add the data-id attribute */

							const newEl = document.createElement('span');

							newEl.setAttribute(
								'data-id',
								(this.tagIndex++).toString()
							);
							newEl.setAttribute('data-type', 'WORD');

							/* Do not add a space after the word if it's a special readable character or if the next word is not a plain word */
							if (
								TextUtils.isSpecialReadableCharacter(word) ||
								TextUtils.isSpecialReadableCharacter(
									arr[i + 1]
								) ||
								TextUtils.isDot(word) ||
								TextUtils.isDot(arr[i + 1]) ||
								TextUtils.isZero(word)
							) {
								newEl.textContent = word;
							} else newEl.textContent = word + ' ';
							/* Add a space after the words that are Text words */

							wrapper.appendChild(newEl);
						}
					});
				node.replaceChild(wrapper, el);
			}
		});
	}

	static applyBasicStyleToWords(node: Element, selector: string) {
		[...node.querySelectorAll(selector)]
			/* .filter(
				(el) => el && !TextUtils.isPunctuation(el.textContent as string)
			) */
			.forEach((el) => {
				(el as HTMLElement).style.transition =
					'background-color 0.2s linear, color 0.2s linear';
				(el as HTMLElement).style.margin = '0px -0.3em';
				(el as HTMLElement).style.padding = '0.2em 0.3em';
				(el as HTMLElement).style.backgroundSize = 'cover';
			});
	}

	static addCustomEventListeners(events: IEvent[], emitter: EventEmitter) {
		events.forEach((e) => {
			if (e.handlers.length > 0) {
				for (const handler of e.handlers) {
					if (Utils.isFunction(handler))
						emitter.on(e.type, handler.bind(this));
				}
			}
		});
	}

	static attachEventListenersToWords(
		node: Element,
		selector: string,
		{ type, fn }: { type: string; fn: (e: Event) => any }
	) {
		[...node.querySelectorAll(selector)].forEach((el) => {
			el.addEventListener(type, fn);
		});
	}

	static scrollTo(idx: number): void {
		const el: HTMLElement | null = document.querySelector(
			`[data-id="${idx}"]`
		);
		if (el)
			el.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
	}

	static retrieveNumberOfWords(node: Element, selector: string) {
		return [...node.querySelectorAll(selector)].length;
	}

	static retrieveWholeText(node: Element, selector: string) {
		return [...node.querySelectorAll(selector)]
			.map((el) => el.textContent)
			.__join__((el, i, arr) => {
				if (
					TextUtils.isPunctuation(arr[i + 1] as string) ||
					TextUtils.isDot(el)
				) {
					return '';
				} else return ' ';
			});
	}

	static retrieveWholeTextArray(node: Element, selector: string) {
		return [...node.querySelectorAll(selector)].map((el) => el.textContent);
	}
}
