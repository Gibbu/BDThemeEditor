/**
 * @param node Element to hide when clicking outside.
 * This element is parsed automatically.
 * @param options Object of options.
 * @param options.callback The function called when clicking outside of the element.
 * @param options.exlude The element to be excluded when calling the `options.callback` handler.
 */
export default (
	node: HTMLElement,
	options: {
		callback: () => void;
		exclude?: HTMLElement | null;
	}
): { destroy: () => void } => {
	const onClick = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (options.exclude?.contains(target)) return;
		if (node && !node.contains(target) && !e.defaultPrevented) options.callback();
	};

	document.addEventListener('click', onClick, true);

	return {
		destroy() {
			document.removeEventListener('click', onClick, true);
		}
	};
};
