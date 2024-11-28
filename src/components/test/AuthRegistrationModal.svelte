<script lang="ts">
	let { onClose, authModal }: { onClose: () => void, authModal: boolean } = $props();
    
    const modals: Array<{ label: string; authModal?: boolean}> = [
		{
			label: 'Никнейм',
		},
		{
			label: "Почта",
            authModal: true
		},
		{
			label: 'Пароль',
            authModal: true
		}
	];
    
</script>

<div class="shadow">
	<div class="modal">
			<button class="close_modal" onclick={onClose}>
				<svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 1.66666L1.875 8.33332L10 15" stroke="#EB7445" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M1.875 8.33331H14.875C23.8499 8.33331 31.125 14.3026 31.125 21.6666V23" stroke="#EB7445" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>					
					<p class="back">Назад</p>
			</button>
		<p class="hd">
            {#if authModal === true}
                Авторизация
            {:else}
                Регистрация
            {/if}
        </p>
        <svg class="vector" width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15_460)">
            <path d="M16.1539 17.3077L9.23082 13.2692L2.30774 17.3077M16.1539 17.3077L9.23082 21.3461M16.1539 17.3077V24.2308L9.23082 28.2692M2.30774 17.3077L9.23082 21.3461M2.30774 17.3077V24.2308L9.23082 28.2692M9.23082 21.3461V28.2692" stroke="#2C4194" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <path d="M23.077 5.76924L16.1539 1.73077L9.23083 5.76924M23.077 5.76924L16.1539 9.8077M23.077 5.76924V12.6923L16.1539 16.7308M9.23083 5.76924L16.1539 9.8077M9.23083 5.76924V12.6923L16.1539 16.7308M16.1539 9.8077V16.7308" stroke="#EB7445" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <g clip-path="url(#clip1_15_460)">
            <path d="M30.7692 17.3077L23.8462 13.2692L16.9231 17.3077M30.7692 17.3077L23.8462 21.3461M30.7692 17.3077V24.2308L23.8462 28.2692M16.9231 17.3077L23.8462 21.3461M16.9231 17.3077V24.2308L23.8462 28.2692M23.8462 21.3461V28.2692" stroke="#47BF89" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_15_460">
            <rect width="18.4615" height="18.4615" fill="white" transform="translate(0 11.5385)"/>
            </clipPath>
            <clipPath id="clip1_15_460">
            <rect width="18.4615" height="18.4615" fill="white" transform="translate(14.6154 11.5385)"/>
            </clipPath>
            </defs>
            </svg>
        <svg class="line" width="347" height="1" viewBox="0 0 347 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="347" y2="0.5" stroke="url(#paint0_linear_22_10)"/>
            <defs>
            <linearGradient id="paint0_linear_22_10" x1="0" y1="1.5" x2="347" y2="1.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EB7445" stop-opacity="0"/>
            <stop offset="0.545" stop-color="#EB7445"/>
            <stop offset="1" stop-color="#EB7445" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
		
            {#each modals as modal}
                {#if authModal === true}   
                {#if modal.authModal === true} 
                <p class="shd">{modal.label}</p>
                <input type="text" class="input"> 
                {/if}
                {:else}
                <p class="shd">{modal.label}</p>
                <input type="password" class="input">
                {/if}
                
            {/each}
				<button class ="submit"><p class="hd">Создать</p></button>
	</div>
</div>

<style>

    .submit {
        position: relative;
        background: none;
        border: none;
        cursor: pointer;
        bottom: 40px;
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
		justify-content: center ;
		
	}

	.shd {
		font-size: 20px;
		color: #2C4194;
		font-weight: 600;
		margin-bottom: 10px;
		position: relative;
		bottom: 50px;
		
	}

	.input {
		width: 100%;
		height: 40px;
		border-radius: 10px;
		border: 1px solid #EB7445;
		padding: 0 10px;
		margin-bottom: 10px;
		font-size: 24px;
		background: rgba(235, 116, 69, 0.06);
		color: #EB7445;
		position: relative;
		bottom: 50px;
	}
	.input::placeholder {
		color: #EB7445;
	}

	.input:focus {
		outline: none;
		border: 1px solid #EB7445;
	}

	.hd {
		font-weight: bold;
		font-style:italic;
		font-size: 24px;
		color: #2C4194;
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
	.close_modal{
		cursor: pointer;
		border: none;
		background: none;
		position: relative;
		right: 150px;
		top: 20px;
		display: flex;
		}
	.back{
		color: #EB7445;
		 font-size: 16px ;
		  margin-left: 10px;
		  cursor: pointer;
	}
</style>
