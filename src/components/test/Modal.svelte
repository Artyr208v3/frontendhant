<script lang="ts">
	let { onClose }: { onClose: () => void } = $props();
</script>

<div class="shadow">
	<div class="modal">
		<input type="text" />
		<input type="text" />
		<input type="text" />
		<button onclick={onClose}>Закрыть</button>
	</div>
</div>

<style>
	.shadow {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		width: 500px;
		height: 800px;
		background: white;
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 50px;
	}
</style>
