import frostedglass from './frostedglass';
import basicbackground from './basicbackground';
import clearvision from './clearvision';
import notanotheranimetheme from './notanotheranimetheme';
import reborn from './reborn';
import tranquil from './tranquil';
import discordrecolor from './discordrecolor';

const themes = [
	frostedglass,
	basicbackground,
	clearvision,
	notanotheranimetheme,
	reborn,
	tranquil,
	discordrecolor,
]

export const fallbacks = themes.map(el => el.name.replace(/ /g, '').toLowerCase());

export default themes;