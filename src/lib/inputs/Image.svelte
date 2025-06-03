<script lang="ts">
	import { Tabs, FileUpload, RadioGroup } from 'melt/builders';
	import { HardDriveIcon, InfoIcon, LinkIcon, SquaresIntersectIcon } from 'lucide-svelte';
	import { Button, Textbox, Modal, Tooltip } from '$lib/common';
	import { STATE } from '$lib/editor.svelte';

	import type { ImageInputProps } from '$types/inputs';

	let { value, starting, variable, addon, comment, varGroup }: ImageInputProps = $props();

	let internetValue = $state<string>('');
	let localValue = $state<File | null>(null);
	let error = $state<string | null>(null);
	const allowedExtensions = ['jpg', 'jpeg', 'gif', 'png', 'apng', 'avif'];

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
			if (file) localValue = file;
		}
	});

	let radioGroupValue = $state<(typeof radioGroupItems)[number]['id']>('base64');
	const radioGroup = new RadioGroup({
		name: 'uploadLocation',
		value: 'base64',
		onValueChange(val) {
			radioGroupValue = val as (typeof radioGroupItems)[number]['id'];
		}
	});
	const radioGroupItems = [
		{
			id: 'base64',
			label: 'Base64',
			info: 'Base64 encoding will increase the lag to your Discord client, but will mean your image is private.',
			terms: undefined
		},
		{
			id: 'imgur',
			label: 'Imgur',
			info: 'This will upload your image to Imgur.com',
			terms: 'https://imgur.com/tos'
		},
		{
			id: 'imgbb',
			label: 'Imgbb',
			info: 'This will upload your image to Imgbb.com',
			terms: 'https://imgbb.com/tos'
		},
		{
			id: 'freeimage',
			label: 'Freeimage',
			info: 'This will upload your image to FreeImage.host',
			terms: 'https://freeimage.host/page/tos'
		}
	] as const;
	const termsLink = $derived(radioGroupItems.find((el) => el.id === radioGroupValue));

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

	const update = (newVal: string) => {
		STATE.updateVariable({ variable, value: newVal, comment, varGroup }, addon);
	};

	//
	// !!!!!!!!!!!IMPORTANT!!!!!!!!!!!
	//
	// Gotta make sure to supply a link the the image providers TOS
	// and alart the user that their image is subject to their terms.
	//
	// !!!!!!!!!!!IMPORTANT!!!!!!!!!!!
	//
</script>

<div class="flex flex-col overflow-hidden rounded-lg bg-zinc-800">
	<div class="flex" {...tabs.triggerList}>
		{#each tabButtons as { id, label, Icon }}
			<button
				type="button"
				class={[
					'flex flex-1 cursor-pointer flex-col items-center justify-center py-4',
					'focusOutline focus:outline-none',
					'hover:bg-zinc-700/20',
					'data-active:bg-zinc-700/50',
					'focus:outline-none'
				]}
				{...tabs.getTrigger(id)}
			>
				<Icon class="size-6" />
				<span class="mt-2 text-xs font-medium tracking-wide text-zinc-400">{label}</span>
			</button>
		{/each}
	</div>

	<div class="p-4" {...tabs.getContent('internet')}>
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

	<div class="p-4" {...tabs.getContent('local')}>
		<Modal title="Image upload" description="Choose a local image" class="w-[650px]">
			{#snippet trigger(props)}
				<Button variant="secondary" class="w-full" {...props}>Browse local files...</Button>
			{/snippet}

			<div class="flex flex-col gap-6">
				<div>
					<label class="mb-1 inline-block" {...radioGroup.label}>First, where do we upload?</label>
					<div class="flex flex-col gap-2" {...radioGroup.root}>
						{#each radioGroupItems as { id, info, label }}
							{@const item = radioGroup.getItem(id)}
							<div
								class={[
									'relative flex-1 cursor-pointer rounded-md border p-4',
									'flex gap-4',
									item.checked
										? 'border-turquoise-500 bg-turquoise-500/15 text-turquoise-400'
										: 'border-zinc-700'
								]}
								{...item.attrs}
							>
								<div
									class={[
										'flex size-6 rounded-full border',
										item.checked ? 'border-white' : 'border-zinc-600'
									]}
								>
									{#if item.checked}
										<div class="bg-turquoise-500 m-auto size-3 rounded-full"></div>
									{/if}
								</div>
								<div>
									<p class="font-manrope font-semibold">{label}</p>
									<small class="mt-1 block text-xs opacity-75">{info}</small>
								</div>
							</div>
						{/each}
						<input {...radioGroup.hiddenInput} />
					</div>
				</div>

				{#if termsLink?.terms}
					<p class="text-xs opacity-75">
						Note: Uploading to a third-party image hosting service (such as {termsLink.label}) will
						result in your image being public and subject to their
						<a href={termsLink.terms} target="_blank" rel="noopener noreffer" class="anchor"
							>Terms of Service</a
						>
					</p>
				{/if}

				<div>
					<p class="mb-1">Now, select your image</p>
					<div
						class={[
							'cursor-pointer rounded-lg border-3 border-dashed border-zinc-700 py-8 text-center text-zinc-500',
							'hover:border-zinc-600 hover:text-zinc-300'
						]}
						{...fileUpload.dropzone}
					>
						{#if fileUpload.isDragging}
							Drop files here
						{:else}
							Click to upload or drag and drop
						{/if}
					</div>
				</div>
				<input {...fileUpload.input} />
			</div>
		</Modal>
	</div>

	<div class="p-4 text-sm" {...tabs.getContent('transparent')}>
		<p>To achieve a see through Discord client you must enable a transparecy option.</p>
		<ul class="mt-2 list-disc pl-4">
			<li>BetterDiscord: "Enable Transparency"</li>
			<li>Vencord: "Enable window transparency"</li>
		</ul>
	</div>
</div>
