import type {Inputs} from './inputs';
import type {IDev} from './dev';
import type {IAddon} from './addon';

export type Icons = ('Photograph'|'Sun'|'ColorSwatch'|'MenuAlt1'|'Puzzle'|'Globe'|'Home'|'User'|'Server'|'Cog'|'Chat');

interface ThemeVars {
	title: string,
	icon: Icons,
	inputs: Inputs[],
	modal?: boolean
}

interface HiddenVars {
	variable: string,
	value: string
}

interface Meta {
	name: string,
	author: string,
	version: string,
	description: string,
	source: string,
	invite?: string,
	donate?: string,
	patreon?: string,
	website?: string,
	authorId?: string
}


export interface ITheme {
	name: string,
	previewUrl: string,
	thumbnail: string,
	developers: IDev[],
	meta: Meta,
	imports: string[],
	fonts: string[],
	variables: ThemeVars[],
	tags: ('Background Image'|'Colours'|'Custom Font'|'Home Button'|'Addons')[],
	hiddenVars?: HiddenVars[],
	addons?: string[]
}

export interface IStoreTheme {
	name: string,
  meta: Meta,
  developers: IDev[],
  imports: string[],
  fonts: string[],
  variables: ThemeVars[],
  addons: IAddon[],
  hiddenVars?: HiddenVars[]
}