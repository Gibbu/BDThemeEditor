<script lang="ts">
	interface Props {
		value: number;
	}

	let { value = $bindable(0) }: Props = $props();
</script>

<div class="h-8 overflow-hidden rounded-lg bg-zinc-700">
	<div class="bg-turquoise-500 h-8"></div>
</div>
