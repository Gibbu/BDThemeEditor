<script>
	import {onMount} from 'svelte';
	import Icon, {Download, Save, Upload, Check, ChevronLeft, X} from 'svelte-hero-icons';
	import {THEME, preview} from '$lib/stores';
	import DLTheme from '$lib/download';

	import {Input} from '$components/common/Input';
	import {Button} from '$components/common/Button';
	import {ModalRoot, ModalBody, ModalHeader, ModalFooter} from '$components/common/Modal';

	let value: string = '';
	let error: string = '';

	// Validate
	const validate = (): boolean => {
		const check = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;
		if (value.length < 1) {
			error = 'Your theme name must be longer than 1 character';
			return false;
		} else if (check.test(value)) {
			error = 'Your theme name cannot contain any special characters';
			return false;
		} else {
			error = null;
			return true;
		}
	}

	// Download
	let saveModal: boolean = false;

	const save = (): void => {
		if (validate()) {
			DLTheme($THEME);
		}
	}

	// Donate
	let showDonateWindow: boolean = true;

	const hideDonate = (): void => {
		showDonateWindow = false;
		localStorage.setItem(`donate_${$THEME.name.replace(/ /g, '')}`, 'true');
	}

	onMount(() => {
		showDonateWindow = !localStorage.getItem(`donate_${$THEME.name.replace(/ /g, '')}`);
	})
</script>

<div class="actions">
	<Button type="secondary">
		<svelte:fragment slot="iconL">
			<Icon src={Upload} />
		</svelte:fragment>
		Import
	</Button>
	<Button type="primary" on:click={() => saveModal = true}>
		<svelte:fragment slot="iconL">
			<Icon src={Save} />
		</svelte:fragment>
		Save
	</Button>
</div>

<ModalRoot bind:visible={saveModal}>
	<ModalHeader title="Save" on:close={() => saveModal = false} />
	<ModalBody markdown={false}>
		{#if $THEME.developer.paypal && showDonateWindow}
		<div class="donate">
			<h4 class="donate-title">
				Like {$THEME.name}?
				<button on:click={hideDonate}>
					<Icon src={X} />
				</button>
			</h4>
			<p class="donate-text">Consider donating to {$THEME.developer.name}.</p>
			
		</div>
		{/if}
		<p class="save-title">Give your theme a name:</p>
		<Input placeholder="Theme name" {error} bind:value on:keyup={validate} />
		{#if error}
			<small class="save-error">{error}</small>
		{/if}
	</ModalBody>
	<ModalFooter>
		<Button type="primary" disabled={error} on:click={save}>
			<svelte:fragment slot="iconL">
				<Icon src={Download} />
			</svelte:fragment>
			Download
		</Button>
	</ModalFooter>
</ModalRoot>



<style lang="scss">
	.actions {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: rem(16);
		padding: rem(16) 0;
		margin: 0 rem(16);
		border-bottom: rem(1) solid var(--border);
	}

	.save {
		&-title {
			margin-bottom: rem(8);
			font-size: rem(14);
		}
		&-error {
			display: block;
			color: hsl(var(--red));
			margin-top: rem(4);
		}
	}

	.donate {
		border-radius: rem(4);
		border: rem(1) solid var(--border);
		margin-bottom: rem(16);
		padding: rem(16);
		&-title {
			color: var(--text-primary);
		}
		&-text {
			font-size: rem(14);
			margin-top: rem(4);
		}
	}
</style>