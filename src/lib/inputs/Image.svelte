<script lang="ts">
	import {
		CheckIcon,
		HardDriveIcon,
		LinkIcon,
		OctagonXIcon,
		SquaresIntersectIcon,
		UploadCloudIcon
	} from '@lucide/svelte';
	import { Dropzone, DropzoneInput, Tabs, TabsButton, TabsContent, TabsList } from 'lithesome';
	import { Button, Modal, Progress, RadioGroup, Textbox } from '$lib/common';
	import { STATE } from '$lib/editor.svelte';
	import { ImageAPI } from '$lib/ImageAPI.svelte';
	import { cn } from '$lib/utils.svelte';

	import type { ImageInputProps } from '$types/inputs';

	let { value = $bindable(), starting, variable, addon }: ImageInputProps = $props();

	let previewImage = $state<string | null>(null);
	let previewName = $state<string | null>(null);

	let modalVisible = $state<boolean>(false);
	let internetValue = $state<string>('');
	let error = $state<string | null>(null);
	const allowedExtensions = ['jpg', 'jpeg', 'gif', 'png', 'apng', 'avif', 'webp'];

	const API = new ImageAPI();

	const tabButtons = [
		{ id: 'internet', label: 'Internet link', Icon: LinkIcon },
		{ id: 'local', label: 'Local image', Icon: HardDriveIcon },
		{ id: 'transparent', label: 'Transparent', Icon: SquaresIntersectIcon }
	] as const;

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
		if (!API.file) return;

		if (API.website === 'base64') {
			const reader = new FileReader();

			reader.readAsDataURL(API.file);
			reader.addEventListener('load', () => {
				if (reader.result) update(reader.result.toString());
				modalVisible = false;
			});
		} else {
			API.send((result) => {
				update(result);
				modalVisible = false;
			});
		}
	};

	const update = (newVal: string) => {
		STATE.updateVariable({ variable, value: newVal }, addon);
	};
</script>

<Tabs class="flex flex-col overflow-hidden rounded-lg bg-zinc-800">
	<TabsList class="flex gap-2 p-4">
		{#each tabButtons as { id, label, Icon }}
			<TabsButton
				value={id}
				class={({ active }) => [
					'flex flex-1 cursor-pointer flex-col items-center justify-center rounded-md py-4',
					'focusOutline focus:outline-none',
					active ? 'bg-zinc-700/50' : 'hover:bg-zinc-700/20'
				]}
			>
				{#snippet children({ active })}
					<Icon class={cn('size-6', active && 'text-white')} />
					<span
						class={[
							'mt-2 text-xs font-medium tracking-wide',
							active ? 'text-white' : 'text-zinc-400'
						]}>{label}</span
					>
				{/snippet}
			</TabsButton>
		{/each}
	</TabsList>

	<div class="p-4 pt-0">
		<TabsContent value="internet">
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
		</TabsContent>
		<TabsContent value="local">
			<Modal title="Image upload" description="Choose a local image" class="w-185">
				{#snippet trigger(props)}
					<Button variant="secondary" class="w-full" {...props}>Select an image...</Button>
				{/snippet}

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
							API.error = null;
						}}
						items={radioGroupItems}
					/>
					{#if SelectedItem?.terms}
						<p class="-mt-4 text-xs opacity-75">
							Uploading to a third-party image hosting service (such as {SelectedItem.title}) will
							result in your image being public and subject to their
							<a href={SelectedItem.terms} target="_blank" rel="noopener noreffer" class="anchor"
								>Terms of Service</a
							>
						</p>
					{/if}
					{#if SelectedItem?.description}
						<p class="-mt-4 text-xs opacity-75">
							{SelectedItem.description}
						</p>
					{/if}

					<div>
						<p class="mb-1">Now, select your image</p>
						<Dropzone
							class={[
								'cursor-pointer rounded-lg border-3 border-dashed border-zinc-700 py-8 text-center text-zinc-500',
								'flex flex-col items-center justify-center',
								'hover:border-zinc-600 hover:text-zinc-300',
								API.file ? 'py-4' : 'py-16'
							]}
						>
							{#snippet children({ dragging })}
								<DropzoneInput />
								{#if previewImage}
									<img
										src={previewImage}
										alt="Local preview"
										class="max-h-80 max-w-[95%] rounded-md"
									/>
									<span class="mt-2 block truncate text-sm">{previewName}</span>
								{:else if dragging}
									Drop files here
								{:else}
									Click to upload or drag and drop
								{/if}
							{/snippet}
						</Dropzone>
					</div>
				</div>
				{#snippet footer()}
					<div class="flex w-full flex-col gap-4">
						{#if API.error}
							<div
								class="flex gap-4 rounded-md border border-red-500 bg-red-500/10 p-4 text-red-400"
							>
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
						{#if !!API.file && !API.uploading}
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
		</TabsContent>
		<TabsContent value="transparent">
			<p>To achieve a see through Discord client you must enable a transparency option.</p>
			<ul class="mt-2 list-disc pl-4">
				<li>BetterDiscord: "Enable Transparency"</li>
				<li>Vencord: "Enable window transparency"</li>
			</ul>
		</TabsContent>
	</div>
</Tabs>
