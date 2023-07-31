<script lang="ts">
	import { browser } from '$app/environment';
	import FileSaver from 'file-saver';
	import { store } from '$lib/stores';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowDownTray } from '@steeze-ui/heroicons';
	import { varOutput } from '$lib/helpers';
	import { getSlug } from '$lib/utils';
	import { toast } from 'svoast';

	import { Input, Button, Modal, Banner } from '../common';

	export let visible: boolean = false;

	let value: string;
	let error: string;
	let showDonate: boolean = (browser && !localStorage.getItem(`donate_${getSlug($store.name)}`)) || false;
	$: disabled = !!error || value?.length === 0;

	const validate = () => {
		error = '';
		if (!/^[\x00-\x7F]*$/.test(value)) error = 'Theme can only contain ASCII characters.';
	};
	const hideDonate = () => {
		showDonate = false;
		localStorage.setItem(`donate_${getSlug($store.name)}`, 'true');
	};
	const copyFileContents = async () => {
		generateFileContents(false);
		await window.navigator.clipboard.writeText(fileContents);
		toast.success('Copied generated CSS to clipboard.', {
			duration: '2s',
			onRemove() {
				toast.info(`If you're using Vencord, copy the contents into your Vencord CustomCSS Editor.`, {
					duration: '15s',
					closable: true
				});
			}
		});
	};
	let fileContents: string = '';

	const generateFileContents = (includeMeta: boolean) => {
		$store.meta.name = value;

		if (includeMeta) {
			// Meta
			let meta = `/**\n${Object.entries($store.meta)
				.map(([key, value]) => ` * @${key} ${value}\n`)
				.join('')}`;
			meta += ` * @BDEditor ${$store.name}\n`;
			meta += '*/\n\n';

			fileContents = meta;
		}

		// Fonts
		fileContents += $store.fonts ? $store.fonts.map((url) => `@import url('${url}');\n`).join('') : '';

		// Imports
		fileContents += $store.imports.map((url) => `@import url('${url}');\n`).join('');
		let addonImports = $store.addons.filter((obj) => obj.use);
		addonImports.forEach((obj) => obj.imports.forEach((url) => (fileContents += `@import url('${url}');\n`)));

		// Optional imports
		if ($store.optionalImports.length > 0) {
			fileContents += $store.optionalImports
				.map(({ enabled, imports }) => {
					if (enabled) {
						return imports.map((el) => `@import url('${el}');\n`);
					}
				})
				.join('');
		}

		// Variables
		let groups: { [k: string]: any[] } = {};
		$store.varGroups?.forEach((group) => {
			groups[group] = [];
		});

		Object.keys(groups).forEach((group) => {
			$store.variables.forEach((vars) => {
				vars.inputs.forEach((input) => {
					if (input.type !== 'banner' && (input.varGroup === group || (group === ':root' && !input.varGroup)))
						groups[group] = [...groups[group], input.details];
				});
			});
		});

		// Add addon and hidden variables to the :root
		if ($store.hiddenVars) {
			$store.hiddenVars.forEach((hiddenVar) => {
				const group = hiddenVar.varGroup || ':root';
				groups[group] = [...groups[group], hiddenVar];
			});
		}
		$store.addons.forEach((addon) => {
			if (addon.variables) {
				addon.variables.forEach((input) => {
					if (addon.use) groups[':root'] = [...groups[':root'], input.details];
				});
			}
		});

		Object.entries(groups).forEach(([group, vars]) => {
			fileContents += `\n${group} {\n`;
			fileContents += vars
				.map((input) => varOutput(input))
				.map(({ variable, value, comment }) => `  --${variable}: ${value};${comment ? ` /* ${comment} */` : ''}\n`)
				.join('');
			fileContents += '}\n';
		});

		fileContents += '\n/* Any custom CSS below here */\n\n\n';
	};

	const download = () => {
		if (disabled) return;
		generateFileContents(true);

		const file = new Blob([fileContents], { type: 'text/plain;charset=utf-8' });
		FileSaver.saveAs(file, `${getSlug(value)}.theme.css`);
		fileContents = '';
		value = '';
		toast.success('Theme successfully downloaded.');
	};
</script>

<Modal bind:visible title="Download" size="small">
	{#if $store.developer.donate && showDonate}
		<Banner type="info" closable on:close={hideDonate}>
			<p>Like {$store.name}?</p>
			<p>
				Consider
				<a href={$store.developer.donate} target="_blank" rel="noreferrer noopener">
					Donating to {$store.developer.name}
				</a>
			</p>
		</Banner>
		<div class="spacer" />
	{/if}

	<Input label="Give your theme a name" placeholder="Theme name..." bind:value on:input={validate} {error} />

	<svelte:fragment slot="footer">
		<Button variant="secondary" on:click={copyFileContents}>Copy CSS</Button>
		<Button variant="primary" {disabled} on:click={download}>
			<Icon src={ArrowDownTray} size="18px" />
			Download
		</Button>
	</svelte:fragment>
</Modal>
