<script>
	import {browser} from '$app/env';
	import {fade, scale} from 'svelte/transition';
	import portal from '$lib/portal';

	/**
	 * Visibility of the modal.  
	 * Use `bind:visible`.
	 */
	export let visible: boolean = false;

	/** Set the max width of the modal. */
	export let maxWidth: number = 460;

	/** 
	 * Allow the user to click the backdrop to close the modal.  
	 * Default = `true`
	 */
	export let clickOutside: boolean = true;

	$: if (visible) document.body.classList.add('modal-active');
	$: if (browser && !visible) document.body.classList.remove('modal-active');

	const close = () => {
		if (clickOutside) visible = false;
	}
</script>

{#if visible}
	<div class="modal-container" use:portal={"#portal"}>
		<div class="backdrop" transition:fade={{duration: 200}} on:click={close}></div>
		<div class="modal" transition:scale={{duration: 200, start: .95}} style="max-width: {maxWidth}px;">
			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-container {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding-top: 5vh;
		z-index: 10;
	}
	
	.backdrop {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgb(0 0 0 / .8);
	}

	.modal {
		position: relative;
		z-index: 1;
		width: 100%;
		border-radius: rem(4);
		border: rem(1) solid var(--border);
		background: var(--bg);
	}
</style>