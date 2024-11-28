<script lang="ts">

function addStopWord() {
    
}

function removeStopWord() {
    
}

function editStopWord() {
    
}

</script>

<div class="wrapper">
    <p class="hd"><b>Стоп-лист</b></p>
    <main>
        <p class="shd_blue">Список стоп-слов:</p>
        <button class="shd_blue" onclick={addStopWord}>Добавить</button>
        <button class="shd_orange" onclick={removeStopWord}>Удалить</button>
        <button class="shd_orange" onclick={editStopWord}>Редактировать</button>
    </main>
</div>

<style>
    .wrapper {
        height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: no-repeat url("../../assets/bg4.png");
		background-size: cover;
    }
    .hd {
        position: relative;
        bottom: 360px;
        font-weight: bold;
        font-size: 32px;
        color: #2C4194;
    }
    main {
        gap: 40px;
        position: relative;
        top: 300px;
        right: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: bold;
        font-size: 32px;
        color: #2C4194;
    }
    .shd_blue {
        position: relative;
        bottom: 330px;
        font-weight: bold;
        font-size: 32px;
        color: #2C4194;
    }
    .shd_orange {
        position: relative;
        bottom: 330px;
        font-weight: bold;
        font-size: 32px;
        color: #EB7445;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
</style>