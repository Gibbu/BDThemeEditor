<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let message: string;
	export let thumbnail: string | undefined = undefined;
	export let thumbnailName: string | undefined = undefined;
	export let error: string | undefined = undefined;

	export let files: FileList;
	export let allowed: string[] = [];

	const dispatch = createEventDispatcher();
	let dragover: boolean = false;

	const droppedFile = ({ dataTransfer }: DragEvent) => {
		if (!dataTransfer) {
			error = 'There was an error while trying to read that file.';
			return;
		}
		dragover = false;
		files = dataTransfer.files;

		prepareFile(dataTransfer.files[0]);
	};

	const selectedFile = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		const { currentTarget } = e;

		if (currentTarget.files && currentTarget.files.length > 1) {
			error = 'You cannot import more than 1 file at a time.';
			return;
		}

		prepareFile(currentTarget.files![0]);
	};

	const prepareFile = (file: File) => {
		error = undefined;

		if (!allowed.includes(file.type.split('/')[1])) {
			error = 'That file type is not supported. Try again.';
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.addEventListener('load', () => {
			let image = new Image();
			const { result } = reader;

			if (!result) {
				error = 'There was an error while trying to read that file.';
				return;
			}
			dispatch('change', file);

			image.src = result.toString();
			image.addEventListener('load', () => {
				thumbnail = result.toString();
				thumbnailName = file.name;
			});
		});
	};
</script>

<template>
	<label
		class="dropzone"
		class:dragover
		class:error
		on:dragover|preventDefault={() => (dragover = true)}
		on:dragleave={() => (dragover = false)}
		on:dragend={() => (dragover = false)}
		on:drop|preventDefault={droppedFile}
	>
		{#if thumbnail && !error}
			<div class="content">
				<img src={thumbnail} alt="File thumbnail" class="thumbnail" />
				<span class="name" class:error>
					{thumbnailName}
				</span>
			</div>
		{:else}
			<span class="message" class:error>
				{@html error || message}
			</span>
		{/if}

		<input type="file" bind:files hidden on:change={selectedFile} />
	</label>
</template>

<style lang="scss">
	.dropzone {
		padding: 32px 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		text-align: center;
		border-radius: var(--radius);
		border: 2px dashed var(--border-alt);
		&:hover {
			background: var(--button-ghost-hover);
		}
		&.dragover {
			border-color: hsl(var(--accent));
		}
		&.error {
			border-color: hsl(var(--red));
		}
	}
	.content {
		position: relative;
		overflow: hidden;
		border-radius: var(--radius-lg);
	}
	.thumbnail {
		object-fit: cover;
		aspect-ratio: 16 / 9;
		max-height: 256px;
	}
	.name {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 8px;
		background: hsl(0 0% 0% / 0.6);
		color: #fff;
		&.error {
			color: hsl(var(--red));
		}
	}
	.message {
		font-size: 14px;
		user-select: none;
		pointer-events: none;
		&:not(.error) {
			opacity: 0.5;
		}
		&.error {
			color: hsl(var(--red));
		}
	}
</style>
