<script lang="ts">
	import axios from 'axios';
	import { createEventDispatcher } from 'svelte';
	import { tooltip } from 'svooltip';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowUpTray, Check, QuestionMarkCircle } from '@steeze-ui/heroicons';

	const dispatch = createEventDispatcher();

	// Components
	import { Modal, Button, RadioGroup, RadioGroupItem, Select, Input } from '$components/common';

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
	let dragover: boolean = false;

	let thumbnail: string;
	let thumbnailName: string;

	const allowed = ['jpg', 'jpeg', 'gif', 'png', 'apng'];

	/**
	 * Checks if the url is a direct link.
	 * True = update variable with new value.
	 * False = Show warning.
	 */
	const web = (): void => {
		error = '';

		const extension = new URL(value).pathname.split('.')[1];
		if (!allowed.includes(extension) && value.length > 0) {
			error = 'URL must be a direct link (ending in: jpg, jpeg, png, ect...';
			return;
		} else if (value.length > 0) {
			updatePreview(value);
		}
	};

	// User drops a file
	const droppedFile = (e: DragEvent): void => {
		prepareFile(e.dataTransfer!.files);
	};
	// User selects a file
	const selectedFile = (e: any): void => {
		prepareFile(e.target.files);
	};

	/**
	 * Checks for:
	 * - There is only 1 file.
	 * - If the file is a image.
	 *
	 * Then places the current image inside the dragzone and displays a "upload"
	 * button if a web host is chosen.
	 */
	const prepareFile = (_files: FileList): void => {
		error = '';

		const file = _files[0];

		if (!allowed.includes(file.type.split('/')[1])) {
			error = 'That file type is not supported. Try again.';
		} else {
			files = _files;

			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.addEventListener('load', () => {
				let img = new Image();
				img.src = reader.result!.toString();

				img.addEventListener('load', () => {
					thumbnail = reader.result!.toString();
					thumbnailName = file.name;
				});
			});
		}
	};

	/**
	 * Either upload the file to the desired web host or base64 the image.
	 */
	const localFile = async (): Promise<void> => {
		const file: File = files[0];

		if (uploadType === 'imgur') {
			error = '';
			fileUploading = true;

			const formData = new FormData();
			formData.append('image', file);

			const req: any = await axios.post('https://api.imgur.com/3/image', formData, {
				headers: {
					Authorization: 'Client-ID 52c59e859f41ce2'
				},
				onUploadProgress(e) {
					fileUploadProgress = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
				}
			});

			let { link } = req.data.data;

			value = link;

			fileUploading = false;
			fileUploadModal = false;
			fileUploadProgress = 0;

			updatePreview(link);
		} else if (uploadType === 'b64') {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.addEventListener('load', () => {
				error = '';
				updatePreview(reader.result);
			});
			fileUploadModal = false;
		}
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
			<Input placeholder="Image URL" {error} bind:value on:keyup={web} />
			{#if error}
				<small class="error">{error}</small>
			{/if}
		{:else if selectedOption === 'file'}
			<Button variant="primary" on:click={() => (fileUploadModal = true)}>Browse</Button>
		{/if}
	</div>
</template>

<Modal bind:visible={fileUploadModal} title="How should we upload?">
	<RadioGroup value={uploadType} on:change={({ detail }) => (uploadType = detail)}>
		<RadioGroupItem
			value="imgur"
			label="Imgur.com"
			description="Uploading to Imgur will reduce the amount of lag on your client. But will leave you image open for anyone to see."
		/>
		<RadioGroupItem
			value="b64"
			label="Inline encode (base64)"
			description="Inline encoding will increase the amount of lag on your client. But means your image is private."
		/>
	</RadioGroup>
	<label
		class="dropzone"
		class:dragover
		class:error
		disabled={fileUploading}
		on:dragover|preventDefault={() => (dragover = true)}
		on:dragleave={() => (dragover = false)}
		on:dragend={() => (dragover = false)}
		on:drop|preventDefault={droppedFile}
	>
		{#if thumbnail && !error}
			<div class="r16-9 dropzone-preview">
				<div class="dropzone-thumb r16-9-item" style="background-image: url('{thumbnail}');" />
				<div class="dropzone-filename">{thumbnailName}</div>
			</div>
		{:else}
			<span class="dropzone-promt">{error || 'Drop image file here or click to upload'}</span>
		{/if}
		<input type="file" hidden bind:files on:change={selectedFile} />
	</label>
	{#if !error && thumbnail}
		<div class="uploadArea">
			{#if !fileUploading}
				<Button variant="primary" size="large" on:click={localFile}>
					{#if uploadType === 'b64'}
						<Icon src={Check} />
					{:else}
						<Icon src={ArrowUpTray} />
					{/if}
					{uploadType === 'b64' ? 'Apply' : 'Upload'}
				</Button>
			{:else}
				<div class="progress">
					<div class="progress-text">
						<p class="progress-status">{fileUploadProgress != 100 ? 'Uploading...' : 'Upload complete'}</p>
						<p class="progress-percentage">{fileUploadProgress.toFixed(2)}%</p>
					</div>
					<div class="progress-bar">
						<div class="progress-bar-inner" style="width: {fileUploadProgress.toFixed(2)}%" />
					</div>
				</div>
			{/if}
		</div>
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

	.dropzone {
		$self: &;

		padding: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: 2px dashed var(--border);
		margin-top: 16px;
		cursor: pointer;
		border-radius: 4px;
		transition: 0.15s ease border-color;

		&-promt {
			font-size: 14px;
			transition: 0.15s ease color;
			color: var(--text-tertiary);
			user-select: none;
			pointer-events: none;
		}
		&-preview {
			overflow: hidden;
			border-radius: 4px;
		}
		&-thumb {
			background-size: cover;
			background-position: center;
		}
		&-filename {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 8px;
			font-size: 14px;
			background: hsl(0 0% 0% / 0.8);
			color: #fff;
			text-shadow: 0 2px 4px hsl(0 0% 0%);
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
		&[disabled='true'] {
			pointer-events: none;
			user-select: none;
		}
	}
	.explain {
		width: 16px;
		height: 16px;
		margin-left: 8px;
	}
	.uploadArea {
		margin-top: 16px;
	}
	.progress {
		position: relative;
		margin-top: 32px;
		&-text {
			position: absolute;
			top: calc(-100% - #{8px});
			width: 100%;
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			color: var(--text-tertiary);
		}
		&-bar {
			height: 10px;
			border-radius: 50px;
			background: var(--background-primary);
			overflow: hidden;
			&-inner {
				height: 100%;
				border-radius: inherit;
				background: hsl(var(--accent));
				transition: 0.15s ease width;
			}
		}
	}
	.error {
		color: hsl(var(--red));
		display: block;
	}
</style>
