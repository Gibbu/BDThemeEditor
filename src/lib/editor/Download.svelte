<script lang="ts">
	import { DownloadIcon } from 'lucide-svelte';
	import { Button, Modal } from '../common';

	let modalVisible = $state<boolean>(false);
</script>

<Button variant="primary" class="w-full" size="lg" onclick={() => (modalVisible = !modalVisible)}>
	<DownloadIcon class="size-6" /> Download
</Button>

<Modal title="Download" description="Hi there">Hi there dude bro</Modal>
