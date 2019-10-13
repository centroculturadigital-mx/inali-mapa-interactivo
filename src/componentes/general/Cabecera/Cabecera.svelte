<script>
import  Logo  from '../Logo/Logo.svelte'
import  Ayuda  from '../Ayuda/Ayuda.svelte'
import  BotonHomenaje  from '../BotonHomenaje/BotonHomenaje.svelte'

export let alternarInformacion
export let alternarHomenaje

</script>

<style>
header {
	padding: 0.5rem;
	position: fixed;
	height: auto;
	width: auto;
	left: 0;
	top: 0;
	z-index: -1;
}
</style>

<header>

	<Logo />
	<Ayuda on:click={()=>alternarInformacion()}/>
	<BotonHomenaje on:click={()=>alternarHomenaje()}/>

</header>
