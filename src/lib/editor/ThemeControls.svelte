<script lang="ts">
	import { EDITOR_STATE } from '$lib/editor.svelte';
</script>

<div class="flex-1 overflow-x-hidden overflow-y-auto">
	{#if EDITOR_STATE.THEME}
		{#each EDITOR_STATE.THEME.variables as vars}
			{#if EDITOR_STATE.isActiveTab(vars.title)}
				<p>{vars.title}</p>
			{/if}
		{/each}
	{/if}
</div>
