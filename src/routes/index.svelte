<script>

  import { tap } from '@sveltejs/gestures';

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
    const x = e.detail.x;
    const y = e.detail.y;

    if (!!id) {
      familiaMostrar =
        familiasFake[Math.floor(Math.random() * familiasFake.length)];

        let v = crearVentana("familia",x,y)
        v.props.familia = familiaMostrar
        
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

  const crearVentana = (tipo, x, y) => {
    
    let nuevaVentana = {
      indice:ventanas.length,
      origen: {
          x,
          y
      },
      left: x,
      top: y,
      tipo: tipo,
      props: {}
    }


    if( ventanas.length == 0 ) {
      nuevaVentana.acomodada = true
    }

    ventanas.push( nuevaVentana )
    
    ventanas = ventanas
    
    return nuevaVentana

  }

  const destruirVentana = (ventana) => {
    ventanas = ventanas.filter(v=>v.indice!=ventana.indice)
  }


  const alternarTwitter = (x,y) => {
    // mostrarTwitter = !mostrarTwitter;
    let ventana = ventanas.find(v=>v.tipo=="twitter")

    if( ! ventana ) {
      crearVentana("twitter",x,y)
    } else {
      destruirVentana(ventana)
    }

  }



  const alternarInformacion = (x,y) => {
    
    let ventana = ventanas.find(v=>v.tipo=="informacion")

    if( ! ventana ) {
      crearVentana("informacion",x,y)
    } else {
      destruirVentana(ventana)
    }

  }
  const alternarHomenaje = (x,y) => {
    
    let ventana = ventanas.find(v=>v.tipo=="homenaje")

    if( ! ventana ) {
      crearVentana("homenaje",x,y)
    } else {
      destruirVentana(ventana)
    }

  }

  const alternarVolutaTexto = (x,y) => {
    // mostrarVolutaTexto = !mostrarVolutaTexto;
    console.log("alternarVolutaTexto",mostrarVolutaTexto);
  }

  const CerrarTwitter = () => {
    mostrarTwitter = false;
    
  };
  const tapBotones = (e) => {
    if(e.target.getAttribute("class").includes("TwitterBoton") ) {
      alternarTwitter(e.detail.x,e.detail.y)
    }

    if(e.target.getAttribute("class").includes("VolutaBoton") ) {
      alternarVolutaTexto(e.detail.x,e.detail.y)
    }

    if(e.target.getAttribute("class").includes("HomenajeBoton") ) {
      alternarHomenaje(e.detail.x,e.detail.y)
    }

    if(e.target.getAttribute("class").includes("InformacionBoton") ) {
      console.log("InformacionBoton");
      
      alternarInformacion(e.detail.x,e.detail.y)
    }
    
  }



  let ventanas = []
  

  const cerrarVentana = (e) => {

    destruirVentana(e.detail.ventana)

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
	<GSAP1 canvas={canvas}/>
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
  on:tap={(e)=>tapBotones(e)} 
/>


<main>
  <!-- Interactividad -->
  <Drag />




  <!-- Elementos -->
  <Mapa on:seleccionar={seleccionar} on:tap={(e)=>tapBotones(e)} />
  <!-- <Mapa on:seleccionar={console.log("aosijvieurn")}/> -->

  <!-- 
  {#if !!familiaMostrar}
    <div class="FamiliaVentana" transition:fade>
      <FamiliaVentana familia={familiaMostrar} cerrar={cerrar} />
    </div>
  {/if}
  {#if mostrarTwitter }
    <div class="TwitterVentana" transition:fade>
        <TwitterVentana on:click={()=>alternarTwitter()}/>
    </div>
  {/if} -->

  <Ventanas ventanas={ventanas} on:cerrar={cerrarVentana}/>

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



  {#if !! canvas }
    <!-- <FormaAudio canvas={canvas}/> -->
  {/if}


</main>





<Pie />
        
