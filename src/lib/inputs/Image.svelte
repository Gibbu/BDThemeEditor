<script lang="ts">
	import { Tabs, FileUpload } from 'melt/builders';
	import {
		CheckIcon,
		HardDriveIcon,
		LinkIcon,
		OctagonXIcon,
		SquaresIntersectIcon,
		UploadCloudIcon
	} from 'lucide-svelte';
	import { Button, Textbox, Modal, RadioGroup, Progress } from '$lib/common';
	import { STATE } from '$lib/editor.svelte';
	import { cn } from '$lib/utils.svelte';
	import { ApiRequest } from '$lib/ApiRequest.svelte';

	import type { ImageInputProps } from '$types/inputs';

	let { value, starting, variable, addon, comment, varGroup }: ImageInputProps = $props();

	let previewImage = $state<string | null>(null);
	let previewName = $state<string | null>(null);

	let modalVisible = $state<boolean>(false);
	let internetValue = $state<string>('');
	let error = $state<string | null>(null);
	const allowedExtensions = ['jpg', 'jpeg', 'gif', 'png', 'apng', 'avif'];

	const API = new ApiRequest();
	const Submittable = $derived(!!internetValue || !!API.file);

	const tabs = new Tabs<'internet' | 'transparent' | 'local'>({
		value: 'internet',
		onValueChange(tab) {
			update(tab === 'transparent' ? '' : internetValue || value || starting);
		}
	});
	const tabButtons = [
		{ id: 'internet', label: 'Internet link', Icon: LinkIcon },
		{ id: 'local', label: 'Local image', Icon: HardDriveIcon },
		{ id: 'transparent', label: 'Transparent', Icon: SquaresIntersectIcon }
	] as const;

	const fileUpload = new FileUpload({
		accept: 'image/*',
		onSelectedChange(file) {
			if (file) {
				const reader = new FileReader();
				API.file = file;

				console.log(API.file);

				reader.readAsDataURL(file);
				reader.addEventListener('load', () => {
					const image = new Image();

					const { result } = reader;
					if (!result) return;

					image.src = result.toString();
					image.addEventListener('load', () => {
						previewImage = result.toString();
						previewName = file.name;
					});
				});
			}
		}
	});

	const radioGroupItems = [
		{
			id: 'base64',
			title: 'Inline encoding (base64)',
			description:
				'Base64 will encode your image directly into your theme file. This will increase the lag to your Discord client, but will mean your image is private.'
		},
		{
			id: 'imgbb',
			title: 'Imgbb',
			terms: 'https://imgbb.com/tos'
		},
		{
			id: 'imghippo',
			title: 'ImgHippo',
			terms: 'https://www.imghippo.com/terms-and-conditions'
		},
		{
			id: 'imgur',
			title: 'Imgur',
			terms: 'https://imgur.com/tos'
		}
	];
	const SelectedItem = $derived(radioGroupItems.find((el) => el.id === API.website));

	const webLink = () => {
		error = null;
		try {
			const extension = new URL(internetValue).pathname.split('.').pop();
			if (!extension || (!allowedExtensions.includes(extension) && internetValue.length > 0))
				throw new TypeError('must be a direct link (ending in: jpg, jpeg, png, ect...)');

			update(internetValue);
		} catch (err) {
			if (err instanceof TypeError) {
				error = err.message;
			}
		}
	};

	const submit = () => {
		if (API.website === 'base64') {
			// turn to b64 and apply...
		} else {
			API.send((result) => {
				update(result);
				modalVisible = false;
			});
		}
	};

	const update = (newVal: string) => {
		STATE.updateVariable({ variable, value: newVal, comment, varGroup }, addon);
	};
</script>

<div class="flex flex-col overflow-hidden rounded-lg bg-zinc-800">
	<div class="flex gap-3 p-3 pb-0" {...tabs.triggerList}>
		{#each tabButtons as { id, label, Icon }}
			<button
				type="button"
				class={[
					'flex flex-1 cursor-pointer flex-col items-center justify-center rounded-md py-4',
					'focusOutline focus:outline-none',
					'hover:bg-zinc-700/20',
					'data-active:bg-zinc-700/50',
					'focus:outline-none'
				]}
				{...tabs.getTrigger(id)}
			>
				<Icon class={cn('size-6', tabs.value === id && 'text-white')} />
				<span
					class={[
						'mt-2 text-xs font-medium tracking-wide',
						tabs.value === id ? 'text-white' : 'text-zinc-400'
					]}>{label}</span
				>
			</button>
		{/each}
	</div>

	<div class="p-3" {...tabs.getContent('internet')}>
		<span class="mb-1 flex text-sm">Your image link</span>
		<Textbox
			bind:value={internetValue}
			variant="low"
			placeholder="https://example.com/my_cool_image.png"
			oninput={webLink}
		/>
		{#if error}
			<p class="text-sm text-red-400">{error}</p>
		{/if}
	</div>

	<div class="p-3" {...tabs.getContent('local')}>
		<Button variant="secondary" class="w-full" onclick={() => (modalVisible = !modalVisible)}>
			Select an image...
		</Button>
	</div>

	<div class="p-3 text-sm" {...tabs.getContent('transparent')}>
		<p>To achieve a see through Discord client you must enable a transparency option.</p>
		<ul class="mt-2 list-disc pl-4">
			<li>BetterDiscord: "Enable Transparency"</li>
			<li>Vencord: "Enable window transparency"</li>
		</ul>
	</div>
</div>

<Modal
	bind:visible={modalVisible}
	title="Image upload"
	description="Choose a local image"
	class="w-[750px]"
>
	{#if API.uploading}
		<div
			class="absolute top-1/2 left-1/2 z-10 size-24 -translate-1/2 animate-spin rounded-full border-4 border-white border-l-transparent"
		></div>
	{/if}
	<div class={['flex flex-col gap-6', API.uploading && 'pointer-events-none opacity-50']}>
		<RadioGroup
			label="First, where do we upload?"
			name="uploadlocation"
			value={API.website}
			onChange={(value) => {
				API.website = value;
			}}
			items={radioGroupItems}
		/>
		<p class="-mt-4 text-xs opacity-75">
			{#if SelectedItem?.terms}
				Uploading to a third-party image hosting service (such as {SelectedItem.title}) will result
				in your image being public and subject to their
				<a href={SelectedItem.terms} target="_blank" rel="noopener noreffer" class="anchor"
					>Terms of Service</a
				>
			{/if}
			{#if SelectedItem?.description}
				{SelectedItem.description}
			{/if}
		</p>

		<div>
			<p class="mb-1">Now, select your image</p>
			<div
				class={[
					'cursor-pointer rounded-lg border-3 border-dashed border-zinc-700 py-8 text-center text-zinc-500',
					'flex flex-col items-center justify-center',
					'hover:border-zinc-600 hover:text-zinc-300',
					API.file ? 'py-4' : 'py-16'
				]}
				{...fileUpload.dropzone}
			>
				{#if previewImage}
					<img src={previewImage} alt="Local preview" class="max-h-80 max-w-[95%] rounded-md" />
					<span class="mt-2 block truncate text-sm">{previewName}</span>
				{:else if fileUpload.isDragging}
					Drop files here
				{:else}
					Click to upload or drag and drop
				{/if}
			</div>
			<input {...fileUpload.input} />
		</div>
	</div>
	{#snippet footer()}
		<div class="flex w-full flex-col gap-4">
			{#if API.error}
				<div class="flex gap-4 rounded-md border border-red-500 bg-red-500/10 p-4 text-red-400">
					<OctagonXIcon class="size-8" />
					<div>
						<h3 class="font-manrope font-semibold">An error has occured:</h3>
						<p class="mt-1 text-sm">{API.error}</p>

						<span class="mt-4 block text-xs opacity-50">
							Check the developer console of your browser for more information.
						</span>
					</div>
				</div>
			{/if}
			{#if Submittable && !API.uploading}
				<Button variant="primary" size="lg" onclick={submit} class="w-full">
					{API.website === 'base64' ? 'Apply' : `Upload to ${API.website}`}
					{#if API.website === 'base64'}
						<CheckIcon class="size-6" />
					{:else}
						<UploadCloudIcon class="size-6" />
					{/if}
				</Button>
			{:else if API.uploading}
				<div>
					<div class="mb-2 flex items-center justify-between">
						<p>Uploading...</p>
						<p>{API.progress.toFixed()}%</p>
					</div>
					<Progress value={API.progress} />
				</div>
			{/if}
		</div>
	{/snippet}
</Modal>
