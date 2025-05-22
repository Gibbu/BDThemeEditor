<script lang="ts">
	import type { ColourInputProps } from '$types/inputs';

	let { ...props }: ColourInputProps = $props();
</script>

<p {...props}>Colour</p>
