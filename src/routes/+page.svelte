<script lang="ts">
	import NewGameModal from './../components/test/NewGameModal.svelte';
	import LinkButton from '../components/test/LinkButton.svelte';
	import AuthRegistrationModal from '../components/test/AuthRegistrationModal.svelte';
	import RulesModal from '../components/test/RulesModal.svelte';
	import ConnectGameModal from '../components/test/ConnectGameModal.svelte';
	const userRole: string = 'admin';
	let isAuth: boolean = $state(true);
	let queueNewGameModal: boolean = $state(false);
	let newgamemodalOpened = $state(false);
	let rulesModalOpened = $state(false);
	let regmodalOpened = $state(false);
	let authModal = $state(false);
	let gameOptions = $state({name: 'Игра 1', maxPlayers: 4, time: {minutes: 30, seconds: 0}, timeformove: { minutes: 1, seconds: 0 }, id: 0, spectate: false});
	const links: Array<{ label: string; url?: string; adminOnly: boolean, noautentification?: boolean, typeModal?: string }> = [
		{
			url: '/gameList',
			label: 'Активные игры',
			adminOnly: false
		},
		{
			label: 'Создать новую игру',
			adminOnly: false,
			typeModal: 'newgamemodalOpened'
		},
		{
			label: 'Инструкция',
			adminOnly: false,
			typeModal: 'rules'
		},
		{
			url: 'administration',
			label: 'Администрирование',
			adminOnly: true
		},
		{
			label: 'Войти',
			adminOnly: false,
			noautentification: true,
			typeModal: 'auth'
		},
		{
			label: 'Зарегистрироваться',
			adminOnly: false,
			noautentification: true,
			typeModal: 'regmodalOpened'
		},
		{
			url: '/userProfile',
			label: 'Профиль',
			adminOnly: false
		}
	];
</script>

<div class="main">
	<div class="main__menu">
		{#each links as link}
		  {#if isAuth}
			{#if (link.adminOnly === false && !link.noautentification) || (link.adminOnly && userRole === 'admin')}
				{#if link.url}
					<LinkButton label={link.label} url={link.url} />
				{:else if link.typeModal === 'newgamemodalOpened'}
					<button onclick={() => (newgamemodalOpened = true)} class="btn">{link.label}</button>
				{:else if link.typeModal === 'rules'}
					<button onclick={() => (rulesModalOpened = true)} class="btn">{link.label}</button>
				{/if}
			{/if}
			{:else}
				{#if link.noautentification}
				<button onclick={(link.typeModal === 'auth') ? () => (authModal = true) : () => (regmodalOpened = true)} class="btn">{link.label}</button>
				{/if}
		  {/if}
		{/each}
	</div>
</div>
{#if newgamemodalOpened}
	<NewGameModal onClose={() => (newgamemodalOpened = false)} onNewGameOpened={() => (queueNewGameModal = true)} bind:gameOptions={gameOptions} />
{/if}

{#if regmodalOpened}
	<AuthRegistrationModal {authModal} onClose={() => (regmodalOpened = false)} />
{/if}

{#if authModal}
	<AuthRegistrationModal {authModal} onClose={() => (authModal = false)} />
{/if}

{#if rulesModalOpened}
	<RulesModal onClose={() => (rulesModalOpened = false)} />
{/if}
{#if queueNewGameModal}
	<ConnectGameModal onClose={() => (queueNewGameModal = false)} gameOptions={gameOptions}  />
{/if}

<style>
	.main {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: no-repeat url("../assets/bg.png") center center;
		background-size: cover;
	}

	.main__menu {
		width: 300px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
