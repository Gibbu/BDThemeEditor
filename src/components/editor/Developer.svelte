<script lang="ts">
	import { Modal } from '../common';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowTopRightOnSquare, Banknotes, QuestionMarkCircle } from '@steeze-ui/heroicons';

	import type { Developer } from '$types/dev';

	export let visible: boolean = false;
	export let developer: IDev;
</script>

<Modal bind:visible plain style="--colour: {developer?.colour}">
	<div
		class="banner"
		class:noBanner={!developer.banner}
		style={developer.banner ? `background: url('${developer.banner}') center/cover;` : undefined}
	/>
	<div class="info">
		<img src="https://github.com/{developer.github}.png" alt="Developer Avatar" class="avatar" />
		<h1 class="name">{developer.name}</h1>
	</div>
	<div class="socials">
		<div class="link">
			<div class="link-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="22" height="22">
					<path
						fill-rule="evenodd"
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
			</div>
			<div class="link-name">{developer.github}</div>
			<a class="link-icon" href="https://github.com/{developer.github}" target="_blank" rel="noreferrer noopener">
				<Icon src={ArrowTopRightOnSquare} size="18px" />
			</a>
		</div>
		{#if developer.donate}
			<div class="link">
				<div class="link-icon">
					<Icon src={Banknotes} size="22px" />
				</div>
				<div class="link-name">Donate</div>
				<a class="link-icon" href={developer.donate} target="_blank" rel="noreferrer noopener">
					<Icon src={ArrowTopRightOnSquare} size="18px" />
				</a>
			</div>
		{/if}
		{#if developer.server}
			<div class="link">
				<div class="link-icon">
					<Icon src={QuestionMarkCircle} size="22px" />
				</div>
				<div class="link-name">Support Server</div>
				<a class="link-icon" href={developer.server} target="_blank" rel="noreferrer noopener">
					<Icon src={ArrowTopRightOnSquare} size="18px" />
				</a>
			</div>
		{/if}
	</div>
</Modal>

<style lang="scss">
	.banner {
		height: 200px;
		background: hsl(var(--colour));
		position: relative;
		&.noBanner {
			height: 100px;
			&::before {
				content: '';
				inset: 0;
				background: url('/images/pattern.png');
				position: absolute;
				z-index: 1;
				mix-blend-mode: soft-light;
				opacity: 0.5;
			}
		}
	}
	.info {
		display: flex;
		align-items: center;
		gap: 8px;
		position: relative;
		z-index: 1;
		padding: 0 16px;
	}
	.name {
		color: var(--text-primary);
		font-family: var(--font-display);
	}
	.avatar {
		width: 128px;
		height: 128px;
		border-radius: 50%;
		background: var(--background-secondary);
		border: 10px solid var(--background-secondary-alt);
		margin-top: -64px;
		pointer-events: none;
	}
	.socials {
		padding: 6px 16px 16px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 16px;
	}
	.link {
		display: flex;
		align-items: center;
		gap: 8px;
		background: var(--background-primary-alt);
		padding: 16px;
		border-radius: var(--radius);
		&-name {
			font-size: 18px;
			font-family: var(--font-display);
			font-weight: 700;
			flex: 1;
		}
		&-icon {
			display: flex;
			svg {
				fill: currentColor;
			}
		}
		a:hover {
			color: hsl(var(--colour));
		}
	}
</style>
