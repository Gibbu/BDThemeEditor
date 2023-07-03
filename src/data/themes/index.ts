import frostedglass from './frostedglass';
import softx from './softx';
import basicbackground from './basicbackground';
import clearvision from './clearvision';
// import reborn from './reborn';
// import tranquil from './tranquil';
import discordrecolor from './discordrecolor';
import comfy from './comfy';
import solana from './solana';
import materialdesign from './materialdesign';
import neutron from './neutron';
import operagxtheme from './operagxtheme';
import outlook from './outlook';
import cyan from './cyan';
import darkmatter from './darkmatter';

export const themes = [
	frostedglass,
	softx,
	basicbackground,
	clearvision,
	darkmatter,
	comfy,
	solana,
	operagxtheme,
	outlook,
	neutron,
	cyan,
	// reborn,
	// tranquil,
	materialdesign,
	discordrecolor,
];

export const fallbacks = themes.map((el) => el.name.replace(/ /g, '').toLowerCase());
