import { createFocusTrap } from 'focus-trap';
import type { Options } from 'focus-trap';

/**
 * Create a focus trap.
 */
export default (node: HTMLElement, options: Options = { fallbackFocus: node }) => {
	const trap = createFocusTrap(node, options);

	trap.activate();

	return {
		destroy() {
			trap.deactivate();
		}
	};
};
