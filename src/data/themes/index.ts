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
import materialdiscord from './materialdiscord';
import steam from './steam';
import minimalcord from './minimalcord';
import pyrite from './pyrite';
import glasswave from './glasswave';
import fvui from './fvui';

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
	materialdiscord,
	discordrecolor,
	steam,
	minimalcord,
	pyrite,
	glasswave,
	fvui,
];

export const fallbacks = themes.map((el) => el.name.replace(/ /g, '').toLowerCase());
