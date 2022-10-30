import { previewer } from './stores';

interface SetPreview {
	action: 'setPreview';
	text: string;
}
interface Reset {
	action: 'reset';
}
interface SetProp {
	action: 'setProp';
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
	visible: boolean;
}

/**
 * Send a `postMessage` to the previewer.
 * @param message The action and data to be used.
 */
export const preview = (
	message: SetPreview | Reset | SetProp | RemoveProperty | AddFont | RemoveFont | AddAddon | RemoveAddon | ToggleModal
) => {
	previewer.subscribe((e) => {
		e?.contentWindow?.postMessage(JSON.stringify(message), '*');
	});
};
