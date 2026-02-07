<script>
	import { UploadIcon } from '@lucide/svelte';
	import { STATE } from '$lib/editor.svelte';
	import { Button } from '../common';
</script>

<Button variant="secondary" class="w-full" size="lg" onclick={() => STATE.fireUploadedEvent()}>
	<UploadIcon class="size-6" /> Upload
</Button>
