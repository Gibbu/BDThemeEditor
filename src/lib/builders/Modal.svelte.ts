import { createUID } from '$lib/utils';
import { createAttachmentKey } from 'svelte/attachments';
import { createFocusTrap, type Options } from 'focus-trap';

export class Modal {
	#uid = createUID('modal');
	#visible: boolean;
	#trigger = $state<HTMLElement | undefined>();

	constructor(visible?: boolean) {
		this.#visible = $state<boolean>(visible || false);

		$effect(() => {
			if (this.#visible) {
				window.addEventListener('keydown', this.#handleGlobalKeys);
			} else {
				window.removeEventListener('keydown', this.#handleGlobalKeys);
			}
		});
	}

	get visible() {
		return this.#visible;
	}

	#toggle = () => {
		this.#visible = !this.#visible;
	};
	#close = () => {
		this.#visible = false;
	};
	#handleGlobalKeys = (e: KeyboardEvent) => {
		if (e.key === 'Escape') this.#close();
	};

	trigger = () => {
		return {
			id: this.#uid('trigger'),
			'aria-expanded': this.#visible,
			'aria-controls': this.#visible || undefined,
			[createAttachmentKey()]: (node: HTMLElement) => {
				this.#trigger = node;

				node.addEventListener('click', this.#toggle);

				return () => {
					node.removeEventListener('click', this.#toggle);
				};
			}
		};
	};

	overlay = () => {
		return {
			id: this.#uid('overlay'),
			[createAttachmentKey()]: (e: HTMLElement) => {
				e.addEventListener('click', this.#close);

				return () => {
					e.removeEventListener('click', this.#close);
				};
			}
		};
	};

	content = (trapOptions: Options = {}) => {
		return {
			id: this.#uid('content'),
			role: 'dialog',
			'aria-modal': true,
			'aria-describedby': this.#uid('description'),
			'aria-labelledby': this.#uid('title'),
			[createAttachmentKey()]: (node: HTMLElement) => {
				const trap = createFocusTrap(node, {
					...{
						fallbackFocus: this.#trigger,
						allowOutsideClick: true
					},
					...trapOptions
				});
				trap.activate();

				return () => {
					trap.deactivate();
				};
			}
		};
	};

	title = () => {
		return {
			id: this.#uid('title'),
			role: 'heading'
		};
	};

	description = () => {
		return {
			id: this.#uid('description')
		};
	};
}
