import type { Inputs } from './inputs';
import type { IDev } from './dev';
import type { IAddon } from './addon';

export type Feature = 'background' | 'font' | 'transparent' | 'solid' | 'light' | 'addons' | 'home';

interface ThemeVars {
	title: string;
	icon: string;
	inputs: Inputs[];
	userModal?: boolean;
}

interface HiddenVars {
	variable: string;
	value: string;
	varGroup?: string;
	comment?: string;
}
interface OptionalImport {
	name: string;
	description: string;
	imports: string[];
}

interface Meta {
	name: string;
	author: string;
	version: string;
	description: string;
	source: string;
	invite?: string;
	donate?: string;
	patreon?: string;
	website?: string;
	authorId?: string;
}

export interface ITheme {
	name: string;
	previewUrls: string[];
	thumbnail: string;
	developer: IDev;
	meta: Meta;
	imports: string[];
	fonts: string[];
	variables: ThemeVars[];
	optionalImports?: OptionalImport[];
	hiddenVars?: HiddenVars[];
	varGroups?: string[];
	addons?: IAddon[];
	features?: Feature[];
}

export interface IStoreTheme {
	name: string;
	meta: Meta;
	developer: IDev;
	imports: string[];
	variables: ThemeVars[];
	addons: IAddon[];
	optionalImports?: OptionalImport[];
	fonts?: string[];
	hiddenVars?: HiddenVars[];
	varGroups?: string[];
}
