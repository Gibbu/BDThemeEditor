<script lang="ts">
	import type { ImageInputProps } from '$types/inputs';

	let { ...props }: ImageInputProps = $props();
</script>

<p {...props}>Image</p>
