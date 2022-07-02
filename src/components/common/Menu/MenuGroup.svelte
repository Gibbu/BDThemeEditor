<template>
	<div role="group" class="menu-group">
		<slot />
	</div>
</template>

<style lang="scss">
	.menu-group:not(:last-child) {
		border-bottom: rem(1) solid var(--border);
		margin-bottom: rem(8);
		padding-bottom: rem(8);
	}
</style>
