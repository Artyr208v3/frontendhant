<div class="wrapper">

    <p class="hd"><b>Логи игровые</b></p>
    <main>
        <p class="shd_blue">Никнейм:</p>
        <p class="shd_orange">ID:</p>
        <p class="shd_blue">Название игры:</p>
        <p class="shd_orange">Время действия:</p>
        <p class="shd_blue">Действия в игре :</p>
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
</style>