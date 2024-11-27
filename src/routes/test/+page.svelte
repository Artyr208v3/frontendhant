<script lang="ts">
	import LinkButton from '../../components/test/LinkButton.svelte';
	import Modal from '../../components/test/Modal.svelte';
	const userRole = 'admin';
	let modalOpened = $state(false);
	const links: Array<{ label: string; url?: string; adminOnly: boolean }> = [
		{
			url: 'new-game',
			label: 'Новая игра',
			adminOnly: false
		},
		{
			label: 'Модалка',
			adminOnly: false
		},
		{
			url: 'rools',
			label: 'Правила',
			adminOnly: true
		}
	];
</script>

<div class="main">
	<div class="main__menu">
		{#each links as link}
			{#if link.adminOnly === false || (link.adminOnly && userRole === 'admin')}
				{#if link.url}
					<LinkButton label={link.label} url={link.url} />
				{:else}
					<button onclick={() => (modalOpened = true)} class="btn">{link.label}</button>
				{/if}
			{/if}
		{/each}
	</div>
</div>
{#if modalOpened}
	<Modal onClose={() => (modalOpened = false)} />
{/if}

<style>
	.main {
		height: 100vh;
		background: gray;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.main__menu {
		width: 300px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
