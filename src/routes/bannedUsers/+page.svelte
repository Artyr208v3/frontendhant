<script lang="ts">

function userBan() {
    
}

function userunBan() {
    
}

</script>

<div class="wrapper">
    <p class="hd"><b>Бан-лист пользователей</b></p>
    <main>
        <p class="shd_blue">Никнейм:</p>
        <p class="shd_orange">ID:</p>
        <p class="shd_blue">Причина блокировки:</p>
        <p class="shd_orange">Время действия блокировки:</p>
        <p><button class="shd_blue" onclick={userBan}>Блокировка</button><button class="shd_green" onclick={userunBan}>Разблокировка</button> пользователя </p>
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
        text-align: center;
        left: 200px;
        bottom: 360px;
        font-weight: bold;
        font-size: 32px;
        color: #2C4194;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
    main {
        position: relative;
        top: 300px;
        right: 550px;
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
    .shd_green {
        position: relative;
        bottom: 330px;
        font-weight: bold;
        font-size: 32px;
        color: #59C896;
    }
    .shd_orange {
        position: relative;
        bottom: 330px;
        font-weight: bold;
        font-size: 32px;
        color: #EB7445;
    }
</style>