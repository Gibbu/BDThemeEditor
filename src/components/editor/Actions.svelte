<script>
	import Icon, {Download, Upload, Check, ChevronLeft} from 'svelte-hero-icons';
	import {tick} from 'svelte';
	import {THEME, preview} from '$lib/stores';
	import tooltip from '$lib/tooltip';
	import {goto} from '$app/navigation';
	import FileSaver from 'file-saver';

	import type {ThemeVars} from '$types/theme';
	import type {IAddon} from '$types/addon';

	import {Input} from '$components/common/Input';
	import {Button} from '$components/common/Button';

	let value: string = '';
	let error: string = '';

	let donateModal: boolean = false;

	// Validate
	const validate = (): boolean => {
		const check = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;
		if (value.length < 1) {
			error = 'Your theme name must be longer than 1 character';
			return false;
		} else if (check.test(value)) {
			error = 'Your theme name cannot contain any special characters';
			return false;
		} else {
			error = null;
			return true;
		}
	}

	// Download
	const download = (): void => {
		if (validate()) {
			$THEME.meta.name = value;

			let theme: string;

			// Meta
			theme = `/**\n${Object.entries($THEME.meta).map(([key, value]) => ` * @${key} ${value}\n`).join('')}*/\n\n`;

			// Fonts
			theme += $THEME.fonts ? $THEME.fonts.map(url => `@import url('${url}');\n`).join('') : '';

			// Imports
			theme += $THEME.imports.map(url => `@import url('${url}');\n`).join('');
			let addonImports = $THEME.addons.filter(obj => obj.use);
			addonImports.forEach(obj => obj.imports.forEach(url => theme += `@import url('${url}');\n`));

			// Variables
			theme += '\n:root {\n';
			theme += vars($THEME.variables, 'theme');
			if ($THEME.hiddenVars) theme += vars($THEME.hiddenVars, 'hidden');
			theme += vars($THEME.addons, 'addon');
			theme += '}';

			let file = new Blob([theme], {type: 'text/plain;charset=uft-8'});
			FileSaver.saveAs(file, `${value}.theme.css`);

			const hasPaypal: boolean = $THEME.developers.some(el => el.paypal);
			if (!localStorage.getItem(`${$THEME.name}-donate`) && hasPaypal) {
				donateModal = true;
			}
		}
	}

	// Helpers
	const vars = (vars: Record<string, any>[], type: 'addon' | 'theme' | 'hidden') => {
		let object: Record<string, any>[] = [];
		if (type === 'addon') vars = vars.filter(obj => obj.use == true);

		if (type === 'theme' || type === 'addon') {
			vars.forEach(group => {
				const inputs = type === 'theme' ? group.inputs : group.variables;
				inputs.forEach(input => {
					object = [...object, varOutput(input.details)]
				})
			})
		} else {
			vars.forEach(input => {
				object = [...object, varOutput(input)];
			})
		}

		return object.map(({variable, output}) => `  --${variable}: ${output};\n`).join('');
	}
	const varOutput = (input: Record<string, any>) => {
		let output = ((input.value || input.start) || 0)+(input?.unit || '');
		if (typeof output === 'string' && (output.includes('http') || output.includes('base64'))) {
			output = `url('${output}')`;
		}
		return {
			variable: input.variable,
			output
		}
	}
</script>

<div class="actions">
	<div class="actions-top">
		<Input placeholder="Theme name" bind:value />
	</div>
	<div class="actions-bottom">
		<Button type="secondary">
			<svelte:fragment slot="iconL">
				<Icon src={Upload} />
			</svelte:fragment>
			Import
		</Button>
		<Button type="primary" disabled={error} on:click={download}>
			<svelte:fragment slot="iconL">
				<Icon src={Download} />
			</svelte:fragment>
			Download
		</Button>
	</div>
	{#if error}
		<small class="error">{error}</small>
	{/if}
</div>



<style lang="scss">
	.actions {
		padding: rem(16) 0;
		margin: 0 rem(16);
		border-bottom: rem(1) solid var(--border);
		&-bottom {
			display: grid;
			grid-template-columns: 1fr 1fr;
			margin-top: rem(16);
			gap: rem(16);
		}
	}
	.error {
		color: hsl(var(--red));
	}
</style>