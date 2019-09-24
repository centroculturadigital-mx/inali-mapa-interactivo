<script>
	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
</script>

<style>
	main {
		background-color: transparent;
		box-sizing: border-box;
		position: fixed;
		padding: 1rem;
		margin: 0 auto;
		height: 100%;
		width: 100%;
	}
</style>

<Cabecera />

<main>
	<slot></slot>
</main>
