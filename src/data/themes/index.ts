import frostedglass from './frostedglass';
import softx from './softx';
import basicbackground from './basicbackground';
import clearvision from './clearvision';
import discordrecolor from './discordrecolor';
import comfy from './comfy';
import solana from './solana';
import materialdesign from './materialdesign';
import neutron from './neutron';
import operagxtheme from './operagxtheme';
import outlook from './outlook';
import cyan from './cyan';
import darkmatter from './darkmatter';
import translucence from './translucence';

export const themes = [
	frostedglass,
	softx,
	basicbackground,
	clearvision,
	darkmatter,
	operagxtheme,
	translucence,
	solana,
	outlook,
	cyan,
	comfy,
	materialdesign,
	neutron,
	discordrecolor
];

export const fallbacks = themes.map((el) => el.name.replace(/ /g, '').toLowerCase());
