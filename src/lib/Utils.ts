export class Utils {
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

	static async isBrushAvailable(brush: string, color: string) {
		const URL = Utils.getBrushURL(brush, color).http;
		const res = await fetch(URL);
		const data = await res.blob();
		if (res.ok && /image/.test(data?.type)) return true;
		else return false;
	}
}
