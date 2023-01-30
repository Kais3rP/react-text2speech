import { EventHandler, RefObject, useEffect, useRef } from 'react';

export const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: (e: Event) => void
): void => {
	useEffect(
		() => {
			const listener: EventHandler<any> = (event) => {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref.current || ref.current.contains(event?.target)) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
			document.addEventListener('pointerDown', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
				document.removeEventListener('pointerDown', listener);
			};
		},
		// Add ref and handler to effect dependencies
		// It's worth noting that because passed in handler is a new ...
		// ... function on every render that will cause this effect ...
		// ... callback/cleanup to run every render. It's not a big deal ...
		// ... but to optimize you can wrap handler in useCallback before ...
		// ... passing it into this hook.
		[ref, handler]
	);
};

export const useIsFirstRender = () => {
	const ref = useRef(true);
	useEffect(() => {
		ref.current = false;
	}, []);
	return ref.current;
};

export const useScrollToTop = () => {
	useEffect(() => {
		setTimeout(
			() =>
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				}),
			0
		);
	}, []);
};
