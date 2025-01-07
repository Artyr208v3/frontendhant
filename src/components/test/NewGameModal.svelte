<script lang="ts">
	import CounterButton from './CounterButton.svelte';
	import TimeCounterButton from './TimeCounterButton.svelte';

	let {
		onClose,
		onNewGameOpened,
		gameOptions = $bindable(),
	}: {
		onClose: () => void;
		onNewGameOpened: () => void;
		gameOptions: {
			name: string;
			maxPlayers: number;
			time: { minutes: number; seconds: number };
			timeformove: { minutes: number; seconds: number };
			id: number;
			spectate: boolean;
		};
	} = $props();


	function newGame() {
		onNewGameOpened();
		onClose();
	}
</script>

<div class="shadow">
	<div class="modal">
		<button class="close_modal" onclick={onClose}>
			<svg
				width="33"
				height="24"
				viewBox="0 0 33 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10 1.66666L1.875 8.33332L10 15"
					stroke="#EB7445"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M1.875 8.33331H14.875C23.8499 8.33331 31.125 14.3026 31.125 21.6666V23"
					stroke="#EB7445"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<p class="back">Назад</p>
		</button>
		<p class="hd">Создание игры</p>
		<svg
			class="vector"
			width="40"
			height="37"
			viewBox="0 0 40 37"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M15 0L27.9904 22.5H2.00962L15 0Z" fill="#EB7445" />
			<path d="M23.2485 3.1448L35.3522 28.0747L7.71045 26.0919L23.2485 3.1448Z" fill="#2C4194" />
		</svg>
		<svg
			class="line"
			width="347"
			height="1"
			viewBox="0 0 347 1"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line y1="0.5" x2="347" y2="0.5" stroke="url(#paint0_linear_22_10)" />
			<defs>
				<linearGradient
					id="paint0_linear_22_10"
					x1="0"
					y1="1.5"
					x2="347"
					y2="1.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#EB7445" stop-opacity="0" />
					<stop offset="0.545" stop-color="#EB7445" />
					<stop offset="1" stop-color="#EB7445" stop-opacity="0" />
				</linearGradient>
			</defs>
		</svg>

		<p class="shd">Название игры:</p>
		<input
			type="text"
			placeholder="Введите название игры"
			class="input"
			bind:value={gameOptions.name}
		/>
		<p class="shd">Количество игроков:</p>
		<CounterButton bind:counter={gameOptions.maxPlayers} />
		<p class="shd">Длительность раунда</p>
		<TimeCounterButton
			little={false}
			bind:minutes={gameOptions.time.minutes}
			bind:seconds={gameOptions.time.seconds}
		/>
		<p class="shd">Длительность ходов игроков</p>
		<TimeCounterButton
			little={true}
			bind:minutes={gameOptions.timeformove.minutes}
			bind:seconds={gameOptions.timeformove.seconds}
		/>
		<p class="shd">Режим наблюдения</p>
		<input type="checkbox" class="toggle" bind:checked={gameOptions.spectate} />
		<button class="submit" onclick={newGame}><p class="hd">Создать</p></button>
		<svg
			class="line1"
			width="188"
			height="1"
			viewBox="0 0 188 1"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line y1="0.5" x2="188" y2="0.5" stroke="url(#paint0_linear_22_46)" />
			<defs>
				<linearGradient
					id="paint0_linear_22_46"
					x1="0"
					y1="1.5"
					x2="188"
					y2="1.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#EB7445" stop-opacity="0" />
					<stop offset="0.545" stop-color="#EB7445" />
					<stop offset="1" stop-color="#EB7445" stop-opacity="0" />
				</linearGradient>
			</defs>
		</svg>
	</div>
</div>

<style>
	.submit {
		position: relative;
		background: none;
		border: none;
		cursor: pointer;
	}

	.toggle {
		appearance: none;
		width: 40px;
		height: 20px;
		background: #eb7445;
		border-radius: 20px;
		position: relative;
		cursor: pointer;
		transition: 0.3s;
		outline: none;
		border: none;
		bottom: 40px;
	}

	.toggle::before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		background: white;
		border-radius: 50%;
		top: 0;
		left: 0;
		transition: 0.3s;
	}

	.toggle:checked::before {
		transform: translateX(20px);
	}
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
	}

	.modal {
		z-index: 101;
		background: white;
		display: flex;
		flex-direction: column;
		padding-left: 40px;
		padding-right: 40px;
		border-radius: 20px;
		align-items: center;
		justify-content: center;
	}

	.shd {
		font-size: 20px;
		color: #2c4194;
		font-weight: 600;
		margin-bottom: 10px;
		position: relative;
		bottom: 50px;
	}

	.input {
		width: 100%;
		height: 40px;
		border-radius: 10px;
		border: 1px solid #eb7445;
		padding: 0 10px;
		margin-bottom: 10px;
		font-size: 24px;
		background: rgba(235, 116, 69, 0.06);
		color: #eb7445;
		position: relative;
		bottom: 50px;
	}
	.input::placeholder {
		color: #eb7445;
	}

	.input:focus {
		outline: none;
		border: 1px solid #eb7445;
	}

	.hd {
		font-weight: bold;
		font-style: italic;
		font-size: 24px;
		color: #2c4194;
		font-weight: 600;
		position: relative;
	}
	.vector {
		position: relative;
		left: 100px;
		bottom: 50px;
	}
	.line {
		position: relative;
		bottom: 50px;
	}
	.close_modal {
		cursor: pointer;
		border: none;
		background: none;
		position: relative;
		right: 150px;
		top: 20px;
		display: flex;
	}
	.back {
		color: #eb7445;
		font-size: 16px;
		margin-left: 10px;
		cursor: pointer;
	}
	.line1 {
		position: relative;
		bottom: 20px;
	}
</style>
