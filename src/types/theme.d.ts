import type {Dayjs} from 'dayjs';
import type {Inputs} from './inputs';
import type {IDev} from './dev';
import type {IAddon} from './addon';

export type Icons = ('Photograph'|'Sun'|'Moon'|'ColorSwatch'|'MenuAlt1'|'Puzzle'|'Globe'|'Home'|'User'|'Server'|'Cog'|'Chat'|'DesktopComputer'|'SwitchVertical');

interface ThemeVars {
	title: string,
	icon: Icons,
	inputs: Inputs[],
	userModal?: boolean
}

interface HiddenVars {
	variable: string,
	value: string,
	varGroup?: string,
	comment?: string
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
	developer: IDev,
	meta: Meta,
	imports: string[],
	fonts: string[],
	variables: ThemeVars[],
	hiddenVars?: HiddenVars[],
	varGroups?: string[],
	addons?: ('hsl' | 'rs' | 'columns' | 'discolored')[]
}

export interface IStoreTheme {
	name: string,
  meta: Meta,
  developer: IDev,
  imports: string[],
  variables: ThemeVars[],
  addons: IAddon[],
  fonts?: string[],
  hiddenVars?: HiddenVars[]
	varGroups?: string[]
}

export interface IHistoryTheme extends IStoreTheme {
	createdAt?: Dayjs,
	updatedAt?: Dayjs
}