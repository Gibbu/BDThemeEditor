<script lang="ts">
	import { store } from '$lib/stores';
	import { Modal, Banner, Dropzone } from '../common';
	import { parseMeta, getUrl, stripVal } from '$lib/helpers';
	import { preview } from '$lib/preview';
	import { toast } from 'svoast';

	export let visible: boolean = false;

	let files: FileList;
	let error: string;

	const upload = () => {
		console.log('wowzers');
		const file = files[0];

		const reader = new FileReader();

		reader.readAsText(file);
		reader.addEventListener('load', (e) => {
			error = '';

			const result = e.target?.result?.toString();

			if (!result) {
				error = 'Something went wrong.';
				return;
			}

			const { BDEditor } = parseMeta(result);

			if ($store.name !== BDEditor) {
				error = `A theme with the base of ${BDEditor} cannot be uploaded to ${$store.name}`;
				return;
			}

			const imports: string[] = result.split('\n').filter((el) => el.includes('@import'));
			const addons: string[] = ['ServerColumns', 'HorizontalServerList', 'RadialStatus', 'Discolored'];
			const fonts: string[] = imports.filter((el) => el.includes('fonts'));

			$store.fonts = fonts.map((url) => getUrl(url));
			if (fonts.length > 0) {
				let index: number = 0;

				fonts.forEach((url) => {
					preview({
						action: 'addFont',
						index,
						text: url
					});
					index++;
				});
			}

			$store.imports = imports.filter((el) => !el.includes('fonts')).map((url) => getUrl(url));

			imports
				.filter((a) => addons.find((b) => a.includes(b)))
				.forEach((el) => {
					const url = getUrl(el);
					const selector = url.includes('Columns') ? 'columns' : url.includes('Horizontal') ? 'hsl' : 'rs';

					preview({
						action: 'addAddon',
						class: selector,
						text: url
					});

					$store.addons.forEach((addon) => {
						if (addon.selector === selector) {
							addon.use = true;
						}
					});
				});

			result.split('\n').forEach((line) => {
				if (line.includes('--')) {
					const property: string[] = line.split(/:(.+)/);
					let variable: string = property[0].replace('--', '').trim();
					let value: string = property[1].replace(/;/g, '').trim();

					if (value.includes('/*')) value = value.split('/*')[0].trim();

					// Add css to previewer
					preview({
						action: 'setProp',
						variable,
						value
					});

					// If value includes url, strip url
					if (value.includes('url(')) value = getUrl(value);

					$store.variables.forEach((el) =>
						el.inputs.forEach((input) => {
							if (input.type !== 'banner' && input.details.variable === variable) {
								input.details.value = input.type === 'select' ? value : stripVal(value);
							}
						})
					);
					$store.addons.forEach((el) => {
						if (el.variables) {
							el.variables.forEach((input) => {
								if (input.type !== 'banner' && input.details.variable === variable) {
									input.details.value = input.type === 'select' ? value : stripVal(value);
								}
							});
						}
					});

					visible = false;
					toast.success('Uploaded theme.');
				}
			});
		});
	};
</script>

<Modal bind:visible title="Select a theme to upload" size="small">
	<Banner type={error ? 'error' : 'info'}>
		{error || `Only ${$store.name} themes that have been downloaded through this editor can be uploaded.`}
	</Banner>
	<div class="spacer" />
	<Dropzone bind:files message="Drop theme file here or click to select" allowed={['css']} on:change={upload} />
</Modal>

<style lang="scss">
</style>
