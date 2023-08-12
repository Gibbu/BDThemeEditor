import type { Developer } from './dev';
import type { Inputs } from './inputs';

export interface Addon {
	name: string;
	description: string;
	imports: string[];
	developer: Developer;
	selector: string;
	previewUrl: string[];
	group: string;
	use: boolean;
	variables?: Inputs[];
	hiddenVars?: {
		variable: string;
		value: string;
	}[];
}
