<script>
	import {page, navigating} from '$app/stores';
	import NProgress from 'nprogress';
	import '$scss/app.scss';

	$: if ($navigating) {
		NProgress.start();
	} else {
		NProgress.done();
	}

	const nav = [
		{
			title: 'BetterDiscord',
			links: [
				{href: 'bd/installing', value: 'Installing BetterDiscord'},
				{href: 'bd/installing-themes', value: 'Installing Themes'}
			]
		},
		{
			title: 'Adding your theme',
			links: [
				{href: 'editor/config-file', value: 'Config File'},
				{
					href: 'editor/variables-config',
					value: 'Variables Config',
					children: [
						{href: '#colour', value: 'Colour'},
						{href: '#font', value: 'Font'},
						{href: '#image', value: 'Image'},
						{href: '#number', value: 'Number'},
						{href: '#select', value: 'Select'},
						{href: '#slider', value: 'Slider'},
						{href: '#example', value: 'Example variables config'}
					]
				},
				{href: 'editor/betterdiscord-meta', value: 'BetterDiscord META'},
				{href: 'editor/submitting-theme', value: 'Submitting Your Theme'}
			]
		}
	]

	$: active = (href: string): boolean => {
		const path = $page.path.split('/').filter(el => el && el !== 'docs').join('/');
		if (path === href) return true;
		return false;
	}
</script>

<svelte:head>
	<title>Docs - Theme Editor</title>
</svelte:head>

<template>
	<div class="container scroller">
		<div class="scroller-inner">
			<div class="wrapper">
				<div class="docs">
					<aside class="sidebar">
						{#each nav as {title, links}}
							<h4 class="sidebar-title">{title}</h4>
							<ul class="sidebar-items">
								{#each links as {href, value, children}}
									<li class="sidebar-item">
										<a href="/docs/{href}" class="sidebar-link" class:active={active(href)}>{value}</a>
										{#if children && active(href)}
											<ul class="sidebar-children">
												{#each children as {href, value}}
													<li class="sidebar-child">
														<a {href} class="sidebar-link">{value}</a>
													</li>
												{/each}
											</ul>
										{/if}
									</li>
								{/each}
							</ul>
						{/each}
					</aside>
					<main class="markdown">
						<slot />
					</main>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.docs {
		padding: rem(50) 0;
		display: grid;
		grid-template-columns: rem(250) 1fr;
		gap: rem(32);
		align-items: flex-start;
	}
	.sidebar {
		position: sticky;
		top: rem(16);
		&-title {
			font-size: rem(12);
			color: var(--text-tertiary);
			text-transform: uppercase;
			margin: 0 0 rem(8) rem(16);
		}
		&-items {
			list-style: none;
			margin: 0;
			padding: 0;
			&:not(:last-child) {
				margin-bottom: rem(32);
			}
		}
		&-item {
			position: relative;
			&:not(:last-child) {
				margin-bottom: rem(4);
			}
		}
		&-link {
			font-size: rem(14);
			border-radius: rem(4);
			padding: rem(10) rem(16);
			display: block;
			font-weight: 500;
			&:hover {
				background: var(--c3);
			}
			&.active {
				color: hsl(var(--accent));
				background: hsl(var(--accent) / .1);
			}
		}

		&-children {
			padding: rem(4) 0 0 rem(16);
			list-style: none;
			position: relative;
			&::before {
				content: "";
				position: absolute;
				top: rem(4);
				left: rem(8);
				height: calc(100% - #{rem(4)});
				width: rem(2);
				background: hsl(var(--accent));
				border-radius: rem(50);
			}
		}
	}
</style>