<script>
  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import Agrupacion from "./Agrupacion.svelte";
  import BotonCerrar from "../botones/BotonCerrar.svelte";
  import Flecha from "../iconos/Flecha.svelte";
  import Carrousel from "../iconos/Carrousel.svelte";

  import Icon from "fa-svelte";
  import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

  export let familia;
  export let cerrar;
  let cierraIcono = faTimesCircle;

  let elemento = { activo: false };
  const Mostrar = () => {
    elemento.activo = !elemento.activo;
  };

  function cerrarVentana() {
    if (typeof cerrar === "function") {
      console.log("cierra desde ventana");
      cerrar();
    }
  }

  // const abrir = async (e) => {
  //     console.log(e);

  // }

  // const cerrar = (e) => {
  //     console.log(e);

  // }

  // on:cerrar={cerrar}
  // on:abrir={abrir}
</script>

<style>
  article {
    max-width: 360px;
    max-height: 420px;
  }

  .Titulo {
    text-align: center;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 1rem;
    letter-spacing: 0.5rem;
    color: #454344;
    margin: 0.5rem;
  }

  .Principal {
    text-align: center;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3rem;
    text-align: center;
    color: #e6aa30;
    margin: 0.5rem;
  }
  .TitulosLista {
    display: flex;
    justify-content: space-between;
    margin-right: -6rem;
    margin-left: -6rem;
  }

  .Flecha {
    width: 50%;
    margin-left: 10rem;
  }

  .Contenedor-2 {
    width: 100%;
    margin-top: 1rem;
  }

  .FamiliaDetalle {
    position: absolute;
    left: 35.1%;
    top: 0.6%;
  }

  #Point {
    padding: 0 0.5rem 0 0;
  }
  /*  */
  /*  */
  /* new */

  .Familia {
    /* display: flex; */
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    /* justify-content: center; */
    /* align-items: center; */
    /* flex-direction: column; */
    /* flex-wrap: nowrap; */
    /* justify-content: space-between; */
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
    height: 50px;
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
    height: 50px;
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
    bottom: 1rem;
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
  .Lista {
    height: auto;
    width: 100%;
  }
</style>

<article class="Familia">

  <div class="VentanaFamiliaWrapper">

    <div class="BotonCierraWrapper">
      <button class="BotonConIcono" on:click={cerrarVentana}>
        <Icon class="BotonIcono" icon={cierraIcono} />
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

    <div class="Contenedor-2">
      <span class="Flecha">
        <i class="fas fa-chevron-down fa-3x" />
      </span>
      <header class="TitulosLista">
        <h4>Agrupaciones Lingüísticas</h4>
        <h4>Riesgo de desaparición</h4>
      </header>
      <section class="Lista">
        <ul>
          <Agrupacion />
          <Agrupacion />
          <Agrupacion />
        </ul>
      </section>
    </div>
  </div>
</article>
