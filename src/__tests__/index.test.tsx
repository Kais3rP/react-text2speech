/* import React from 'react';
import { render } from '@testing-library/react'; */
import '@testing-library/jest-dom';
import { SpeechSynth } from '../index';

/* describe('My Component', () => {
	it('displays the passed message', async () => {
		const { findByText } = render(<Main message="Hello World" />);
		const content = await findByText('Hello World');
		expect(content).toBeTruthy();
	});
	it('displays the default message', async () => {
		const { findByText } = render(<Main />);
		const content = await findByText('No Message');
		expect(content).toBeTruthy();
	});
}); */

/* Mock missing props in window */
window.SpeechSynthesisUtterance = class SpeechSynthesisUtterance {
	lang;
	onboundary;
	onerror;
	onend;
	onmark;
	onpause;
	onresume;
	onstart;
	pitch;
	rate;
	text;
	volume;
	voice;
	addEventListener;
	removeEventListener;
	dispatchEvent;
	// eslint-disable-next-line no-useless-constructor
	constructor() {}
};

describe('addHTMLHighlightTags', () => {
	const node: HTMLElement = document.createElement('div');

	beforeEach(() => {
		node.innerHTML = '';
	});

	test('should correctly add span tags with data-id attributes to all text elements within the provided node', () => {
		node.innerHTML = '<p>This is some text</p>';

		const instance = new SpeechSynth(node);
		instance.addHTMLHighlightTags(node);
		expect(node.innerHTML).toEqual(
			'<p><span><span data-id="0" data-type="WORD">This </span><span data-id="1" data-type="WORD">is </span><span data-id="2" data-type="WORD">some </span><span data-id="3" data-type="WORD">text </span></span></p>'
		);
	});
	test('should correctly handle different types of elements', () => {
		node.innerHTML = '<p>This is some <a href="#">link</a></p>';

		const instance = new SpeechSynth(node);
		instance.addHTMLHighlightTags(node);
		expect(node.innerHTML).toEqual(
			'<p><span><span data-id="0" data-type="WORD">This </span><span data-id="1" data-type="WORD">is </span><span data-id="2" data-type="WORD">some </span></span><a href="#"><span><span data-id="3" data-type="WORD">link </span></span></a></p>'
		);
	});
	test('should exclude code tags and its content from parsing', () => {
		node.innerHTML = '<p>This is some text</p><pre>This is code</pre>';

		const instance = new SpeechSynth(node);
		instance.addHTMLHighlightTags(node);
		expect(node.innerHTML).toEqual(
			'<p><span><span data-id="0" data-type="WORD">This </span><span data-id="1" data-type="WORD">is </span><span data-id="2" data-type="WORD">some </span><span data-id="3" data-type="WORD">text </span></span></p><pre>This is code</pre>'
		);
	});
	test('should handle correctly nested elements', () => {
		node.innerHTML =
			'<p>This is some<em><strong>deep</strong>nested</em> text</p>';

		const instance = new SpeechSynth(node);
		instance.addHTMLHighlightTags(node);
		expect(node.innerHTML).toEqual(
			'<p><span><span data-id="0" data-type="WORD">This </span><span data-id="1" data-type="WORD">is </span><span data-id="2" data-type="WORD">some </span></span><em><strong><span><span data-id="3" data-type="WORD">deep </span></span></strong><span><span data-id="4" data-type="WORD">nested </span></span></em><span><span data-id="5" data-type="WORD">text </span></span></p>'
		);
	});
});
