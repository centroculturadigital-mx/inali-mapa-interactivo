<script>
import  Logo  from '../Logo/Logo.svelte'
import  Ayuda  from '../Ayuda/Ayuda.svelte'
</script>

<style>
header {
	padding: 0.5rem;
	position: fixed;
	height: auto;
	width: auto;
	left: 0;
	top: 0;
	z-index: 100000;
}
</style>

<header>

	<Logo />
	<Ayuda />

</header>
