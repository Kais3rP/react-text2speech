export class IDeviceInfo {
	isMobile: boolean;
	isSafari: boolean;
	isBrowserSupported: boolean;
}

export class DeviceInfo extends IDeviceInfo {
	constructor() {
		super();
		this.isMobile = DeviceInfo.isMobile();
		this.isSafari = DeviceInfo.isSafari();
		this.isBrowserSupported = DeviceInfo.isBrowserSupported();
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

	static isSafari() {
		return (
			navigator.userAgent.indexOf('Safari') > -1 &&
			navigator.userAgent.indexOf('Chrome') === -1
		);
	}

	static isBrowserSupported() {
		try {
			/* Test if the browser supports speech synthesis */

			if (
				window.speechSynthesis === undefined ||
				window.SpeechSynthesisUtterance === undefined
			)
				return false;
			return true;
		} catch (e) {
			return false;
		}
	}
}
