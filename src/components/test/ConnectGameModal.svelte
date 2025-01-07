<script lang="ts">
	import { players } from '$lib/store';
 	let {
		onClose,
		gameOptions = {
			name: 'Игра 1',
			maxPlayers: 4,
			time: { minutes: 30, seconds: 0 },
			timeformove: { minutes: 1, seconds: 0 },
			id: 1,
			spectate: false
		},
	}: {
		onClose: () => void;
		gameOptions?: {
			name: string;
			maxPlayers: number;
			time: { minutes: number; seconds: number };
			timeformove: { minutes: number; seconds: number };
			id: number;
			spectate: boolean;
		};
	} = $props();



	function joinToGame() {
		window.location.href = "/game"
	}
</script>

<div class="shadow">
	<div class="modal">
		<div class="area">
			<p class="shd_blue"><b></b>Описание игры :</p>
			<p class="text">
				– компьютерная игра по информационной безопасности,в игре используются базовые элементы
				информационной безопасности в соответствии с требованиями о защите информации, не
				составляющей государственную тайну, содержащейся в государственных информационных системах
			</p>
			<p class="shd_blue">Первый ход.</p>
			<p class="text">
				Первый ход начинается с приобретения карт для защиты своих объектов, покупать карты для
				атаки соперников на первом ходу не допускается. Для покупки карт пользователь должен
				кликнуть на один из своих объектов, выбирать одну из предложенных карт и нажать на нее.
				Каждая карта имеет свою стоимость.
			</p>
		</div>
		<div class="main">
			{#each players as player}
				<div class="player">
					<img src={player.avatar} alt="" class="avatar" />
					<p class="username">{player.username}</p>
					<svg 
						class="user_vector"
						width="261"
						height="1"
						viewBox="0 0 261 1"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line y1="0.5" x2="261" y2="0.5" stroke="#2C4194" />
					</svg>
				</div>
			{/each}
		</div>
		<div class="topbar">
			<p class="shd_blue" style ='display: inline-block'><b>Игроки:</b></p>
			<p class="shd_orange" style ='display: inline-block'>{players.length}/{gameOptions.maxPlayers}</p>
			<p class="hd">Подключение к игре {gameOptions.name}</p>
			<svg
				class="vector"
				width="424"
				height="1"
				viewBox="0 0 424 1"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line y1="0.5" x2="424" y2="0.5" stroke="#EB7445" />
			</svg>
		</div>
		<div class="footer">
			<button class="clos_btn" onclick={onClose}><b>Выйти из игры</b></button>
			<button class="join_btn" onclick={joinToGame}><b>Готов</b></button>
		</div>
	</div>
</div>

<style>

	.shadow {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.1);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(30px);
		padding: 72px;
	}

	.modal {
		border: #2c4194 35px solid;
		display: grid;
		grid-template-columns: 2.5fr 1fr;
		grid-template-rows: 0.7fr 4fr 0.5fr;
		gap: 0px 0px;
		grid-template-areas:
			'topbar area'
			'main area'
			'footer footer';
		position: relative;
		width: 100%;
		height: 100%;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.area {
		grid-area: area;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-area: main;
	}
	.topbar {
		grid-area: topbar;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer {
		grid-area: footer;
		display: flex;
		justify-content: center;
		align-items: center;
		gap:100px;
	}
	.shd_blue {
		color: #2c4194;
		font-size: 24px;
		margin: 0;
	}
	.shd_orange {
		color: #eb7445;
		font-size: 24px;
		margin: 0px;
	}
	.clos_btn {
		background: rgba(235, 116, 69, 0.18);
		color: #EB7445;
		font-size: 24px;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 10px;
		cursor: pointer;
		padding: 5px 30px 5px 30px;
		border: none;
		text-decoration: none;
		border-radius: 40px;
		height: 50px;
	}
	.join_btn {
		background:  rgb(44, 65, 148, 0.26);
		color: #2C4194;
		font-size: 24px;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 10px;
		cursor: pointer;
		padding: 5px 30px 5px 30px;
		border: none;
		text-decoration: none;
		border-radius: 40px;
		height: 50px;
	}
.text {
		font-weight: bold;
		color: #eb7445;
		font-style: italic;
		text-align: center;
		font-weight: 900;
		font-size: 20px;
		margin: 5px;
	}
	.hd {
		font-weight: bold;
		font-style: italic;
		font-size: 28px;
		color: #2c4194;
		font-weight: 600;
		position: relative;
		margin-left: 160px;
	}
	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: #2C4194 2px solid;
	}
	.vector {
		position: relative;
		top: 25px;
		right: 385px;
	}
	.username {
		font-size: 20px;
		font-style: italic;
		color: #2C4194;
		font-weight: 600;
		position: relative;
		top: 15px;
		left: 10px;
}
.user_vector {
		position: relative;
		top: 60px;
		right: 60px;
		
}
		.player {
		display: flex;
		gap: 10px;
		position: relative;
		top: 10px;
		left: 10px;
	}
</style>
