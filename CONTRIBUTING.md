# Contributing to BDThemeEditor

### Prerequisites

- [NodeJS](https://nodejs.org) v18 or above.
- [pnpm](https://pnpm.io)

### Bug report

If you found a bug, please:

1. Fork the `main` branch.
2. Install dependencies `pnpm install`.
3. Run local dev server with `pnpm dev`.
4. Test your bug fix locally.
5. Submit a Pull Request.

And if all is well, your pull request will be merged.

<br>

### Adding a new theme

If you're a theme dev and wish to have your theme on the editor, follow these intructions:

> All files are TypeScript (`.ts`) and everything you require is fully typed.

1. Fork the `main` branch.
2. Install dependencies `pnpm install`.
3. Run local dev server with `pnpm dev`.
4. Make a new dev file inside the `src/data/devs` file with your name ending in `.ts`.  
   Inside the dev file, import the `Developer` type get all available properties.  
   Create a constant variable that has the type of `Developer`, then export it as the default.

   > This _can_ be a `var` or `let` but we're not going to edit it during the runtime.

   ```ts
   import type { Developer } from '$types/dev';

   const dev: Developer = {
   	name: 'coolDev',
   	github: 'coolDev'
   };

   export default dev;
   ```

   If a property is required but not present, you'll get a warning from your editor.

5. Make a new theme file inside `src/data/themes` file with your theme name ending in `.ts`.  
   Inside the theme file, import the `Theme` type to get all available properties.  
   Create a constant variable that has the type of `Theme`, then export it as the default.

   ```ts
   import type { Theme } from '$types/theme';

   const theme: Theme = {
   	name: 'Cool Theme',
   	thumbnail: 'https://direct.link/to-thumbnail.jpg',
   	meta: {}, // BetterDiscord META
   	variables: [] // Theme config that users will edit.
   	// more properties...
   };

   export default theme;
   ```

   The `Theme` config is quite large, so make sure you read all the inbuilt documentation, which should tell you all you need to know.  
   You also can view other theme files to see how they do it.

6. Inside the `src/data/themes/index.ts` file, import your theme and add it to the themes array.

   ```ts
   import coolTheme from './coolTheme.ts';

   export const themes = [
   	// themes...
   	coolTheme
   ];
   ```

7. Submit a Pull Request. If all is well, your theme will be merged.
