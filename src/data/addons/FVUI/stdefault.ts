import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'SubTheme - Default',
	description: '',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/Default.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/Default.css'],
	group: 'subtheme',
	selector: 'Def',
	use: false,
	variables: [
		{

		}
	]
};

export default addon;
