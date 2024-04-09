<script lang="ts">
	import axios from 'axios';
	import { createEventDispatcher } from 'svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowUpTray, Check } from '@steeze-ui/heroicons';

	// Components
	import { Modal, Button, RadioGroup, RadioGroupItem, Select, Input, Dropzone, Banner } from '$components/common';

	// Required vars
	export let variable: string;
	export let start: string;
	export let value: string = '' || start;
	export let title: string;

	// Optional vars
	export let varGroup: string = ':root';

	// File vars
	let files: FileList;
	let uploadType: 'b64' | 'imgur' = 'imgur';
	let fileUploadModal: boolean = false;
	let fileUploading: boolean = false;
	let fileUploadProgress: number = 0;

	// Other vars
	let error: string | undefined = undefined;

	let thumbnail: string;
	let thumbnailName: string;

	const allowed = ['jpg', 'jpeg', 'gif', 'png', 'apng', 'avif'];
	const dispatch = createEventDispatcher();

	// Checks if the url is a direct link.
	// True = update variable with new value.
	// False = Show warning.
	const web = (): void => {
		error = '';
		try {
			const extension = new URL(value).pathname.split('.').pop();
			if (!extension || (!allowed.includes(extension) && value.length > 0)) {
				error = 'URL must be a direct link (ending in: jpg, jpeg, png, ect...)';
				return;
			} else if (value.length > 0) {
				updatePreview(value);
			}
		} catch (error) {
			error = 'Must be a valid URL.';
			return;
		}
	};

	// Either upload the file to the desired web host or base64 the image.
	const localFile = async (): Promise<void> => {
		const file: File = files[0];
		error = '';

		if (uploadType === 'imgur') {
			fileUploading = true;
			await imgur(file);
		} else if (uploadType === 'b64') {
			base64(file);
		}
	};

	const imgur = async (file: File) => {
		const formData = new FormData();
		formData.append('image', file);

		try {
			const { data } = await axios.post('https://api.imgur.com/3/image', formData, {
				headers: {
					Authorization: 'Client-ID 8887dd35aa4e9c0'
				},
				onUploadProgress: (e) => {
					fileUploadProgress = (e.progress as number) * 100;
				}
			});
			value = data.data.link;

			reset();
			updatePreview(data.data.link);
		} catch (err) {
			const { stack, ...rest } = err as any;
			console.warn('[BDEditor Image Upload]:', rest);
			error = `An error occured while uploading: ${
				(err as any).response.data.data.error
			}.<br>Check the developer console for more information`;
		}
	};
	const base64 = (file: File) => {
		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.addEventListener('load', () => {
			updatePreview(reader.result);
		});
		reader.addEventListener('error', (e) => {
			error = 'Something went wrong while trying to read the image.';
			console.error(e);
		});

		reset();
	};

	const reset = () => {
		fileUploading = false;
		fileUploadModal = false;
		fileUploadProgress = 0;
	};

	$: if (value === 'transparent' && value === start) {
		value = '';
	}

	const transparent = (option: string): void => {
		if (option === 'transparent') {
			updatePreview('transparent');
		} else {
			updatePreview(value || start);
		}
	};

	const updatePreview = (value: any): void => {
		dispatch('update', { variable, value, varGroup });
	};

	// Dropdown stuff
	let selectedOption: 'url' | 'file' | 'transparent' = 'url';
	const selectOptions = [
		{ label: 'Internet URL', value: 'url' },
		{ label: 'Computer file', value: 'file' },
		{ label: 'Transparent Background', value: 'transparent' }
	];

	const setOption = ({ detail }: Record<string, any>): void => {
		error = '';
		selectedOption = detail;
		transparent(detail);
	};
</script>

<template>
	<header class="option-header">
		<p class="option-title">{title}</p>
	</header>
	<div class="option-body">
		<Select options={selectOptions} custom={false} on:update={setOption} />
		{#if selectedOption === 'url'}
			<Input placeholder="Image URL" {error} bind:value on:input={web} />
		{:else if selectedOption === 'file'}
			<Button variant="primary" on:click={() => (fileUploadModal = true)}>Browse</Button>
		{/if}
		{#if selectedOption === 'transparent'}
			<Banner type="info">
				This requires the "Enable Transparency" option to be enabled in your BetterDiscord settings.
			</Banner>
		{/if}
	</div>
</template>

<Modal bind:visible={fileUploadModal} title="How should we upload?">
	{#if fileUploading && !error}
		<div class="progress">
			<div class="progress-text">
				<p class="progress-status" class:done={fileUploadProgress === 100}>
					{fileUploadProgress != 100 ? 'Uploading...' : 'Upload complete'}
				</p>
				<small class="progress-percentage">{fileUploadProgress.toFixed(2)}%</small>
			</div>
			<div class="progress-bar" style="--bar-width: {fileUploadProgress.toFixed(2)}%;" />
		</div>
	{:else}
		<RadioGroup value={uploadType} on:change={({ detail }) => (uploadType = detail)}>
			<RadioGroupItem
				value="imgur"
				label="Imgur.com"
				description="Uploading to Imgur will reduce the amount of lag on your client. But will leave you image open for anyone to see (if they guess the URL)."
			/>
			<RadioGroupItem
				value="b64"
				label="Inline encode (base64)"
				description="Inline encoding will increase the amount of lag on your client. But means your image is private."
			/>
		</RadioGroup>
		<hr class="divider" />
		<Dropzone
			bind:files
			bind:thumbnail
			bind:thumbnailName
			bind:error
			{allowed}
			message="Drop image file here or click to select"
		/>
		{#if !error && files?.[0]}
			<div class="spacer" />
			<Button variant="primary" size="large" long on:click={localFile}>
				{#if uploadType === 'b64'}
					<Icon src={Check} />
				{:else}
					<Icon src={ArrowUpTray} />
				{/if}
				{uploadType === 'b64' ? 'Apply' : 'Upload'}
			</Button>
		{/if}
	{/if}
</Modal>

<style lang="scss">
	.option {
		&-header {
			margin-bottom: 8px;
		}
		&-body {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	}

	.progress {
		position: relative;
		padding: 64px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 75%;
		margin: auto;
		&-text {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			font-size: 14px;
			margin-bottom: 8px;
		}
		&-status.done {
			color: hsl(var(--green));
		}
		&-bar {
			position: relative;
			width: 100%;
			height: 12px;
			border-radius: 10px;
			background: var(--background-primary);
			overflow: hidden;
			&::before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: var(--bar-width);
				border-radius: inherit;
				background: hsl(var(--accent));
				transition: 0.1s ease width;
				max-width: 100%;
			}
		}
	}
	.divider {
		margin: 16px 0;
		border: none;
		height: 1px;
		background: var(--border-alt);
	}
</style>
