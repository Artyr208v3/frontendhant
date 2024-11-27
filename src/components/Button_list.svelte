<script lang="ts">
    export let text
    export let on
</script>

<button class="button" on:click={on.click}>
    <p> {text} </p>
</button>

<style>
    .button {
        background-color: #F2DAD0;
        color: #2C4194;
        font-size: 24px;
        text-align: center;
        margin: 10px;
        cursor: pointer;
        padding: 0 30px 0 30px; 
        border: none;
        
    }
</style>