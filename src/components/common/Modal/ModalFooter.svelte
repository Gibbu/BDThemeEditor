<footer class="modal-footer">
	<slot />
</footer>

<style lang="scss">
	.modal-footer {
		display: flex;
		justify-content: flex-end;
		border-top: rem(1) solid var(--border);
		gap: rem(8);
		background: var(--bg-alt);
		padding: rem(12) rem(16);
		border-radius: 0 0 rem(4) rem(4);
	}
</style>