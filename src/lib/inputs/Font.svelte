<script lang="ts">
	import type { FontInputProps } from '$types/inputs';

	let { ...props }: FontInputProps = $props();
</script>

<p {...props}>Font</p>
