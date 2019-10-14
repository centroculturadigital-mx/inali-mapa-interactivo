<script>

import { tap } from "@sveltejs/gestures"
import  Logo  from '../Logo/Logo.svelte'
import  Ayuda  from '../Ayuda/Ayuda.svelte'
import  BotonHomenaje  from '../BotonHomenaje/BotonHomenaje.svelte'

</script>

<style>
header {
	padding: 0.5rem;
	position: fixed;
	height: auto;
	width: auto;
	left: 0;
	top: 0;
	z-index: 100;
}
</style>

<header on:click={console.log("DEBUGGGGGG")}>

	<Logo />
	<Ayuda on:tap/>
	<BotonHomenaje on:tap/>

</header>
