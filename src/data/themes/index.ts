import frostedglass from './frostedglass';
import softx from './softx';
import basicbackground from './basicbackground';
import clearvision from './clearvision';
import reborn from './reborn';
import tranquil from './tranquil';
import discordrecolor from './discordrecolor';
import comfy from './comfy';
import solana from './solana';
import materialdesign from './materialdesign';

const themes = [frostedglass, softx, basicbackground, clearvision, reborn, tranquil, discordrecolor, comfy, solana, materialdesign];

export const fallbacks = themes.map((el) => el.name.replace(/ /g, '').toLowerCase());

export default themes;
