<script lang="ts">
	import LinkButton from "../../components/test/LinkButton.svelte";



    const links: Array<{ label: string; url?: string;}> = [
        {
            label: 'Логи активности',
            url: '/activityLogs'
        },
        {
            label: 'Логи игровые',
            url: '/gameLogs'
        },
        {
            label: 'Бан-лист пользователей', 
            url: '/bannedUsers'
        },
        {
            label: 'Стоп-лист',
            url: '/stopList'
        }
    ]
</script>

<div class="wrapper">
    <div class="menu">
        {#each links as link}
            {#if link.url} 
            <LinkButton label={link.label} url={link.url} />
            {/if}
        {/each}
    </div>
</div>

<style>
    .wrapper {
        height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: no-repeat url("../../assets/bg3.png") center center;
		background-size: cover;
    }
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
</style>