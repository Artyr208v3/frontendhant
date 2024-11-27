<script lang="ts">
	import ListButton from "./List_button.svelte";
    import Modal_newGame from "./Modal_newGame.svelte";

    let is_Admin: boolean = false
    let is_Auth: boolean = true
    let show_modal: boolean = false

    function openModal() {
        show_modal = true
    }

    function close_modal() {
        show_modal = false
    }   

</script>
<div class="wrapper">
<ListButton is_Auth={is_Auth} is_Admin={is_Admin} on:open={openModal}></ListButton>

{#if show_modal}
    
      <Modal_newGame on:close_modal={close_modal}></Modal_newGame>

{/if}
</div>


<style>
    .overlay {
        position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    }
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: no-repeat url("../assets/bg.png") center center;
        background-size: cover;
    }
</style>