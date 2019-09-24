<script>
	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	export let segment;
</script>

<style>
	main {
		background-color: transparent;
		box-sizing: border-box;
		position: fixed;
		padding: 2em;
		margin: 0 auto;
		height: 100%;
		width: 100%;
	}
</style>

<Cabecera />

<main>
	<slot></slot>
</main>
