<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { InformationCircle, ExclamationCircle, XCircle } from '@steeze-ui/heroicons';

	export let type: 'info' | 'warning' | 'error';

	const icons = {
		info: InformationCircle,
		warning: ExclamationCircle,
		error: XCircle
	};
</script>

<template>
	<div class="banner {type}">
		<div class="icon">
			<Icon src={icons[type]} size="24px" />
		</div>
		<p class="message"><slot /></p>
	</div>
</template>

<style lang="scss">
	.banner {
		border: 1px solid hsl(var(--banner-colour));
		background: hsl(var(--banner-colour) / 0.15);
		border-radius: var(--radius);
		padding: 8px 8px 8px 16px;
		display: flex;
		align-items: center;
		gap: 16px;
		&.info {
			--banner-colour: var(--blue);
		}
		&.warning {
			--banner-colour: var(--yellow);
		}
		&.error {
			--banner-colour: var(--red);
		}
	}
	.icon {
		min-width: 24px;
		max-width: 24px;
		min-height: 24px;
		max-height: 24px;
		color: hsl(var(--banner-colour));
	}
	.message {
		font-size: 14px;
		:global(a) {
			color: hsl(var(--banner-colour));
			text-decoration: underline;
		}
	}
</style>
