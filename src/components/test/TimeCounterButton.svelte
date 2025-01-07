<script lang="ts">

  let {little, minutes = $bindable(0), seconds = $bindable(0)}: {little: boolean, minutes: number, seconds: number} = $props();

  // function updateCounter() {
  //    counter = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;   
  // }

  function increment() {
    if (little) {
      seconds += 1;
    }
    else{ minutes += 1;}
   
    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }

    // updateCounter();
  }

  function decrement() {
    if (seconds > 0) {
        if (little) {
          seconds -= 1;
        }
        else{ minutes -= 1; }
    } else if (minutes > 0) {
      minutes -= 1;
      seconds = 0;
    }

    // updateCounter();
  }


</script>
<div class="counter">
<button aria-label="button" class="counter__minus" onclick={decrement} >
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.13286e-07 8.5L14.25 0.272759L14.25 16.7272L1.13286e-07 8.5Z" fill="#EB7445"/>
        </svg>        
</button>
<p>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
<button aria-label="button" class="counter__minus" onclick={increment} disabled={minutes >= 30}> 
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