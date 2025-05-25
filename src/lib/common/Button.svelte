<script lang="ts">
	import { cn } from '$lib/utils';

	import type { Props } from '$lib/types';

	interface ComponentProps extends Props<HTMLButtonElement | HTMLAnchorElement> {
		variant: 'primary' | 'secondary' | 'text';
		href?: string;
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		class?: string;
	}

	let {
		variant,
		children,
		disabled,
		href,
		self,
		size = 'md',
		class: klass,
		...props
	}: ComponentProps = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	href={href || undefined}
	bind:this={self}
	disabled={disabled || undefined}
	class={cn(
		'focusOutline inline-flex cursor-pointer items-center justify-center font-medium',
		{
			primary: 'bg-turquoise-500/15 hover:bg-turquoise-500 text-turquoise-400 hover:text-zinc-800',
			secondary: 'bg-white/5 hover:bg-white/10 hover:text-white',
			text: 'hover:bg-white/5 hover:text-white'
		}[variant],
		{
			sm: 'gap-1 rounded-md text-xs',
			md: 'gap-1 rounded-lg px-4 py-2',
			lg: 'gap-2.5 rounded-xl px-8 py-4 text-lg'
		}[size],
		klass
	)}
	{...props}
>
	{@render children?.()}
</svelte:element>
