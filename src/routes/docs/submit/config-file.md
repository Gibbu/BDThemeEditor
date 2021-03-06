# Config File

This file will contain everything to your theme such as META, variables, imports, compatible addons, ect...  
Which the editor will use the construct your theme.

## Available Properties

| Properity    | Type   | Required | Description                                                                                                               |
| :----------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------ |
| `name`       | string | true     | Name of your config file. This will be used for navigating and selecting your theme.                                      |
| `previewUrl` | string | true     | The url to be injected into the previewer. This will typically your `.theme.css` file as it will show the default config. |
| `thumbnail`  | string | true     | Thumbnail used on the homepage and embeds.                                                                                |
| `developer`  | object | true     | The developer object that is located in `src/data/devs`.                                                                  |
| `meta`       | object | true     | META for the BetterDiscord file. [See available meta](/docs/submit/betterdiscord-meta).                                   |
| `imports`    | array  | true     | Imports to be included with the outputted file. This is where you'd place your GitHub pages hosted css files.             |
| `variables`  | array  | true     | The required CSS variables. [View Variables Config](/docs/submit/variables-config).                                       |
| `fonts`      | array  | false    | URL of the fonts that is imported with your theme.                                                                        |
| `hiddenVars` | array  | false    | Variables that need to be included to the `.theme.css` file but shouldn't be edited by the user.                          |
| `addons`     | array  | false    | Addons to be available for the user to edit. Available addons: `hsl`, `columns`, `rs`                                     |
| `varGroups`  | array  | false    | Theme groups to be added to the downloaded file. Example: `:root`, `.theme-dark`, `.theme-light`.                         |

### Example

> Config files are in TypeScript.

```ts
// src/data/themes/besttheme.ts
import type { ITheme } from '$types/theme';
import BestDeveloper from '$data/devs/bestdeveloper';

const theme: ITheme = {
	name: 'Best Theme',
	previewUrl: 'https://bestdeveloper.github.io/BestTheme/BestTheme.theme.css',
	thumbnail: 'https://i.imgur.com/Gr8JJAv.jpg',
	developer: BestDeveloper,
	meta: {
		name: 'BestTheme',
		author: 'user#1234',
		version: '1.0.0',
		description: 'Literally the best theme ever made for Discord.',
		source: 'https://github.com/bestdeveloper/BestTheme'
	},
	imports: ['https://bestdeveloper.github.io/BestTheme/BestTheme.css'],
	fonts: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'],
	variables: [
		{
			title: 'Image',
			icon: 'Image',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background-image',
						start: 'https://i.imgur.com/Gr8JJAv.jpg',
						title: 'Background image'
					}
				}
			]
		}
	]
};

export default theme;
```
