export class Errors {
	static browserNotSupported =
		'Your browser does not support Speech Synthesis, please switch to a more modern browser.';

	static initializeError = 'Init error';

	static safariNotFullySupported =
		'Safari might present weird behaviour and bugs, update to the latest version or switch to a fully supported browser';

	static timeoutError = 'Timeout reached';

	static voicesRetrieveTimeoutError =
		'Impossible to retrieve the voices (If you are using Firefox on Linux you need the "speech-dispatcher" package installed).';
}
