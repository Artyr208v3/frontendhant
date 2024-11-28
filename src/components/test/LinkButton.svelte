<script lang="ts">
	let {
		label,
		url
	}: {
		label: string;
		url: string;
	} = $props();
</script>

<a class="link-button" href={url}>{label}</a>

<style>
	.link-button {
		background-color: #f2dad0;
		color: #2c4194;
		font-size: 24px;
		text-align: center;
		margin: 10px;
		cursor: pointer;
		padding: 5px 30px 5px 30px;
		border: none;
		text-decoration: none;
		/* display: block; */
	}
</style>
