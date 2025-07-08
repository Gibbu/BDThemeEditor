<script lang="ts">
	import { RadioGroup } from 'melt/builders';

	interface Props {
		value: string;
		name: string;
		label: string;
		items: {
			id: string;
			title: string;
		}[];
		onChange?: (value: string) => void;
	}

	let { value, name, items, label, onChange }: Props = $props();

	const radioGroup = new RadioGroup({
		name,
		value,
		onValueChange: onChange
	});
</script>

<div>
	<label class="mb-1 inline-block" {...radioGroup.label}>{label}</label>
	<div class="flex gap-4" {...radioGroup.root}>
		{#each items as { id, title }}
			{@const item = radioGroup.getItem(id)}
			<div
				class={[
					'relative flex flex-1 cursor-pointer rounded-md border py-12 text-center',
					'flex gap-4 select-none',
					item.checked
						? 'border-turquoise-500 bg-turquoise-500/15 text-turquoise-400'
						: 'border-zinc-700 hover:border-zinc-600'
				]}
				{...item.attrs}
			>
				<div class="m-auto">
					<p class="font-manrope font-semibold">{title}</p>
				</div>
			</div>
		{/each}
		<input {...radioGroup.hiddenInput} />
	</div>
</div>
