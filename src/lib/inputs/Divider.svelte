<script lang="ts">
	import type { Divider } from '$types/inputs';

	let { ...props }: Divider['props'] = $props();
</script>

<p {...props}>Divider</p>
