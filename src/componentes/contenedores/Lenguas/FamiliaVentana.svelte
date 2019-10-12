<script>
  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import AgrupacionesLista from "./AgrupacionesLista.svelte";
  import Slider from "../Slider/Slider.svelte";
  import Fa from "../../../../node_modules/svelte-fa/dist/svelte-fa.mjs";
  import {
    faTimesCircle,
    faChevronDown
  } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
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
      console.log("cierra desde ventana");
      cerrar();
    }
  }
</script>

<style>
  article {
    max-width: 360px;
    max-height: 420px;
  }
  .Titulo {
    text-align: center;
    font-weight: 200;
    font-size: 0.7rem;
    line-height: 1rem;
    letter-spacing: 0.5rem;
    color: #454344;
    margin: 0;
  }
  .Principal {
    text-align: center;
    font-weight: 600;
    font-size: 1.7rem;
    line-height: 3rem;
    text-align: center;
    color: #e6aa30;
    margin: 0;
  }
  .TitulosLista {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
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
  }
  .Familia {
    position: relative;
    overflow-y: auto;
    z-index: 10000;
    background: #f7f7f7;
    border-radius: 10px;
  }
  .VentanaFamilia {
    height: 100%;
    width: 100%;
  }
  .VentanaFamiliaWrapper {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    max-height: 420px;
    width: auto;
  }
  .BotonCierraWrapper {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    width: 100%;
  }
  .Encabezado {
    height: auto;
    width: 100%;
  }
  .BotonMasWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
  }
  .Saber {
    border: 1px solid #e6aa30;
    box-sizing: border-box;
    border-radius: 15px;
    color: #e6aa30;
    height: auto;
    width: 35%;
    cursor: pointer;
  }
  .ContenedorCarrusel {
    height: 300px;
    width: 100%;
  }
  .ListaAgrupaciones {
    height: auto;
    width: 100%;
  }
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
    height: auto;
    width: 100%;
  }
  .TituloLista {
    font-weight: bold;
    padding: 0 0.25rem;
  }
</style>

<section class="VentanaFamiliaWrapper">

  <article class="Familia">

    <div class="VentanaFamilia">

      <div class="BotonCierraWrapper">
        <button class="BotonConIcono" on:click={cerrarVentana}>
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
