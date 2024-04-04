import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'SubTheme - Custom Background - Lite',
	description: 'Background with a picture. For weak computers.',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/CustomBackground_lite.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/assets/SubThemes/CustomBackground_lite.css'],
	use: false,
	group: 'subtheme',
	selector: 'CBL',
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
