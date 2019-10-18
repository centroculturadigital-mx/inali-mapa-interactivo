<script>

  import interact from 'interactjs'
  import { tap } from '@sveltejs/gestures';

  import { createEventDispatcher } from 'svelte';  

  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import AgrupacionesLista from "./AgrupacionesLista.svelte";
  import Slider from "../Slider/Slider.svelte";
  // import Fa from "../../../../node_modules/svelte-fa/dist/svelte-fa.mjs";
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  // datos falsos
  
  export let familia;

  const dispatch = createEventDispatcher();

  const cerrar = () => {
    
    dispatch("cerrar", { familia: !! familia ? familia.id : null })
    
  }
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

  let agrupacionesModule
  let familiasModule

  $: agrupaciones = agrupacionesModule ? agrupacionesModule.default : []
  $: familias = familiasModule ? familiasModule.default : []

  $: agrupacionesFamilia = familia ? agrupaciones.filter(a => familia.agrupaciones.includes(a.id)) : []

  $: imagenesYutonahua = familias.length ? familias.find(f => f.id === 'yutonahua').fotografias : []
  $: console.log(imagenesYutonahua);
  $: console.log(familias);
  
  onMount(async ()=>{
    agrupacionesModule = await import("../../../datos/agrupaciones.json");
    familiasModule = await import("../../../datos/familias.json");

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
    max-height: 18rem;
  }

  .VentanaFamiliaWrapper {
    width: auto;
    max-height: 18rem;
  }

  .Familia {
    /* position: relative; */
    overflow: hidden;
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
    /* height: 2rem; */
  }
  .BotonConIcono {
    background-color: transparent;
    border: none;
    color: #afafaf !important;
    cursor: pointer;
    font-size: 22px;
    padding: .3rem;
    display: flex;
    justify-content: flex-end;
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
    font-size: 0.6rem;
    line-height: 1;
    letter-spacing: 0.5rem;
    color: #454344;
    margin: 0;
  }

  .Principal {
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 2;
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
    width: auto;
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
    padding: 1rem;
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
    left: 14.5rem;
    top: -1.5rem;
    overflow: hidden;
    height: 18rem;
    width: calc( 100% - 2.5rem );
    /* con slider */
    /* sin slider */
    /* transform: translateX(297px);  */
    z-index: 100;
  }
  
  h1,h5 {
    margin: 0;
    padding: 0;
  }

  .SubTitulo {
    text-align: center;
    font-weight: 400;
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
        <h1 class="Principal" style={`color:#${familia.color}`}>
          {familia.nombreOriginario}
        </h1>
        {#if 
          familia.nombreCastellanizado && 
          familia.nombreOriginario != familia.nombreCastellanizado
        }
          <h4 class="SubTitulo" style={`color:#${familia.color}`}>
            ({familia.nombreCastellanizado})
          </h4>
        {/if}
      </header>
      <!--  -->
      <div class="BotonMasWrapper">
        <button
          class="Saber"
          use:tap
          on:tap={mostrarDetalle}
          style={`color:#${familia.color}; border-color:#${familia.color};`}
        >
          Saber más
        </button>
      </div>
      
      <!-- </div> -->
      <!--  -->
      <!-- <div class="ContenedorScroll"> -->

      <div class="ContenedorCarrusel">
        <Slider imagenes={imagenesYutonahua}/>
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
          <AgrupacionesLista agrupaciones={agrupacionesFamilia}/>
        </section>
      </div>
    </div>
      
      <!-- </div> -->
  </article>
  <!-- muestra detalle -->
  {#if detalleMostrar}
    <div class="FamiliaDetalle" transition:fade>
      <FamiliaDetalle {cerrarDetalle} informacion={familia.informacion} />
    </div>
  {/if}
</section>
