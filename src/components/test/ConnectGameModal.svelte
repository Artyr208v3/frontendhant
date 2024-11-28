<script lang="ts">

    let { onClose, gameOptions }: { onClose: () => void, gameOptions: {name: string, maxPlayers: number, time: {minutes: number, seconds: number}, timeformove: { minutes: number, seconds: number }, id: number, spectate: boolean}} = $props();

</script>

<div class="shadow">
	<div class="modal"></div>
</div>

<style>
	.shadow {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.1);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(30px);
		padding: 72px;
	}

	.modal {
		z-index: 101;
		background: white;
		display: flex;
		flex-direction: column;
		padding-left: 40px;
		padding-right: 40px;
		border-radius: 20px;
		align-items: center;
		justify-content: center;
	}
</style>
