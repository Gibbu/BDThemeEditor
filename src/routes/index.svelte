<script>
	import {loaded} from '$lib/stores';
	import {onMount} from 'svelte';
	import Icon, {Cog} from 'svelte-hero-icons';

	import themes from '$data/themes';

	import {Button} from '$components/common/Button';

	const getHref = (href: string) => `/theme/${href.replace(/ /g, '').toLowerCase()}`;

	onMount(() => $loaded = true);
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
			<div class="wrapper">
				<header class="header">
					<h1 class="header-title"><span>BetterDiscord</span> Theme Editor</h1>
					<p class="header-text">Get your desired theme in a manor of minutes with no CSS knowledge required.</p>
				</header>
			
				<main class="themes">
					{#each themes as theme}
						<a href={getHref(theme.name)} class="theme">
							<div class="theme-head r16-9">
								<img src={theme.thumbnail} alt="Theme thumbnail" class="theme-thumbnail">
							</div>
							<div class="theme-info">
								<h3 class="theme-name">{theme.name}</h3>
							</div>
						</a>
					{/each}
				</main>
			
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

	.wrapper {
		margin: rem(50) auto;
	}

	.header {
		margin-bottom: rem(50);
		&-title {
			color: var(--text-primary);
			span {
				color: hsl(var(--accent));
			}
		}
		&-text {
			margin-top: rem(8);
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

		&-head {
			max-height: 0;
			overflow: hidden;
		}
		&-thumbnail {
			width: 100%;
		}
		&-info {
			padding: rem(16);
		}
	}

	.footer {
		margin-top: rem(50);
		font-size: rem(14);
		opacity: .5;
	}
</style>