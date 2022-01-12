<script lang="ts">
	import {fly} from 'svelte/transition';
	import {CheckCircle, Warning, ErrorCircle} from '$components/common/Icon';

	export let type: 'success' | 'warning' | 'error';
	export let message: string;

	let visible: boolean = true;

	setTimeout(() => visible = false, 5000);
</script>

<template>
	{#if visible}
		<div class="flash {type}" in:fly={{y: 10, duration: 200}} out:fly={{y: -10, duration: 200}}>
			<div class="flash-icon">
				<svelte:component this={type === 'success' ? CheckCircle : (type === 'warning' ? Warning : ErrorCircle)} />
			</div>
			<p class="flash-message">{message}</p>
		</div>
	{/if}
</template>

<style lang="scss">
	.flash {
		padding: rem(12);
		border-radius: rem(4);
		box-shadow: 0 rem(3) rem(7) hsl(0 0% 0% / .1), 0 rem(5) rem(28) hsl(0 0% 0% / .25);
		z-index: 1;
		border: 1px solid hsl(var(--colour));
		background: var(--c1);
		display: flex;
		align-items: center;
		gap: rem(12);
		&-icon {
			width: rem(24);
			height: rem(24);
			color: hsl(var(--colour));
		}

		&.success {
			--colour: var(--green);
		}
		&.warning {
			--colour: var(--yellow);
		}
		&.error {
			--colour: var(--red);
		}

		&:not(:last-child) {
			margin-bottom: rem(16);
		}
	}
</style>