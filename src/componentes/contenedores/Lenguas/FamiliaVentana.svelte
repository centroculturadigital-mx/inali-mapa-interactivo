<script>

  import interact from 'interactjs'
  import { tap } from '@sveltejs/gestures';

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();


  const cerrar = () => {
    console.log(familia);
    
    dispatch("cerrar", { familia: !! familia ? familia.id : null })
    
  }
  

  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import AgrupacionesLista from "./AgrupacionesLista.svelte";
  import Slider from "../Slider/Slider.svelte";
  // import Fa from "../../../../node_modules/svelte-fa/dist/svelte-fa.mjs";
  import {
    
    faChevronDown
  } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  // datos falsos
  import lenguas from "../../../../datosFalsos/lenguasFake";

  export let familia;

  // let cierraIcono = faTimesCircle;
  let abajoIcono = faChevronDown;

  let detalleMostrar = false;



  const mostrarDetalle = () => {
    detalleMostrar = !detalleMostrar;
  };
  const cerrarDetalle = () => {
    detalleMostrar = false;
  };
  


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
                behavior: 'smooth'
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



</script>

<style>
  article {
    max-width: 14rem;
    max-height: 20rem;
  }

  .VentanaFamiliaWrapper {
    width: auto;
    max-height: 420px;
  }

  .Familia {
    /* position: relative; */
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
    position: absolute;
    z-index: 1;
  }

  .Encabezado {
    width: 100%;
    height: auto;
    padding-top: 1rem;
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
    height: 13rem;
    padding: 0 1rem;
    box-sizing: border-box;
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
    width: calc( 100% - 2.5rem );
    /* con slider */
    transform: translateX( calc( 300px - 1px ) );
    /* sin slider */
    /* transform: translateX(297px);  */
    z-index: 100;
  }

  

</style>

<section class="VentanaFamiliaWrapper">

  <article class="Familia" bind:this={contenedor}>

    <div class="VentanaFamilia">
      <!-- <div class="ContenedorHeader"> -->
      <div class="BotonCierraWrapper">
        <button class="BotonConIcono" use:tap on:tap={cerrar}>
          <!-- <Fa icon={cierraIcono} class="BotonIcono" /> -->
          <i class="fa fa-times-circle"/>
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
        <button class="Saber" use:tap on:tap={mostrarDetalle}>Saber más</button>
      </div>
      
      <!-- </div> -->
      <!--  -->
      <!-- <div class="ContenedorScroll"> -->

      <div class="ContenedorCarrusel">
        <Slider />
      </div>

      <div class="ContenedorAgrupaciones">
        <span class="Flecha">
          <!-- <Fa class="FlechaIcono" icon={abajoIcono} /> -->
          <i class="fa fa-chevron-down"/>

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
      
      <!-- </div> -->
  </article>
  <!-- muestra detalle -->
  {#if detalleMostrar}
    <div class="FamiliaDetalle" transition:fade>
      <FamiliaDetalle {cerrarDetalle} />
    </div>
  {/if}
</section>
