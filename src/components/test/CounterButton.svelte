<script lang="ts">
    
    let { counter  = $bindable()}  = $props()
    
    
   
</script>
<div class="counter">
<button aria-label="button" class="counter__minus" onclick={() => counter--} disabled={counter <= 2}>
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.13286e-07 8.5L14.25 0.272759L14.25 16.7272L1.13286e-07 8.5Z" fill="#EB7445"/>
        </svg>        
</button>
<p >{counter}</p>
<button aria-label="button" class="counter__minus" onclick={() => counter++} disabled={counter >= 6}> 
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8.5L0.75 16.7272V0.272759L15 8.5Z" fill="#EB7445"/>
        </svg>
</button>
</div>
<style>
    .counter__minus {
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .counter {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
        bottom: 40px;
    }
</style>