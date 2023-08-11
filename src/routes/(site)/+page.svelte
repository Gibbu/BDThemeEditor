<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Swatch } from '@steeze-ui/heroicons';

	import { MetaData, Button } from '$components/common';
</script>

<MetaData title="Home" />

<template>
	<section class="home">
		<div class="wrap">
			<div class="home-left">
				<h1 class="title">The Easiest Way To Edit Discord Themes</h1>
				<ul class="features">
					<li class="feature">No need to learn CSS.</li>
					<li class="feature">Easy to use interface.</li>
					<li class="feature">Wide selection of themes.</li>
				</ul>
				<div class="home-btns">
					<Button variant="primary" size="large" href="/themes">
						<Icon src={Swatch} />
						Select a Theme
					</Button>
					<Button variant="secondary" href="https://discord.gg/ZHthyCw" external size="large">Discord Server</Button>
				</div>
			</div>
			<div class="home-right">
				<div class="gallery">
					<img src="/images/gallery/basicbackground-blue.webp" alt="theme screenshot" class="gallery-img" />
					<img src="/images/gallery/clearvision-hogwarts.webp" alt="theme screenshot" class="gallery-img" />
					<img src="/images/gallery/outlook.webp" alt="theme screenshot" class="gallery-img" />
					<img src="/images/gallery/softx-spectra.webp" alt="theme screenshot" class="gallery-img" />
					<img src="/images/gallery/frostedglass-naat.webp" alt="theme screenshot" class="gallery-img" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.home {
		height: 100vh;
		position: relative;
		display: flex;
		.wrap {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 32px;
			align-items: center;
			margin: auto;
			position: relative;
		}
		&-btns {
			display: flex;
			gap: 16px;
			opacity: 0;
			animation: fadeUp 0.5s ease forwards;
			animation-delay: 0.5s;
		}
	}
	.title {
		font-family: var(--font-display);
		color: var(--text-primary);
		font-weight: 800;
		font-size: 56px;
		line-height: 1.5;
		opacity: 0;
		animation: fadeUp 0.5s ease forwards;
	}
	.features {
		margin: 24px 0 86px;
		opacity: 0;
		animation: fadeUp 0.5s ease forwards;
		animation-delay: 0.25s;
	}
	.feature {
		font-size: 20px;
		&:not(:last-child) {
			margin-bottom: 8px;
		}
	}

	.gallery {
		position: absolute;
		top: 0;
		right: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px 32px;
		opacity: 0;
		animation: fadeLeft 0.5s ease forwards;
		animation-delay: 0.75s;
		&-img {
			aspect-ratio: 16 / 9;
			border-radius: 8px;
			overflow: hidden;
			width: 256px;
			position: relative;
			animation: floating 3s ease-in-out infinite;
			box-shadow: 0 10px 15px hsl(0 0% 0% / 0.25);
			pointer-events: none;
			user-select: none;
			&:nth-child(1) {
				translate: -32px -32px;
			}
			&:nth-child(2) {
				animation-delay: 0.5s;
			}
			&:nth-child(2) {
				animation-delay: 0.2s;
			}
			&:nth-child(3) {
				animation-delay: 0.6s;
			}
			&:nth-child(4) {
				translate: 32px 32px;
				animation-delay: 0.4s;
			}
			&:nth-child(5) {
				translate: -32px 32px;
				animation-delay: 0.7s;
			}
		}
	}

	@keyframes floating {
		0% {
			top: 0;
		}
		50% {
			top: -10px;
		}
		100% {
			top: 0;
		}
	}
	@keyframes fadeUp {
		from {
			opacity: 0;
			translate: 0 20px;
		}
		to {
			opacity: 1;
			transalte: 0 0;
		}
	}
	@keyframes fadeLeft {
		from {
			opacity: 0;
			translate: -20px 0;
		}
		to {
			opacity: 1;
			transalte: 0 0;
		}
	}

	@media (prefers-reduced-motion) {
		.gallery-img {
			animation: none;
		}
	}
</style>
