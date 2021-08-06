import type {IDev} from './dev';
import type {Inputs} from './inputs';

interface IAddon {
	name: string,
	description: string,
	imports: string[],
	developer: IDev,
	selector: string,
	previewUrl: string[],
	use: boolean,
	variables: Inputs[],
	hiddenVars?: {
		variable: string,
		value: string
	}[]
}