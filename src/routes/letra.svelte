<script>


  import { tap } from '@sveltejs/gestures';

  import { TweenLite, Elastic, Circ } from "gsap";


    import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
    import Pie from '../componentes/general/Pie/Pie.svelte'

    import LetraIntersecciones from "../componentes/animacion/LetraIntersecciones.svelte";

	import { onMount } from "svelte"





</script>

<style>

</style>



<svelte:head>
  <title>INALI | Mapa interactivo</title>
</svelte:head>



<main>
 
  <LetraIntersecciones/>

</main>


<Pie />        