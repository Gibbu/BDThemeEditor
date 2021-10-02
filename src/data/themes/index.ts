import frostedglass from './frostedglass';
import basicbackground from './basicbackground';
import clearvision from './clearvision';
import reborn from './reborn';
import tranquil from './tranquil';
import discordrecolor from './discordrecolor';
import comfy from './comfy';

const themes = [
	frostedglass,
	basicbackground,
	clearvision,
	reborn,
	tranquil,
	discordrecolor,
	comfy,
]

export const fallbacks = themes.map(el => el.name.replace(/ /g, '').toLowerCase());

export default themes;