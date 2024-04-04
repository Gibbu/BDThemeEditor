import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'Addon - ModularDesign',
	description: 'Adds outline to main sections',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/ModularDesign.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/ModularDesign.css'],
	group: 'MD',
	selector: 'MD',
	use: false,
	variables: [
        {
            type: 'divider',
            props: {
                title: 'ModularDesign',
                description: 'Required to enable ModularDesign in Optional Imports.'
            }
        },
        {
            type: 'divider',
            props: {
                title: '',
                description: 'Main modules'
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outline',
                value: 3,
                step: 1,
                title: 'Outline size',
                unit: 'px',
            }
        },
        {
            type: 'colour',
            props: {
                variable: 'outlineCLR',
                type: 'RGB',
                value: 'var(--color03)',
                title: 'Outline color',
                hint: 'The default is set to variable theme color. Dont change it if you want to maintain compatibility with MaterialYou and accentcolor'
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBR',
                value: 16,
                step: 2,
                title: 'Outline rounding',
                unit: 'px',
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineMG',
                value: 2,
                step: 0.5,
                title: 'Outline margin',
                unit: 'rem',
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBS',
                value: 16,
                step: 2,
                title: 'Outline boxshadow size',
                unit: 'px',
            }
        },
        {
            type: 'colour',
            props: {
                variable: 'outlineBG',
                type: 'RGB',
                value: 'unset',
                title: 'Outline content background color',
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBLUR',
                value: 0,
                step: 1,
                title: 'Background content blur',
                unit: 'px',
                hint: 'Use only with the CustomBackground subtheme (NOT Mica and so on)'
            }
        },
        {
            type: 'divider',
            props: {
                title: '',
                description: 'Additional modules'
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outline2',
                value: 0,
                step: 1,
                title: 'Outline size',
                unit: 'px',
            }
        },
        {
            type: 'colour',
            props: {
                variable: 'outlineCLR2',
                type: 'RGB',
                value: 'var(--outlineCLR)',
                title: 'Outline color',
                hint: 'The default is set to variable theme color. Dont change it if you want to maintain compatibility with MaterialYou and accentcolor'
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBR2',
                value: 'var(--outlineBR)',
                step: 1,
                title: 'Outline rounding',
                unit: 'px',
                hint: 'The default value is equal to main modules'
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineMG2',
                value: 'var(--outlineMG)',
                step: 1,
                title: 'Outline margin',
                unit: '',
                hint: 'The default value is equal to main modules. Specify the value in rem (for example 2rem)'
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBS2',
                value: 'unset',
                step: 2,
                title: 'Outline boxshadow size',
            }
        },
        {
            type: 'colour',
            props: {
                variable: 'outlineBG2',
                type: 'RGB',
                value: 'unset',
                title: 'Outline content background color',
            }
        },
        {
            type: 'number',
            props: {
                variable: 'outlineBLUR2',
                value: 0,
                step: 1,
                title: 'Background content blur',
                unit: 'px',
                hint: 'Use only with the CustomBackground subtheme (NOT Mica and so on)'
            }
        },
	]
};

export default addon;
