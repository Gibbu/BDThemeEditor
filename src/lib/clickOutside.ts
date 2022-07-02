export default function (node: any, exclude: Element) {
	function handleClick(event: any) {
		if (!exclude.contains(event.target) && node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickedOutside', node));
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
