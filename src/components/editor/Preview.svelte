<script>
	import {onMount} from 'svelte';
	import {loaded, preview} from '$lib/stores';

	export let url: string;

	let iframe: HTMLIFrameElement;

	const onLoad = () => {
		let getIframe = iframe.contentDocument.body.parentElement;

		$preview = getIframe;
		getIframe.querySelector('#import').textContent = `@import url("${url}")`;

		$loaded = true;
	}
	onMount(() => $loaded = false);
</script>

<div class="preview">
	<iframe
		bind:this={iframe}
		on:load={onLoad}
		src="/preview/index.html?id={new Date().getTime()}"
		title="preview"
		frameborder="0"
		class="w-full m-4"
	/>
</div>

<style lang="scss">
	.preview {
		width: 100%;
		height: 100%;
		padding: rem(16);
		iframe {
			width: 100%;
			height: 100%;
		}
	}
</style>