import type { Inputs } from './inputs';
import type { Developer } from './dev';
import type { Addon } from './addon';
import type * as HeroIcons from '@steeze-ui/heroicons';

export type Feature = 'background' | 'font' | 'transparent' | 'solid' | 'light' | 'addons' | 'home';

interface ThemeVars {
	/** The text to be displayed in the tooltip */
	title: string;
	/**
	 * Icon of the tab.
	 *
	 * View all available icons here: https://heroicons.com
	 */
	icon: keyof typeof HeroIcons;
	/** The bread and butter */
	inputs: Inputs[];
	/** Describe what this tab is indended for. */
	description?: string;
	/** Shows the profile modal when the tab is active */
	userModal?: boolean;
}

interface HiddenVars {
	/**
	 * The variable name.
	 *
	 * `--` is not required.
	 */
	variable: string;
	/** The end result of the variable. */
	value: string;
	/**
	 * The "group" for the variable/value to be placed into.\
	 * By default this will be `:root`.
	 *
	 * Example:
	 * ```json
	 * {
	 * 	"varGroup": ".theme-light"
	 * }
	 * ```
	 */
	varGroup?: string;
	/** The comment to be placed to the right of the inside the downloaded file. */
	comment?: string;
}
interface OptionalImport {
	/** The name of the import */
	name: string;
	/** A brief description of what this import does. */
	description: string;
	/** The imports urls */
	imports: string[];
	/**
	 * To include the import.
	 *
	 * **NOTE**: Setting this to `true` will auto import them into the previewer and the downloaded file.
	 */
	enabled: boolean;
}

interface Meta {
	/** The name of the theme */
	name: string;
	/** The author of the theme */
	author: string;
	/** The version of the theme */
	version: string;
	/** The description of the theme */
	description: string;
	/** The direct link to the soruce code */
	source: string;
	/** The invite code to your Discord server */
	invite?: string;
	/** Any donation link */
	donate?: string;
	/** Your patreon url */
	patreon?: string;
	/** Your website */
	website?: string;
	/** Your unique Discord User ID */
	authorId?: string;
}

export interface Theme {
	/**
	 * The name of your theme.\
	 * Will be used as the slug and url for the editor.
	 *
	 * Example: Frosted Glass = frostedglass
	 */
	name: string;
	/** The image used for the theme listing page. */
	thumbnail: string;
	/** The developer of the theme. */
	developer: Developer;
	/** The BetterDiscord meta to be included with the downloaded file. */
	meta: Meta;
	/**
	 * The content to be injected to the previewer.
	 *
	 * **NOTE**: If your theme uses optional imports such as an addon that is specific for your theme
	 * but isn't required, place them inside the `optionalImports` object.
	 *
	 * Example: VerticalUserArea for SoftX
	 */
	preview: string;
	/** Required imports to make your theme work. */
	imports: string[];
	/** And font URLs that need to be included with the downloaded file. */
	fonts: string[];
	/** The config of your theme. */
	variables: ThemeVars[];
	/**
	 * Optional imports/addons that aren't required for your theme to work properly.
	 *
	 * **NOTE**: Adding imports here will be placed inside the previewer as well as the downloaded file.
	 *
	 * If you want the addon to be enabled by default, set the `enabled` prop to `true`.
	 */
	optionalImports?: OptionalImport[];
	/** Any variables that shouldn't be updated by the user, such as update banner vars. */
	hiddenVars?: HiddenVars[];
	/** The available selectors for variables to be placed. Such as `.theme-dark` and `.theme-light`. */
	varGroups?: string[];
	/** Any addons compatible addons. */
	addons?: Addon[];
	/** The feature set of the theme. */
	features?: Feature[];
}

export interface IStoreTheme {
	name: string;
	meta: Meta;
	developer: Developer;
	imports: string[];
	variables: ThemeVars[];
	addons: Addon[];
	optionalImports: OptionalImport[];
	fonts?: string[];
	hiddenVars?: HiddenVars[];
	varGroups?: string[];
}
