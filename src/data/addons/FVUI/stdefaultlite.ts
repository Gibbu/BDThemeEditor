import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'SubTheme - Default - Lite',
	description: 'For weak computers.',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/Default_lite.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/Default_lite.css'],
	use: true,
	group: 'subtheme',
	selector: 'DefL',
};

export default addon;
