<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Swatch, Pencil, ArrowDownTray, ArrowRight } from '@steeze-ui/heroicons';

	import { MetaData, Button } from '$components/common';

	const steps = [
		{
			icon: Swatch,
			title: 'Choose a base theme',
			description: [
				'We have a wide range of themes to start editing provided by the community.',
				'Select one and start editing!'
			],
			link: ['Chose a theme', '/themes']
		},
		{
			icon: Pencil,
			title: 'Edit to your liking',
			description: [
				'No need to learn or mess around with CSS. Straight to getting the theme of your dreams.',
				`But if needed, you're still able to open the downloaded file and manually change settings.`
			]
		},
		{
			icon: ArrowDownTray,
			title: 'Download',
			description: [
				`Once you're done editing your theme, download it and enjoy!`,
				'Need help installing your new awesome theme?'
			],
			link: ['Read the docs', '/docs/installing-theme']
		}
	];
</script>

<MetaData title="Home" />

<template>
	<section class="banner">
		<h1 class="title">BetterDiscord Theme Editor</h1>
		<p class="tagline">Get your desired theme in a manor of minutes with no CSS knowledge required.</p>
		<div class="actions">
			<Button variant="primary" href="/themes" size="large">
				<Icon src={Swatch} />
				Select a Theme
			</Button>
			<Button variant="secondary" href="#" size="large">Discord Server</Button>
		</div>
	</section>

	<section class="steps">
		{#each steps as { icon, title, description, link }}
			<div class="step">
				<header class="step-header">
					<Icon src={icon} class="glow" />
					<h3 class="step-title">{title}</h3>
				</header>
				<div class="step-body">
					{#each description as desc}
						<p class="step-description">{desc}</p>
					{/each}
					{#if link}
						<a href={link[1]} class="step-link anchor">
							{link[0]}
							<Icon src={ArrowRight} />
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</section>
</template>

<style lang="scss">
	.banner {
		height: calc(100vh - 16px);
		max-height: 650px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: 48px;
		font-family: var(--font-display);
		font-weight: 800;
		color: var(--text-primary);
	}
	.tagline {
		margin: 16px 0 48px;
	}
	.actions {
		display: flex;
		gap: 16px;
	}

	.steps {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 32px;
	}
	.step {
		display: flex;
		flex-direction: column;
		gap: 8px;
		&-header {
			display: flex;
			align-items: center;
			gap: 16px;
			:global(svg) {
				width: 20px;
				height: 20px;
				color: hsl(var(--accent));
			}
		}
		&-title {
			font-family: var(--font-display);
			font-weight: 800;
		}
		&-body {
			padding-left: 36px;
		}
		&-description {
			color: var(--text-tertiary);
			line-height: 1.5;
			&:not(:last-of-type) {
				margin-bottom: 8px;
			}
		}
		&-link {
			display: inline-flex;
			align-items: center;
			gap: 8px;
			font-size: 14px;
			margin-top: 16px;
			color: hsl(var(--accent));
			opacity: 0.5;
			:global(svg) {
				height: 16px;
				width: 16px;
			}
			&:hover {
				opacity: 1;
			}
		}
	}
</style>
