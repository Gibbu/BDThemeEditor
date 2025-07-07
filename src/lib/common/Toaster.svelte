<script lang="ts" module>
	interface ToastData {
		title: string;
		description: string;
	}

	const toaster = new Toaster<ToastData>();

	export const addToast = toaster.addToast;
</script>

<script lang="ts">
	import { Toaster } from 'melt/builders';
</script>

<div {...toaster.root} class="pointer-events-none fixed inset-0 p-6">
	{#each toaster.toasts as toast (toast.id)}
		<div {...toast.content}>
			<h3 {...toast.title}>{toast.data.title}</h3>
			<div {...toast.description}>{toast.data.description}</div>
			<button {...toast.close} aria-label="dismiss alert">X</button>
		</div>
	{/each}
</div>
