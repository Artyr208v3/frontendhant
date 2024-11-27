<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ButtonList from "./Button_list.svelte";

    export let is_Auth = false
    export let is_Admin = false

    const dispatch = createEventDispatcher();

    function handleButtonClick() {
    dispatch('open');
  }

</script>
<div class="list_button">
{#if is_Auth}
    {#if is_Admin}
        <ButtonList text="Активные игры" on></ButtonList>
        <ButtonList text="Создать новую игру" on:click={handleButtonClick}/>
        <ButtonList  text="Инструкция" on></ButtonList>
        <ButtonList text="Правила" on></ButtonList>
        <ButtonList text="Раздел для администратора" on></ButtonList>
    {:else}
        <ButtonList text="Активные игры" on></ButtonList>
        <ButtonList text="Создать новую игру" on:click={handleButtonClick}/>
        <ButtonList text="Инструкция" on> </ButtonList>
        <ButtonList text="Правила" on></ButtonList>
    {/if}

{:else}
    <ButtonList text='Инструкция' on></ButtonList>
    <ButtonList text='Правила' on></ButtonList>
    <ButtonList text='Войти/регистрация' on></ButtonList>
{/if}
</div>

<style>
    .list_button {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>