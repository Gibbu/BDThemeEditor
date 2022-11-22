<script lang="ts">
	export let title: string;
	export let description: string = 'Customize themes by the community with a easy to use interface';
	export let image: string | undefined = undefined;
</script>

<svelte:head>
	<title>{title} - Theme Editor</title>
	<meta name="description" content={description} />

	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	{#if image}
		<meta name="og:image" content={image} />
	{/if}

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
