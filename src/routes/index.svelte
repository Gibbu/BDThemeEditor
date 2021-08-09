<script>
	import {browser} from '$app/env';
	import Icon, {ColorSwatch, Clock, DotsHorizontal} from 'svelte-hero-icons';

	import themes from '$data/themes';

	const history = browser && JSON.parse(localStorage.history || '[]') || [];

	import {Menu, MenuButton, MenuDropdown, MenuGroup, MenuItem} from '$components/common/Menu';
	import {ModalRoot, ModalHeader, ModalBody} from '$components/common/Modal';

	const getHref = (href: string) => `/theme/${href.replace(/ /g, '').toLowerCase()}`;
</script>

<svelte:head>
	<title>Home - Theme Editor</title>
	<meta property="og:title" content="Home - Theme Editor">
	<meta name="description" content="Customize themes by the community with a easy to use interface">
	<meta property="og:description" content="Customize themes by the community with a easy to use interface">
</svelte:head>

<div class="home">
	<div class="scroller">
		<div class="scroller-inner">
			<header class="header">
				<div class="wrapper">
					<h1 class="header-title"><span>BetterDiscord</span> Theme Editor</h1>
					<p class="header-text">Get your desired theme in a manor of minutes with no CSS knowledge required.</p>
				</div>
			</header>
			<div class="wrapper">

				{#if history.length > 0}
					<section class="section">
						<h3 class="section-title">Recently made themes</h3>
					</section>
				{/if}

				<section class="section">
					<h3 class="section-title">Available themes</h3>
					<main class="themes">
						{#each themes as theme}
							<a href={getHref(theme.name)} class="theme">
								<div class="theme-head r16-9">
									<img src={theme.thumbnail} alt="Theme thumbnail" class="theme-thumbnail r16-9-item">
								</div>
								<div class="theme-body">
									<img src="https://github.com/{theme.developer.github}.png" alt="Developer avatar" class="theme-developer">
									<div class="theme-info">
										<h4 class="theme-name">{theme.name}</h4>
										<p class="theme-description">{theme.meta.description}</p>
									</div>
								</div>
							</a>
						{/each}
					</main>
				</section>

				<footer class="footer">
					<p>Website made by <a href="https://gibbu.me" target="_blank" rel="noreferrer" class="anchor">Gibbu</a></p>
				</footer>
			</div>
		</div>
	</div>
</div>


<style lang="scss">
	.home {
		display: flex;
		height: 100vh;
	}
	.header {
		padding: rem(56) 0;
		margin-bottom: rem(56);
		border-bottom: rem(1) solid var(--border);
		&-title {
			color: var(--text-primary);
			margin-bottom: rem(8);
			span {
				color: hsl(var(--accent));
			}
		}
	}

	.section {
		margin-bottom: rem(128);
		&-title {
			margin-bottom: rem(16);
			font-weight: 500;
			font-size: rem(16);
		}
	}

	.themes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(#{rem(350), 1fr}));
		gap: rem(16);
	}
	.theme {
		background: var(--card);
		border: rem(1) solid var(--border);
		border-radius: rem(4);
		overflow: hidden;
		position: relative;
		transition: .15s ease border-color,
								.15s ease box-shadow;

		&-thumbnail {
			width: 100%;
		}
		&-body {
			padding: rem(16);
			display: flex;
			align-items: center;
		}
		&-developer {
			width: rem(32);
			height: rem(32);
			border-radius: 50%;
			background: var(--c8);
		}
		&-info {
			margin-left: rem(16);
			width: calc(100% - #{rem(48)});
		}
		&-name {
			color: var(--text-primary);
		}
		&-description {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: rem(14);
			margin-top: rem(2);
		}

		&:hover, &:focus-visible {
			border-color: hsl(var(--accent));
			box-shadow: 0 0 0 rem(4) hsl(var(--accent) / .2);
		}
	}

	.footer {
		font-size: rem(14);
		opacity: .5;
	}
</style>