<script>

	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte'

  import FamiliaVentana from "../componentes/contenedores/Lenguas/FamiliaVentana.svelte";
  import TwitterVentana from "../componentes/contenedores/Twitter/Twitter.svelte";
  import Informacion from "../componentes/contenedores/Informacion/Informacion.svelte";
  import Homenaje from "../componentes/contenedores/Homenaje/Homenaje.svelte";
  
  import VolutaTexto from "../componentes/VolutaTexto.svelte";

  import Ventanas from "../componentes/contenedores/Ventanas/Ventanas.svelte";

  import Drag from "../componentes/general/DragDrop/Drag.svelte";
  import Mapa from "../componentes/Mapa/Mapa.svelte";

  import { fade } from "svelte/transition";

  import familiasFake from "../../datosFalsos/familiasFake";





	import GSAP1 from "../componentes/animacion/GSAP1.svelte";
	import FormaAudio from "../componentes/animacion/FormaAudio.svelte";
	import FraseViva from "../componentes/animacion/FraseViva.svelte";

	import { onMount } from "svelte"

	let canvas;

	onMount(()=>{

		let ctx = canvas.getContext('2d')        
        ctx.globalCompositeOperation = 'difference';


	})


  let familiaMostrar;


  const seleccionar = e => {
    const id = e.detail.id;

    if (!!id) {
      familiaMostrar =
        familiasFake[Math.floor(Math.random() * familiasFake.length)];
    } else {
      familiaMostrar = null;
    }
  };

  const cerrar = () => {
    familiaMostrar = null;
  };

  let mostrarInformacion = false;
  let mostrarTwitter = false;
  let mostrarHomenaje = false;
  let mostrarVolutaTexto = false;

  const alternarInformacion = () => {
    mostrarInformacion = !mostrarInformacion;
    if (mostrarInformacion) {
      mostrarHomenaje = false;
    } 
    console.log("alternarInformacion",mostrarInformacion);
  }
  const alternarTwitter = () => {
    mostrarTwitter = !mostrarTwitter;
    console.log("alternarTwitter",mostrarTwitter);
  }
  const alternarHomenaje = () => {
    mostrarHomenaje = !mostrarHomenaje;
    if (mostrarHomenaje){
      mostrarInformacion = false;
    } 
    console.log("alternarHomenaje",mostrarHomenaje);
  }

  const alternarVolutaTexto = () => {
    mostrarVolutaTexto = !mostrarVolutaTexto;
    console.log("alternarVolutaTexto",mostrarVolutaTexto);
  }

  const tapBotones = (e) => {
    
    if(e.target.getAttribute("class").includes("TwitterBoton") ) {
      alternarTwitter()
    }

    if(e.target.getAttribute("class").includes("VolutaBoton") ) {
      alternarVolutaTexto()
    }
    
  }


</script>

<style>

	main {
		background-color: transparent;
		box-sizing: border-box;
		position: fixed;
    z-index: 0;
		padding: 1rem;
		margin: 0 auto;
		height: 100%;
		width: 100%;
		color: var(--color-texto);
  }
  
  .Homenaje {
    position: absolute;
    top: .75rem;
    right: 5rem;
  }

  .Informacion {
    position: absolute;
    top: .75rem;
    right: 5rem;
  }

  .TwitterVentana {
    position: absolute;
    left: 49rem;
    bottom: 12rem;
    z-index: 1001;
  }

   .VolutaTexto {
    position: absolute;
    left: 23rem;
    bottom: 2rem;
    z-index: 1001;
  }

  .FamiliaVentana {
    position: absolute;
    left: 3rem;
    bottom: 4rem;
    z-index: 1001;
  }
	canvas {
		background-color: #465D72;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}

</style>


<canvas bind:this={canvas}></canvas>

{#if !! canvas }
	<!-- <GSAP1 canvas={canvas}/>
	<FormaAudio canvas={canvas}/> -->
<!-- 
<FraseViva canvas={canvas}/> -->
{/if}


<svelte:head>
  <title>INALI | Mapa interactivo</title>
</svelte:head>


<Cabecera
  {
    ...{
      alternarInformacion,
      alternarHomenaje,
    }
  }
/>


<main>
  <!-- Interactividad -->
  <Drag />


    <!-- <TwitterBoton posIniX={58} posIniY={20} on:click={()=>alternarTwitter()}/>
    <TwitterBoton posIniX={18} posIniY={20} on:click={()=>alternarTwitter()}/> -->



  <!-- Elementos -->
  <Mapa on:seleccionar={seleccionar} on:tap={(e)=>tapBotones(e)} />
  <!-- <Mapa on:seleccionar={console.log("aosijvieurn")}/> -->

  <!-- {#if !!familiaMostrar}
    <div class="FamiliaVentana" transition:fade>
      <FamiliaVentana familia={familiaMostrar} cerrar={cerrar} />
    </div>
  {/if}
  {#if mostrarTwitter }
    <div class="TwitterVentana" transition:fade>
        <TwitterVentana on:click={()=>alternarTwitter()}/>
    </div>
  {/if} -->

  <Ventanas/>

  <!-- {#if mostrarInformacion }
    <div class="Informacion" transition:fade>
      <Informacion on:click={()=>alternarInformacion()}/>
    </div>
  {/if}
  {#if mostrarHomenaje }
    <div class="Homenaje" transition:fade>
      <Homenaje on:tap={()=>alternarHomenaje()}/>
    </div>
  {/if} -->


  {#if mostrarVolutaTexto }
  <div class="VolutaTexto" transition:fade>
    <VolutaTexto/>
  </div>
  {/if}


</main>





<Pie />
        
