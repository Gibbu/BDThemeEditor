<script lang="ts">
	interface Props {
		value: string;
		placeholder?: string;
		error?: string;
		variant?: 'high' | 'low';
		[key: string]: any;
	}

	let { value = $bindable(), placeholder, error, variant = 'high', ...props }: Props = $props();
</script>

<input
	type="text"
	bind:value
	{placeholder}
	class={[
		'w-full rounded-md border px-3 py-2 text-sm font-medium',
		'focus:border-turquoise-500 focus:outline-turquoise-500/40 focus:outline-2 focus:outline-offset-1',
		{
			high: 'border-zinc-600 bg-zinc-700',
			low: 'border-zinc-800 bg-zinc-900'
		}[variant]
	]}
	{...props}
/>
