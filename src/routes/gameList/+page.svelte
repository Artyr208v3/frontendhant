<script lang="ts">
	import ConnectGameModal from "../../components/test/ConnectGameModal.svelte";

    function onClose() {
        window.history.back();
    }

    function reloadPage () {
        window.location.reload();
    }
    let connectGameModalOpened = $state(false);
    const games: Array<{label: string, players: number, maxPlayers: number ,time: {minutes: number, seconds: number}, id: number, spectate: boolean} > = [
        {
            label: 'Игра 1',
            players: 2,
            maxPlayers: 3,
            time: {minutes: 30, seconds: 0},
            id: 1,
            spectate: false
        },
        {
            label: 'Игра 2',
            players: 2,
            maxPlayers: 5,
            time: {minutes: 30, seconds: 0},
            id: 2,
            spectate: true
        },
        {
            label: 'Игра 3',
            players: 2,
            maxPlayers: 2,
            time: { minutes: 30, seconds: 0},
            id: 3,
            spectate: false
        },
        {
            label: 'Игра 4',
            players: 2,
            maxPlayers: 3,
            time: { minutes: 30, seconds: 0},
            id: 4,
            spectate: false
        },
        {
            label: 'Игра 5',
            players: 2,
            maxPlayers: 2,
            time: { minutes: 30, seconds: 0},
            id: 5,
            spectate: false
        },
        {
            label: 'Игра 6',
            players: 2,
            maxPlayers: 2,
            time: { minutes: 30, seconds: 0},
            id: 6,
            spectate: false
        },
        {
            label: 'Игра 7',
            players: 2,
            maxPlayers: 2,
            time: { minutes: 30, seconds: 0},
            id: 7,
            spectate: false
        }
    ]

   function joinGame () {
       connectGameModalOpened = true;
   }
    </script>

<div class="wrapper">
    <button class="close_modal" onclick={onClose}>
        <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.66666L1.875 8.33332L10 15" stroke="#EB7445" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.875 8.33331H14.875C23.8499 8.33331 31.125 14.3026 31.125 21.6666V23" stroke="#EB7445" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>					
            <p class="back"><b>Назад</b></p>
    </button>

    <div class="headline">
        <svg class="vector" width="351" height="126" viewBox="0 0 351 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="25.9839" height="42.2672" rx="5" transform="matrix(0.968048 -0.250766 0.24059 0.970627 1.39441 45.1366)" fill="#EB7445"/>
            <rect width="25.4743" height="41.4383" rx="5" transform="matrix(-0.965926 -0.258819 -0.268945 0.963156 345.642 45.9289)" fill="#2C4194"/>
            </svg>
        <p class="hd">Активные игры</p>
        <svg class="line" width="1145" height="1" viewBox="0 0 1145 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="1145" y2="0.5" stroke="url(#paint0_linear_11_177)"/>
            <defs>
            <linearGradient id="paint0_linear_11_177" x1="0" y1="1.5" x2="1145" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EB7445" stop-opacity="0"/>
            <stop offset="0.545" stop-color="#EB7445"/>
            <stop offset="1" stop-color="#EB7445" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>  
    </div>
    <button class="reload" onclick={reloadPage}>
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_288)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96474 0.472658C12.6196 -0.248203 15.4314 -0.140766 18.0235 0.780582C20.6157 1.70193 22.8645 3.39321 24.4688 5.62797V2.95328C24.4688 2.61762 24.6021 2.2957 24.8395 2.05835C25.0768 1.821 25.3988 1.68766 25.7344 1.68766C26.0701 1.68766 26.392 1.821 26.6294 2.05835C26.8667 2.2957 27.0001 2.61762 27.0001 2.95328V10.1252H19.8282C19.4925 10.1252 19.1706 9.99182 18.9332 9.75447C18.6959 9.51711 18.5626 9.1952 18.5626 8.85953C18.5626 8.52387 18.6959 8.20195 18.9332 7.9646C19.1706 7.72725 19.4925 7.59391 19.8282 7.59391H22.7425C21.4206 5.52586 19.4433 3.96091 17.1269 3.14942C14.8105 2.33794 12.2889 2.3268 9.96545 3.11781C7.64198 3.90881 5.65095 5.45623 4.31087 7.51253C2.97079 9.56883 2.3591 12.0152 2.57366 14.4602C2.78822 16.9052 3.81663 19.2076 5.49437 20.9991C7.17211 22.7906 9.40223 23.9676 11.8279 24.3418C14.2537 24.7161 16.7348 24.2659 18.8745 23.0634C21.0141 21.8609 22.6886 19.9755 23.6301 17.7088C23.6912 17.5516 23.7831 17.4083 23.9004 17.2871C24.0177 17.166 24.158 17.0695 24.3131 17.0034C24.4682 16.9372 24.6349 16.9027 24.8036 16.9019C24.9722 16.9011 25.1392 16.934 25.295 16.9986C25.4507 17.0633 25.5919 17.1584 25.7104 17.2784C25.8288 17.3984 25.9221 17.5408 25.9847 17.6974C26.0474 17.8539 26.0781 18.0214 26.0751 18.19C26.0721 18.3586 26.0355 18.5249 25.9673 18.6791C25.0878 20.7961 23.6837 22.6543 21.8873 24.0785C20.0909 25.5027 17.9614 26.446 15.6996 26.8194C13.4377 27.1929 11.1181 26.9842 8.9592 26.2131C6.80034 25.4419 4.87341 24.1337 3.36005 22.4118C1.84669 20.6898 0.79675 18.6109 0.309204 16.3709C-0.178342 14.1309 -0.087434 11.8036 0.573358 9.60843C1.23415 7.41328 2.44306 5.42255 4.08613 3.82391C5.7292 2.22526 7.7523 1.07305 9.96474 0.472658Z" fill="#2C4194"/>
            </g>
            <defs>
            <clipPath id="clip0_11_288">
            <rect width="27" height="27" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <p class="reload__text"><b>Обновить</b></p>
    </button>
    <div class="game-grid">
    {#each games as game} 
    <article class="game-card">
        <div class="game-info">
          <div class="game-stats">
            <p class="game-name">{game.label}</p>
            <div class="stat-group">
              <span class="stat-label">Кол-во игроков</span>
              <span class="stat-value">{game.players}/{game.maxPlayers}</span>
            </div>
            <div class="stat-group">
              <span class="stat-label">Длительность раунда</span>
              <span class="stat-value">{game.time.minutes}:{game.time.seconds}</span>
            </div>
            <button class="join-button" type="button" onclick={joinGame} >Войти в игру</button>
          </div>
          {#if game.spectate}
            <button class="spectator-button" type="button">Режим наблюдения</button>
          {/if}
        </div>
        <div class="divider" > </div>
      </article>  
    {/each}
</div>
{#if connectGameModalOpened} 
    <ConnectGameModal  onClose={() => (connectGameModalOpened = false)} />
{/if}
</div>

<style>
    .game-name {
        color: rgb(44, 65, 148);
    text-align: center;
    font: 700 22px Nobile, sans-serif;
    }
      .game-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 320px;
    padding-bottom: 20px;
  }

     .game-card {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .game-info {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    text-align: center;
    font: 16px Nobile, sans-serif;
  }

  .game-stats {
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: flex-start;
  }

  .stat-group {
    display: flex;
    gap: 12px;
    font-weight: 500;
  }

  .stat-label {
    color: rgb(235, 116, 69);
  }

  .stat-value {
    color: rgb(44, 65, 148);
  }

  .join-button {
    color: rgb(44, 65, 148);
    font-weight: 700;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .spectator-button {
    color: rgb(71, 191, 137);
    font-weight: 700;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    margin-top: auto;
  }

  .divider {
    height: 1px;
    background: rgb(235, 116, 69);
    width: 100%;
  }
    .wrapper {
        background-color: #2C4194;
        background: url(../../assets/bg2.png) repeat-y;
        
        width: 100%;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }

        .close_modal{
		cursor: pointer;
		border: none;
		background: none;
		position: relative;
		display: flex;
        top: 90px;
        right: 775px;
		}
	.back{
		color: #EB7445;
		 font-size: 16px ;
		  margin-left: 10px;
		  cursor: pointer;
	}

    .headline {
        bottom: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
  
    }

    .vector {
        position: relative; 
        top: 70px;
    }

    .hd {
        font-weight: bold;
        font-style:italic;
        font-size: 32px;
        color: #2C4194;
        font-weight: 600;
        position: relative;
        bottom: 50px;
    }

    .line {
        position: relative; 
        bottom: 50px;
    }

    .reload {
        position: relative;
        bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
		border: none;
		background: none;
        right: 760px;
        bottom: 100px;
    }

    .reload__text {
        position: relative;
        color: #2C4194;
        font-size: 16px;
        margin-left: 10px;
    }

</style>