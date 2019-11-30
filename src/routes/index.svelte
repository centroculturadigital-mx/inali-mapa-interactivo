<script>


  import { tap } from '@sveltejs/gestures';

  import { TweenLite, Elastic, Circ } from "gsap";


	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte'

  import FamiliaVentana from "../componentes/contenedores/Lenguas/FamiliaVentana.svelte";
  import TwitterVentana from "../componentes/contenedores/Twitter/Twitter.svelte";
  import Informacion from "../componentes/contenedores/Informacion/Informacion.svelte";
  import Homenaje from "../componentes/contenedores/Homenaje/Homenaje.svelte";
  
  // import VolutaTexto from "../componentes/VolutaTexto.svelte";

  import Ventanas from "../componentes/contenedores/Ventanas/Ventanas.svelte";

  import Drag from "../componentes/general/DragDrop/Drag.svelte";
  import Mapa from "../componentes/Mapa/Mapa.svelte";

  import { fade } from "svelte/transition";


  import posDrag from "../datos/posDrag.js"



  import FondoLineas from "../componentes/animacion/FondoLineas.svelte";
  
	import CanvasSetup from "../componentes/animacion/CanvasSetup.svelte";
	import GSAP1 from "../componentes/animacion/GSAP1.svelte";
	import FormaAudio from "../componentes/animacion/FormaAudio.svelte";
	import FraseViva from "../componentes/animacion/FraseViva.svelte";

	import { onMount, setContext } from 'svelte';

  let svgFrases;
  let canvas;
  let canvasFrases;
  
  let familiasModule
  
  const win = typeof window !== "undefined" ? window : null;

  let ingreso;


  const zonasDrag = {}


  $: height = win ? win.innerHeight : 0;
  $: width = win ? win.innerWidth : 0;

  $: familias = familiasModule ? familiasModule.default : [];
  



  $: drags = !! familias ? familias.map(f=>({id: f.id, x:0,y:0})) : []

  let currentDrag

  import { daDrags } from '../stores/drags.js';

	
  setContext('drag',{
    getDrags: () => daDrags
  })

	onMount( async ()=>{

    familiasModule = await import("../datos/familias.json");

  
    setTimeout(()=>{
      drags = drags;
    })

		// let ctx = canvas.getContext('2d')        
    //     ctx.globalCompositeOperation = 'difference';


	})




  const seleccionar = (e) => {

    const {
      idZona,
      x,
      y,
      idFamilia
    } = {...e.detail}

    console.log(idZona,
      x,
      y,
      idFamilia);
    
    

    if (!!idZona) {
     
      let familia = familias.find(f=>f.id==idFamilia)

      let v = crearVentana("familia",x,y, { familia })
        
    } 
  };


  let mostrarInformacion = false;
  let mostrarTwitter = false;
  let mostrarHomenaje = false;
  let mostrarVolutaTexto = false;
  let mostrarFrase = false;

  const crearVentana = (tipo, x, y, props={}) => {
    
    if( ! typeof props == "object") {
      props = {}
    }

    let nuevaVentana = {

      indice:ventanas.length,
      origen: {
          x,
          y
      },
      left: x,
      top: y,
      tipo: tipo,
      props
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
    let otra = ventanas.find(v=>v.tipo=="homenaje")
    
    if( ! ventana ) {
      crearVentana("informacion",window.innerWidth-(336),window.innerHeight-320)
    } else {
      destruirVentana(ventana)
    }
    
    if( !! otra ) {
      destruirVentana(otra)
    }

  }
  const alternarHomenaje = (x,y) => {
    
    let ventana = ventanas.find(v=>v.tipo=="homenaje")
    let otra = ventanas.find(v=>v.tipo=="informacion")

    if( ! ventana ) {
      crearVentana("homenaje",window.innerWidth-(336),window.innerHeight-390);
    } else {
      destruirVentana(ventana)
    }
    
    if( !! otra ) {
      destruirVentana(otra)
    }

  }

  const encenderFrase = (x,y) => {
    
    mostrarFrase = true;

    setTimeout(()=>{
      mostrarFrase = false;
    }, 17000 )
    
  }
  const apagarFrase = (x,y) => {
    
    mostrarFrase = false;

  }

  const CerrarTwitter = () => {
    mostrarTwitter = false;
    
  };
  const tapBotones = (e) => {
    if(e.target.getAttribute("class").includes("TwitterBoton") ) {
      alternarTwitter(e.detail.x,e.detail.y)
    }

    if(e.target.getAttribute("class").includes("VolutaBoton") ) {
      encenderFrase(e.detail.x,e.detail.y)
    }

    if(e.target.getAttribute("class").includes("HomenajeBoton") ) {
      alternarHomenaje(e.detail.x,e.detail.y)
    }

    if(e.target.getAttribute("class").includes("InformacionBoton") ) {
      // console.log("InformacionBoton");
      
      alternarInformacion(e.detail.x,e.detail.y)
    }
    
  }



  let ventanas = []
  

  const cerrarVentana = (e) => {
    let cerrarEvento = e.detail.e
    // console.log("cV",cerrarEvento);
    
    if( !! cerrarEvento && !! cerrarEvento.detail ) {
      let familiaId = cerrarEvento.detail.familia

      if(!!familiaId) {
        let p = posDrag.find(p=>p.id==familiaId)
  
        let item = document.getElementById(`${familiaId}-drag`)
        let drop = document.getElementById(`${familiaId}-drop`)
        drop.style.fillOpacity=0 
        drop.style.strokeOpacity=0 
        // item.style.webkitTransform = 
        // item.style.transform = `translate( ${p.posicion[0]}px, ${ p.posicion[1]}px)`

  // console.log("to!!");
  
        TweenLite.set(item,{
          x:item.getBoundingClientRect().left,y:item.getBoundingClientRect().top,ease: Circ.ease          
        })
        TweenLite.to(item,1.3,{
          x:p.posicion[0],y:p.posicion[1],ease: Circ.ease          
        })
        TweenLite.fromTo(
          item,3,
          {rotation:90, ease: Elastic.easeIn, transformOrigin:"50% 50%"},
          {rotation:0, ease: Elastic.easeOut, transformOrigin:"50% 50%"}
        )
        
        setTimeout(() => {
          item.style.webkitTransform = item.style.transform = `translate(${p.posicion[0]}px, ${p.posicion[1]}px)`;

        }, 600)
        // item.setAttribute("data-x", p.posicion[0]);
        // item.setAttribute("data-y", p.posicion[1]);
        // console.log("cerrar familiaId",familiaId, item, p);

      }
    }

    
    destruirVentana(e.detail.ventana)

  }



  const manejarDrag = (id,d)=>{
    
    let drag = drags.find(drag=>drag.id==id)
    
    drag = {
      ...drag,
      x:d.x,
      y:d.y,
    }

    currentDrag = drag.id

    drags = drags

    // console.log("manejarDrag",drag.id,d.x,d.y);
    
    daDrags[id].set( drag );
    
    zonasDrag[id] = true

  }


  const manejarDragEnd = (id) => {
    
    delete zonasDrag[id.split("-drag")[0]]

    zonasDrag = zonasDrag

  }

</script>

<style>


  svg {
    transition: opacity 3s ease-in-out;
  }

  .activo,
  canvas.activo,
  svg.activo {
    opacity: 1 !important;
  }
  svg.inactivo {
    opacity: 0.1 !important;
  }

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
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* opacity: 0.5; */
  }

  canvas#frases {
    z-index: 70;
    pointer-events: none;
    /* background-color: rgba(99, 119, 137,0.3); */
  }
  
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* opacity: 1; */
		/* z-index: -1; */
  }


  .FraseViva__Cerrar {
    position: absolute;
    right: 6rem;
    top: 6rem;
    background: none;
    color: #fff;
    opacity: 0.3;
    font-size: 1.35rem;
    
    z-index: 200;
    border: none;
    cursor: pointer;
  }

</style>

  <canvas id="fondo" bind:this={canvas}></canvas>

    <!-- viewBox="37.47777777777779 37.591661213362585 35.5 19.959004392386532" -->
  <svg class={ mostrarFrase ? "activo" : "inactivo" } id="svg-frasesvivas"  bind:this={svgFrases}></svg>
  <!--
  width={width + 'px'}
  height={height + 'px'} -->
  
  <svg id="svg-intersecciones"></svg>



  {#if !! canvas }
    <CanvasSetup canvas={canvas}/>
  {/if}

  {#if !! canvasFrases }
    <CanvasSetup canvas={canvasFrases}/>
  {/if}

<svelte:head>
  <title>INALI | Mapa interactivo</title>
</svelte:head>

{#if typeof window !== "undefined" }


<Cabecera
  {
    ...{
      alternarInformacion,
      alternarHomenaje,
    }
  }
  on:tap={(e)=>tapBotones(e)} 
/>


<Drag drag={manejarDrag} dragEnd={manejarDragEnd}/>


{#if !! canvas }

  <CanvasSetup canvas={canvas}/>
  <GSAP1 canvas={canvas}/> 
  <FondoLineas canvas={canvas}/>

  {#if !! mostrarFrase }
    <button class="FraseViva__Cerrar" on:click={apagarFrase}>
      <span>
        Cerrar
      </span>
      <i class="fa fa-close"></i>
    </button>
    <FraseViva canvas={canvasFrases} svg={svgFrases} mostrar={mostrarFrase}/>
  {/if}
  
{/if}

<main>
  <!-- Interactividad -->




  <!-- Elementos -->

  <Mapa
  on:seleccionar={seleccionar}
  on:tap={(e)=>tapBotones(e)} 
  mostrar={!mostrarFrase} 
  zonasDrag={zonasDrag}
  />
  
  <!-- <Mapa on:seleccionar={seleccionar} on:tap={(e)=>tapBotones(e)} canvas={canvas}/> -->

  <!-- <Mapa on:seleccionar={console.log("aosijvieurn")}/> -->

  <!-- 
    <div class="FamiliaVentana" transition:fade>
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


  <!-- {#if ! mostrarFrase }
  {/if} -->


  <canvas class={ mostrarFrase ? "activo" : "inactivo" } id="frases" bind:this={canvasFrases}></canvas>

</main>





<Pie />

{/if}