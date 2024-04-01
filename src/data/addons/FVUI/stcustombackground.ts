import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'SubTheme - Custom Background',
	description: 'Background with a picture',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/CustomBackground.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/CustomBackground.css'],
	group: 'subtheme',
	selector: 'CB',
	use: false,
	variables: [
		{
			type: 'image',
			props: {
				variable: 'image',
				value: 'https://feorev.github.io/Themes/Discord/FVUI/assets/Wallpapers/dark.avif',
				title: 'Background image (direct link)',
			}
		},
		{
			type: 'slider',
			props: {
				variable: 'OpacityBG',
				value: 60,
				max: 100,
				unit: '%',
				step: 1,
				title: 'Opacity',
			}
		},
		{
			type: 'number',
			props: {
				variable: 'BlurBG',
				value: 0,
				unit: 'px',
				step: 1,
				title: 'Blur',
			}
		},
	]
};

export default addon;
