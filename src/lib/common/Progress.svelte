<script lang="ts">
	import { Progress } from 'melt/builders';

	interface Props {
		value: number;
	}

	let { value = $bindable(0) }: Props = $props();

	const progress = new Progress({
		value: () => value
	});
</script>

<div class="h-8 overflow-hidden rounded-lg bg-zinc-700" {...progress.root}>
	<div class="bg-turquoise-500 h-8" {...progress.progress}></div>
</div>

<style>
	[data-melt-progress-progress] {
		transform: translateX(calc(var(--progress) * -1));
	}
</style>
