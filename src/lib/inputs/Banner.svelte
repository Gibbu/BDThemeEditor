<script lang="ts">
	import type { Banner } from '$types/inputs';

	let { ...props }: Banner['props'] = $props();
</script>

<p {...props}>Banner</p>
