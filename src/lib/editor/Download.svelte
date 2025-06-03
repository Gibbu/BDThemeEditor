<script>
	import { DownloadIcon } from 'lucide-svelte';
	import { Button, Modal } from '../common';
</script>

<Modal title="Download" description="Hi there">
	{#snippet trigger(props)}
		<Button variant="primary" class="w-full" size="lg" {...props}>
			<DownloadIcon class="size-6" /> Download
		</Button>
	{/snippet}

	Hi there dude bro
</Modal>
