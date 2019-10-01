<script>
  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import Agrupacion from "./Agrupacion.svelte";
  import Carrousel from "../iconos/Carrousel.svelte";

  // import Icon from 'fa-svelte';
  // import Icon from '../../../../node_modules/fa-svelte/index.js';
  // import { faTimesCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";

  export let familia;
  export let cerrar;
  // let cierraIcono = faTimesCircle;
  // let abajoIcono = faChevronDown;

  let elemento = { activo: false };

  const Mostrar = () => {//toggle
    elemento.activo = !elemento.activo;
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
    height: 100%;
    width: 100%;
  }
  /*  */
  /*  */
  /* new */

  .Familia {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    overflow-y: auto;
    z-index: 10000;
    background: #f7f7f7;
    border-radius: 10px;
  }
  .VentanaFamiliaWrapper {
    height: 100%;
    width: 100%;
  }
  .BotonCierraWrapper {
    display: flex;
    justify-content: right;
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
  }
  .ContenedorImagenes {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5rem;
    flex-direction: column;
  }
  .ContenedorImagenes img {
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .TextoFotos {
    position: absolute;
    bottom: 32px;
    color: #fff;
    left: 1rem;
    height: auto;
    width: 90%;
  }
  .TextoFotosSubTitulo {
    font-size: 12px;
  }
  .Carrousel {
    padding: 8px 0;
    font-size: 0.5rem;
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
    color: #C9C9C9;
    height: auto;
    width: 100%;
  }
  .TituloLista {
    font-weight: bold;
  }
</style>

<article class="Familia">

  <div class="VentanaFamiliaWrapper">

    <div class="BotonCierraWrapper">
      <button class="BotonConIcono" on:click={cerrarVentana}>
        <!-- <Icon class="BotonIcono" icon={cierraIcono}></Icon> -->
      </button>
    </div>
    <!--  -->
    <header class="Encabezado">
      <p class="Titulo">FAMILIA</p>
      <h1 class="Principal">Yuto-nahua</h1>
    </header>
    <!--  -->
    <div class="BotonMasWrapper">
      {#if elemento.activo}
        <button class="Saber" on:click={Mostrar}>Saber más</button>
        <div class="FamiliaDetalle">
          <FamiliaDetalle />
        </div>
      {/if}

      {#if !elemento.activo}
        <button class="Saber" on:click={Mostrar}>Saber más</button>
      {/if}
    </div>
    <!--  -->
    <div class="ContenedorImagenes">
      <img
        class="Imagen"
        src={`http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`}
        alt="img" />
      <div class="TextoFotos">
        <h4 class="TextoFotosTitulo">Titulo Foto</h4>
        <p class="TextoFotosSubTitulo">Descripción</p>
      </div>

      <div class="Carrousel">
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
        <i id="Point" class="fas fa-circle fa-xs" />
      </div>
    </div>

    <div class="ContenedorAgrupaciones">
      <span class="Flecha">
        <!-- <Icon class="FlechaIcono" icon={abajoIcono}></Icon> -->
      </span>
      <div class="TitulosLista">
        <h6 class="TituloLista">Agrupaciones Lingüísticas</h6>
        <h6 class="TituloLista">Riesgo de desaparición</h6>
      </div>
      <section class="ListaAgrupaciones">
          <Agrupacion />
          <Agrupacion />
          <Agrupacion />
          <Agrupacion />
          <Agrupacion />
          <Agrupacion />
          <Agrupacion />
      </section>
    </div>
  </div>
</article>
