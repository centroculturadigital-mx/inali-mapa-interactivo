<script>

  import interact from 'interactjs'
  import { tap } from '@sveltejs/gestures';

  

  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import AgrupacionesLista from "./AgrupacionesLista.svelte";
  import Slider from "../Slider/Slider.svelte";
  import Fa from "../../../../node_modules/svelte-fa/dist/svelte-fa.mjs";
  import {
    faTimesCircle,
    faChevronDown
  } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  // datos falsos
  import lenguas from "../../../../datosFalsos/lenguasFake";

  export let familia;
  export let cerrar;

  let cierraIcono = faTimesCircle;
  let abajoIcono = faChevronDown;

  let detalleMostrar = false;



  const mostrarDetalle = () => {
    detalleMostrar = !detalleMostrar;
  };
  const cerrarDetalle = () => {
    detalleMostrar = false;
  };
  

  function cerrarVentana() {
    if (typeof cerrar === "function") {
      cerrar();
    }
  }

  // let botonFamiliaVentanaCerrar
  let contenedor

  let ultimoTouchMoveY
  let ultimoTouchMoveX

  let ultimoScrollVentanaY = 0
  let ultimoScrollVentanaX = 0

  onMount(()=>{

    // botonFamiliaVentanaCerrar.addEventListener("touchstart",cerrarVentana)

    if(!!contenedor) {

      interact(contenedor)
      .draggable({
        autoScroll:true,
        onstart: (e) => {
          
          ultimoTouchMoveY = e.clientY
          ultimoTouchMoveX = e.clientX
            
        },
        onmove: (e) => {
          
          let top=contenedor.getBoundingClientRect().top
          let right=contenedor.getBoundingClientRect().right
          let bottom=contenedor.getBoundingClientRect().bottom
          let left=contenedor.getBoundingClientRect().left
          if(
            // adentro verticalmente
            e.clientY > top && e.clientY < bottom
            &&
            // adentro horizontalmente
            e.clientX > left && e.clientX < right
            // &&
            // extremo derecho
            // e.clientX > right - 50
          )  {

            
            let diferenciaY = (ultimoTouchMoveY-e.clientY)
            let diferenciaX = (ultimoTouchMoveX-e.clientX)
            
            
            if( Math.abs(diferenciaX) < Math.abs(diferenciaY) ) {
              
              ultimoScrollVentanaY += diferenciaY

              contenedor.scrollTo({
                top: diferenciaY*30,
                // behavior: 'smooth'
              })
            
            }
            
            ultimoTouchMoveY = e.clientY
            ultimoTouchMoveX = e.clientX
            // const proporcionY = (e.clientY-top)/(bottom-top)
            // const alturaDestino = document.querySelector(".FamiliaVentana").offsetHeight * proporcionY;
            
            
            // contenedor.scrollTo({
            //   top: alturaDestino,
            //   behavior: 'smooth'
  
            // } )
          }
        }
      })
    
    }
  })

  // probando correccion para multitouch:


</script>

<style>
  article {
    max-width: 360px;
    max-height: 420px;
  }

  .VentanaFamiliaWrapper {
    width: auto;
    max-height: 420px;
  }

  .Familia {
    position: relative;
    overflow-y: hidden;
    background: #f7f7f7;
    border-radius: 10px;
  }

  .VentanaFamilia {
    width: 100%;
    height: 100%;
  }

  .BotonCierraWrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 2rem;
  }

  .Encabezado {
    width: 100%;
    height: auto;
  }

  .Titulo {
    text-align: center;
    font-weight: 200;
    font-size: 0.75rem;
    line-height: 1;
    letter-spacing: 0.5rem;
    color: #454344;
    margin: 0;
  }

  .Principal {
    text-align: center;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 3rem;
    text-align: center;
    color: #e6aa30;
    margin: 0;
  }

  .BotonMasWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2rem;
  }

  .Saber {
    border: 1px solid #e6aa30;
    box-sizing: border-box;
    border-radius: 15px;
    color: #e6aa30;
    width: 35%;
    height: auto;
    cursor: pointer;
    background-color: #f7f7f7;
  }

  .ContenedorCarrusel {
    width: 100%;
    height: 300px;
  }

  .ContenedorCarrusel ul {
    margin: .5rem;
    border-radius: 100%;
    bottom: -20px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 8px;
    height: 8px;
  }
  /* .Carrousel {
    padding: 8px 0;
    font-size: 0.5rem;
  } */

  .ContenedorAgrupaciones {
    padding: 0.5rem;
  }
  .Flecha {
    font-size: 24px;
    font-weight: lighter;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c9c9c9;
    width: 100%;
    height: auto;
  }
  .TitulosLista {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    width: 100%;
    height: auto;
  }
   .TituloLista {
    font-weight: bold;
    padding: 0 0.25rem;
  }
  .ListaAgrupaciones {
    width: 100%;
    height: auto;
  }
  .FamiliaDetalle {
    position: absolute;
    left: 0;
    top: 0;
    overflow-y: hidden;
    height: 420px;
    width: 280px;
    /* con slider */
    transform: translateX(359px);
    /* sin slider */
    /* transform: translateX(297px);  */
    z-index: 1001;
  }

</style>

<section class="VentanaFamiliaWrapper">

  <article class="Familia" bind:this={contenedor}>

    <div class="VentanaFamilia">

      <div class="BotonCierraWrapper">
        <button class="BotonConIcono" use:tap on:tap={cerrarVentana}>
          <Fa icon={cierraIcono} class="BotonIcono" />
        </button>
      </div>
      <!--  -->
      <header class="Encabezado">
        <p class="Titulo">FAMILIA</p>
        <!-- <h1 class="Principal">Yuto-nahua</h1> -->
        <h1 class="Principal">{lenguas.familias[0].nombreOriginario}</h1>
      </header>
      <!--  -->
      <div class="BotonMasWrapper">
        <button class="Saber" on:click={mostrarDetalle}>Saber más</button>
      </div>
      <!--  -->
      <div class="ContenedorCarrusel">
        <Slider />
      </div>

      <div class="ContenedorAgrupaciones">
        <span class="Flecha">
          <Fa class="FlechaIcono" icon={abajoIcono} />
        </span>
        <div class="TitulosLista">
          <h6 class="TituloLista">Agrupaciones Lingüísticas</h6>
          <h6 class="TituloLista">Riesgo de desaparición</h6>
        </div>
        <section class="ListaAgrupaciones">
          <AgrupacionesLista />
        </section>
      </div>
    </div>
  </article>
  <!-- muestra detalle -->
  {#if detalleMostrar}
    <div class="FamiliaDetalle" transition:fade>
      <FamiliaDetalle {cerrarDetalle} />
    </div>
  {/if}
</section>
