import { preview } from './stores';

interface Reset {
	action: 'reset';
}
interface SetProperty {
	action: 'setProperty';
	variable: string;
	value: string;
}
interface RemoveProperty {
	action: 'removeProperty';
	variable: string;
}
interface AddFont {
	action: 'addFont';
	index: number;
	text: string;
}
interface RemoveFont {
	action: 'removeFont';
	index: number;
}
interface AddAddon {
	action: 'addAddon';
	class: string;
	text: string;
}
interface RemoveAddon {
	action: 'removeAddon';
	class: string;
}
interface ToggleModal {
	action: 'toggleModal';
}

/**
 * Send a `postMessage` to the previewer.
 * @param message The action and data to be used.
 */
export const previewAction = (
	message: Reset | SetProperty | RemoveProperty | AddFont | RemoveFont | AddAddon | RemoveAddon | ToggleModal
) => {
	preview.subscribe((e) => {
		e?.contentWindow?.postMessage(JSON.stringify(message), '*');
	});
};
