/**
 * Mounts the selected node to a different part of the app.
 * @param target The element to be appended to. Default = `body`.
 */
export default (node: HTMLElement, target: HTMLElement | string = 'body') => {
	const update = async (newTarget: HTMLElement | string) => {
		let el: HTMLElement = (typeof newTarget === 'string' ? document.querySelector(newTarget) : newTarget)!;
		el.appendChild(node);
	};
	const destroy = () => {
		if (node) node.remove();
	};

	update(target);

	return {
		update,
		destroy
	};
};
