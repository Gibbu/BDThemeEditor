<script>
	import {writable} from 'svelte/store';
	import {setContext} from 'svelte';

	let visible = writable(false);
	let menuBtn = writable<HTMLElement|null>(null);

	setContext('visible', visible);
	setContext('menuBtn', menuBtn);
</script>

<div
	class="menu"
	class:active={$visible}
	{...$$restProps}
>
	<slot />
</div>

<style lang="scss">
	.menu {
		position: relative;
	}
</style>