<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="p-8">
	<h1>{page.status}</h1>
	<p>{page.error?.message}</p>
</div>
