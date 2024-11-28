<script lang="ts">

    const users: Array<{name: string, email: string, password: string, avatar: string, gamehistory: Array<{ name: string, win: boolean }>}> = [
        {
            name: 'Nick',
            email: 't8H4o@example.com',
            password: '123456',
            avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            gamehistory: [
                {
                name: 'Игра 1',
                win: true
                },
                {
                name: 'Игра 2',
                win: false
                },
                {
                name: 'Игра 3',
                win: true
                }
            ]
            }
        
    ]

    function edit_password() {
        
    }

</script>

<div class="wrapper">
<div class="headline">
    <p class="hd">Профиль пользователя </p>
</div>
    <main>
        {#each users as user} 
        <img class="avatar" src={user.avatar} alt="">
        <p class ="shd">Никнейм: {user.name}</p>
        <p class ="shd">Электронная почта: {user.email}</p>
        <p class ="shd">История игр: {#each user.gamehistory as history}
            <span>{history.name} - {#if history.win} Победа {/if}
             {#if !history.win} Поражение {/if}</span>
        {/each}</p>
        <p class="shd">Пароль: <button class="btn_orange" onclick={edit_password}>Редактировать</button></p>
        {/each}

    </main>

</div>

<style>
    .wrapper {
        background: url(../../assets/bg2.png) repeat-y;
        height: 100vh;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    main {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }

    .headline {
        top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative; 
    }

    .avatar {
        position: relative; 
        top: 70px;
        width: 240px;
        height: 240px;
        border: #EB7445 solid 2px;
        border-radius: 50%;
    }
    .hd {
        font-weight: bold;
        font-style:italic;
        font-size: 32px;
        color: #2C4194;
        font-weight: 600;
        position: relative;
    }
    .shd {
        font-size: 20px;
        color: #2C4194;
        font-weight: 600;
        position: relative;
        top: 80px;
    }
.btn_orange {
    background: none;
    border: none;
    cursor: pointer;
    color: #EB7445;
    font-size: 20px;
    font-weight: 600;
    position: relative;
}
</style>