<script lang="ts">
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';

	$: if ($navigating) {
		NProgress.start();
	} else {
		NProgress.done();
	}
</script>

<template>
	<div id="content">
		<slot />
	</div>
</template>
