<script>
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function close_modal() {
        dispatch('close_modal');
    }
</script>

<div class="modal">
    <p class="hd">Создание игры</p>
    <svg class="vector" width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L27.9904 22.5H2.00962L15 0Z" fill="#EB7445"/>
        <path d="M23.2485 3.1448L35.3522 28.0747L7.71045 26.0919L23.2485 3.1448Z" fill="#2C4194"/>
        </svg>
        <svg width="347" height="1" viewBox="0 0 347 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="347" y2="0.5" stroke="url(#paint0_linear_22_10)"/>
            <defs>
            <linearGradient id="paint0_linear_22_10" x1="0" y1="1.5" x2="347" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EB7445" stop-opacity="0"/>
            <stop offset="0.545" stop-color="#EB7445"/>
            <stop offset="1" stop-color="#EB7445" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
        <button class="close_modal" on:click={close_modal}>1</button>
        <main>
            <p class="shd">Название игры:</p>
            <input type="text" placeholder="Введите название игры" class="input">
            <p class="shd">Количество игроков:</p>
            <input type="number" placeholder="Введите количество игроков" class="input">
        </main>
</div>