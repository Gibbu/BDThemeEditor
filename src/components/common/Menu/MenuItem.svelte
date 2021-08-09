<script>
	// @ts-nocheck
	import {getContext, createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	let visible = getContext('visible');

	/** Indicates the button is dangerous and is red in colour. */
  export let danger: boolean = false;

	/** Location to navigate to. An anchor tag will be used instead of a button. */
  export let href: string = '';

	/** Open the location in a new tab. */
  export let newTab: boolean = false;

	/**
	 * Disable the button. Turning it opaque and disabling the click event.  
	 * Click event will not fire even if styling is removed.
	 */
	export let disabled: any = undefined;

	/** Hide the dropdown when clicked. Defaulted to true. */
	export let hideOnClick: boolean = true;

	const close = () => {
		if (!disabled) dispatch('click');
		if (hideOnClick) $visible = false;
	}
</script>

{#if href}
  <a
    {href}
		target={newTab ? '_blank' : null}
    class="menu-item"
    class:danger
		role="menuitem"
		tabindex="0"
		on:click={close}
  >
    <slot />
  </a>
{:else}
  <button
    type="button"
    class="menu-item"
    class:danger
		role="menuitem"
		tabindex="0"
		on:click={close}
  >
    <slot />
  </button>
{/if}

<style lang="scss">
	.menu-item {
		padding: rem(8) rem(10);
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		&:not(:last-child) {
			margin-bottom: rem(4);
		}
		&:hover, &:focus {
			background: hsl(var(--accent));
			color: #000;
		}
		&.danger {
			color: hsl(var(--red));
			&:hover, &:focus {
				background: hsl(var(--red));
				color: #000;
			}
		}
		&:focus {
			box-shadow: inset 0 0 0 100vmax hsl(0 0% 0% / .2);
		}
	}

	:global(.menu-item > svg) {
		width: rem(18);
	}
</style>