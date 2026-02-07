<script lang="ts">
	import { RadioGroup, RadioGroupItem } from 'lithesome';

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

	let { value = $bindable(), items, onChange }: Props = $props();
</script>

<RadioGroup bind:value class="flex gap-4" onValueChanged={onChange}>
	{#each items as { id, title }}
		<RadioGroupItem
			value={id}
			class={({ selected }) => [
				'relative flex flex-1 cursor-pointer rounded-md border py-12 text-center',
				'flex gap-4 select-none',
				selected
					? 'border-turquoise-500 bg-turquoise-500/15 text-turquoise-400'
					: 'border-zinc-700 hover:border-zinc-600'
			]}
		>
			<div class="m-auto">
				<p class="font-manrope font-semibold">{title}</p>
			</div>
		</RadioGroupItem>
	{/each}
</RadioGroup>
