<script>
	export let title: string = '';
</script>

<div class="radio-group">
	{#if title}
		<header class="radio-header">
			<p class="title">{title}</p>
		</header>
	{/if}
	<div class="radio-items">
		<slot />
	</div>
</div>

<style lang="scss">
	.radio-header {
		margin-bottom: em(6);
		user-select: none;
	}
	.title {
		font-size: em(15);
	}
</style>