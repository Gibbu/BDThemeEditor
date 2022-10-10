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
	<div id="content" class="wrap">
		<slot />
	</div>
	<footer id="footer" class="footer">
		<div class="wrap">
			<p class="madeby">
				Website created by <a href="https://gibbu.me" target="_blank" rel="noreferrer noopener" class="anchor">Gibbu</a>
			</p>
		</div>
	</footer>
</template>

<style lang="scss">
	.footer {
		padding: 12px 0;
		border-top: 1px solid var(--border);
		margin-top: 150px;
	}
	.madeby {
		font-size: 12px;
		opacity: 0.5;
	}
</style>
