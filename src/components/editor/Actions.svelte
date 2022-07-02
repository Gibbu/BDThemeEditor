<script lang="ts">
	import { browser } from '$app/env';
	import { Upload, Download, Dismiss } from '$components/common/Icon';
	import { THEME, isMounted, loaded, flash, preview } from '$lib/stores';
	import DLTheme from '$lib/download';
	import { getUrl, createEl } from '$lib/helpers';

	import { Input } from '$components/common/Input';
	import { Button } from '$components/common/Button';
	import { ModalRoot, ModalBody, ModalHeader, ModalFooter } from '$components/common/Modal';

	let value: string = '';
	let error: string | null = null;

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
	};

	// Download
	let downloadModal: boolean = false;
	const download = (): void => {
		if (validate()) {
			$THEME.meta.name = value;
			DLTheme($THEME);
		}
	};

	// Import
	let importFileModal: boolean = false;
	let importFiles: FileList;
	let importError: string;
	let importDragover: boolean = false;

	// User drops a file
	const droppedFile = (e: DragEvent): void => {
		importFile(e.dataTransfer!.files[0]);
	};
	// User selects a file
	const selectedFile = (e: any): void => {
		importFile(e.target.files[0]);
	};

	const getOutput = (type: string, value: string): string => {
		return type === 'select' ? value : value.replace(/px|%|deg/g, '');
	};
	const importFile = (file: File): void => {
		if (file && !['text/css'].includes(file.type)) {
			importError = 'That file type cannot be imported';
		} else {
			const reader = new FileReader();

			reader.readAsText(file);
			reader.addEventListener('load', (e) => {
				importError = '';

				const result: string = e.target!.result!.toString()!;

				const source = result
					.split('/**')[1]
					.split('*/')[0]
					.split('\n')
					.filter((el) => el)
					.find((el) => el.includes('@source'))!
					.replace(' * ', '')
					.split(' ')[1];
				if ($THEME.meta.source === source) {
					const imports: string[] = result.split('\n').filter((el) => el.includes('@import'));

					const addonUrls: string[] = ['ServerColumns', 'HorizontalServerList', 'RadialStatus', 'Discolored'];
					const fontImports: string[] = imports.filter((el) => el.includes('fonts'));

					// Add fonts to the THEME store.
					$THEME.fonts = fontImports.map((url) => getUrl(url));
					if (fontImports.length > 0) {
						let index: number = 0;

						fontImports.forEach((url) => {
							if (!$preview.querySelector(`#font-${index}`)) {
								createEl<HTMLStyleElement>(
									'style',
									{
										id: `font-${index}`,
										className: 'customfont',
										innerText: url
									},
									$preview.querySelector('head')!
								);
							}
							index++;
						});
					}

					// Theme imports
					$THEME.imports = imports.filter((el) => !el.includes('fonts')).map((url) => getUrl(url));

					// Addons
					imports
						.filter((a) => addonUrls.find((b) => a.includes(b)))
						.forEach((el) => {
							const url = getUrl(el);
							const selector = url.includes('Columns') ? 'columns' : url.includes('Horizontal') ? 'hsl' : 'rs';

							createEl<HTMLStyleElement>(
								'style',
								{
									className: selector,
									textContent: `@import url('${url}');`
								},
								$preview.querySelector('head')!
							);

							$THEME.addons.forEach((addon) => {
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
							$preview.style.setProperty(`--${variable}`, value);

							// If value includes url, strip url
							if (value.includes('url(')) value = getUrl(value);

							$THEME.variables.forEach((el) =>
								el.inputs.forEach((input) => {
									if (input.details.variable === variable) {
										input.details.value = getOutput(input.type, value);
									}
								})
							);
							$THEME.addons.forEach((el) => {
								if (el.variables) {
									el.variables.forEach((input) => {
										if (input.details.variable === variable) {
											input.details.value = getOutput(input.type, value);
										}
									});
								}
							});
						}
					});

					importFileModal = false;
					$flash = [
						...$flash,
						{
							type: 'success',
							message: 'Theme successfully imported'
						}
					];
				} else {
					importError = `That theme file is not compatible. Only themes with the base of ${$THEME.name} can be imported.`;
				}
			});
		}
	};

	// Donate
	let showDonateWindow: boolean = true;

	const hideDonate = (): void => {
		showDonateWindow = false;
		localStorage.setItem(`donate_${$THEME.name.replace(/ /g, '')}`, 'true');
	};

	$: if (browser && $isMounted && localStorage.getItem(`donate_${$THEME.name.replace(/ /g, '')}`)) {
		showDonateWindow = false;
	}
</script>

<template>
	<div class="actions" disabled={!$isMounted && !$loaded}>
		<button class="actions-btn" on:click={() => (importFileModal = true)}>
			<div class="icon">
				<Upload />
			</div>
			<span>Import</span>
		</button>
		<button class="actions-btn primary" on:click={() => (downloadModal = true)}>
			<div class="icon">
				<Download />
			</div>
			<span>Download</span>
		</button>
	</div>

	<ModalRoot bind:visible={downloadModal}>
		<ModalHeader title="Donwload" on:close={() => (downloadModal = false)} />
		<ModalBody markdown={false}>
			{#if $THEME.developer.donate && showDonateWindow}
				<div class="donate">
					<h4 class="donate-title">
						Like {$THEME.name}?
						<button class="donate-hide" on:click={hideDonate}>
							<Dismiss />
						</button>
					</h4>
					<p class="donate-text">
						Consider <a href={$THEME.developer.donate} target="_blank" rel="noreferrer" class="anchor"
							>donating to {$THEME.developer.name}</a
						>.
					</p>
				</div>
			{/if}
			<p class="save-title">Give your theme a name:</p>
			<Input placeholder="Theme name" {error} bind:value on:keyup={validate} />
			{#if error}
				<small class="save-error">{error}</small>
			{/if}
		</ModalBody>
		<ModalFooter>
			<Button type="primary" disabled={error} on:click={download}>
				<svelte:fragment slot="iconL">
					<Download />
				</svelte:fragment>
				Download
			</Button>
		</ModalFooter>
	</ModalRoot>

	<ModalRoot bind:visible={importFileModal}>
		<ModalHeader title="Select a theme to upload" on:close={() => (importFileModal = false)} />
		<ModalBody>
			<label
				class="dropzone"
				class:dragover={importDragover}
				class:error={importError}
				on:dragover|preventDefault={() => (importDragover = true)}
				on:dragleave={() => (importDragover = false)}
				on:dragend={() => (importDragover = false)}
				on:drop|preventDefault={droppedFile}
			>
				<span class="dropzone-promt">{importError || 'Drop theme.css file here or click to upload'}</span>
				<input type="file" hidden bind:files={importFiles} on:change={selectedFile} />
			</label>
		</ModalBody>
	</ModalRoot>
</template>

<style lang="scss">
	.actions {
		display: flex;

		&-btn {
			max-height: rem(64);
			padding: rem(20) 0;
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: rem(16);
			transition: color 0.15s ease;
			&:not(:last-child) {
				border-right: rem(1) solid var(--border);
			}

			.icon {
				width: rem(24);
				height: rem(24);
			}

			&:hover {
				color: var(--text-primary);
			}
			&.primary {
				background: hsl(var(--accent));
				color: #000;
				font-weight: 500;
				text-shadow: 0 rem(2) rem(5) hsl(0 0% 0% / 0.4);
				.icon {
					filter: drop-shadow(0 rem(2) rem(5) hsl(0 0% 0% / 0.4));
				}
			}
		}

		&[disabled='true'] {
			opacity: 0.5;
			pointer-events: none;
			user-select: none;
		}
	}

	.save {
		&-title {
			margin-bottom: rem(8);
			font-size: rem(14);
		}
		&-error {
			display: block;
			color: hsl(var(--red));
			margin-top: rem(4);
		}
	}
	.donate {
		border-radius: rem(4);
		border: rem(1) solid var(--border);
		margin-bottom: rem(16);
		padding: rem(16);
		&-title {
			color: var(--text-primary);
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&-hide {
			width: rem(16);
			height: rem(16);
		}
		&-text {
			font-size: rem(14);
			margin-top: rem(4);
		}
	}

	.dropzone {
		$self: &;

		padding: rem(32);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: rem(2) dashed var(--border);
		cursor: pointer;
		border-radius: rem(4);
		transition: 0.15s ease border-color;

		&-promt {
			font-size: rem(14);
			transition: 0.15s ease color;
			color: var(--text-tertiary);
			user-select: none;
			pointer-events: none;
		}

		&:hover,
		&.dragover {
			border-color: var(--border-hover);
			#{$self}-promt {
				color: var(--text-secondary);
			}
		}
		&.error {
			border-color: hsl(var(--red));
			#{$self}-promt {
				color: hsl(var(--red));
			}
		}
	}
</style>
