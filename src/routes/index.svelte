<script>

	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte'


  import Drag from "../componentes/general/DragDrop/Drag.svelte";
  import Mapa from "../componentes/Mapa/Mapa.svelte";
  import FamiliaVentana from "../componentes/contenedores/Lenguas/FamiliaVentana.svelte";
  import VolutaTexto from "../componentes/VolutaTexto.svelte";

  import { fade } from "svelte/transition";

  import familiasFake from "../../datosFalsos/familiasFake";

  import Informacion from "../componentes/contenedores/Informacion/Informacion.svelte";
  import TwitterVentana from "../componentes/contenedores/Twitter/Twitter.svelte";
  import Homenaje from "../componentes/contenedores/Homenaje/Homenaje.svelte";


  import VolutaBoton from "../componentes/VolutaBoton.svelte";
  import TwitterBoton from "../componentes/TwitterBoton.svelte";


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
		color: var(--color-texto);
  }
  

  .TwitterBoton {
    position: absolute;
    top: 10rem;
    left: 50rem;
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
    left: 5rem;
    bottom: 6rem;
  }

  /* .VolutaBoton {
    position: absolute;
    left: 53rem;
    bottom: 16rem;
  } */

   .VolutaTexto {
    position: absolute;
    left: 23rem;
    bottom: 2rem;
  }

  .FamiliaVentana {
    position: absolute;
    left: 3rem;
    bottom: 4rem;
  }

  

</style>

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
  <!-- Elementos -->
  <Mapa on:seleccionar={seleccionar} />
  <!-- <Mapa on:seleccionar={console.log("aosijvieurn")}/> -->

  {#if !!familiaMostrar}
    <div class="FamiliaVentana" transition:fade>
      <FamiliaVentana familia={familiaMostrar} cerrar={cerrar} />
    </div>
  {/if}


  {#if mostrarInformacion  }
    <div class="Informacion">
      <Informacion/>
    </div>
  {/if}
  {#if mostrarTwitter }
    <div class="TwitterVentana">
        <TwitterVentana on:click={()=>alternarTwitter()}/>
    </div>
  {/if}
  {#if mostrarHomenaje }
    <div class="Homenaje">
      <Homenaje/>
    </div>
  {/if}
  {#if mostrarVolutaTexto }
  <div class="VolutaTexto" transition:fade>
    <VolutaTexto/>
  </div>
  {/if}


</main>

    <VolutaBoton posIniX={10} posIniY={10} on:click={()=>alternarVolutaTexto()}/>
    <VolutaBoton posIniX={20} posIniY={20} on:click={()=>alternarVolutaTexto()}/>
    <VolutaBoton posIniX={30} posIniY={30} on:click={()=>alternarVolutaTexto()}/>


<div class="TwitterBoton">
  <TwitterBoton on:click={()=>alternarTwitter()}/>
</div>


<Pie />
        
