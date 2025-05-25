<script>
	import { UploadIcon } from 'lucide-svelte';
	import { Button } from '../common';
	import { STATE } from '$lib/editor.svelte';
</script>

<Button variant="secondary" class="w-full" size="lg" onclick={() => STATE.fireUploadedEvent()}>
	<UploadIcon class="size-6" /> Upload
</Button>
