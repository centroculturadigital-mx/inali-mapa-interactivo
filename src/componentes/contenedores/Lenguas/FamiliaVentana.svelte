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
  let cierraIcono = faTimesCircle

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

  .Familia {
    display: flex;
    position: absolute;
    bottom: 4rem;
    left: 4rem;
    /* max-width: 20rem; */
    /* max-height: 22rem; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow-y: auto;
    z-index: 10000;
    background: #f7f7f7;
    border-radius: 10px;
  }

  .Contenedor-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* flex-wrap: nowrap; */
    /* justify-content: space-between; */
    overflow-y: auto;
  }

  i {
    color: #bababa;
  }

  img {
    width: 580px;
    height: 455px;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
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

  .Saber {
    width: 17%;
    height: 10%;
    border: 1px solid #e6aa30;
    box-sizing: border-box;
    border-radius: 15px;
    color: #e6aa30;
  }

  .TitulosLista {
    display: flex;
    justify-content: space-between;
    margin-right: -6rem;
    margin-left: -6rem;
  }

  .TextoFotos {
    position: relative;
    top: -16%;
    left: -39%;
    color: #fff;
  }

  .Flecha {
    width: 50%;
    margin-left: 10rem;
  }

  .Carrousel {
    margin-top: -4.5rem;
    font-size: 0.5rem;
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

  .Lista {
    margin-right: -5rem;
    margin-left: -9.5rem;
  }

  #Point {
    padding: 0 0.5rem 0 0;
  }
  .FamiliaWrapper {
    height: 100%;
    width: 100%;
  }
  /* new */
  .BotonWrapper {
    display: flex;
    justify-content: right;
    height: 50px;
    width: 100%;
  }
  .BotonIcono {
    color: #878787;
    font-size: 1rem;
  }
</style>

<article class="Familia">

  <div class="FamiliaWrapper">
    <div class="BotonWrapper">
      <button class="BotonConIcono" on:click={cerrarVentana}>
        <Icon class="BotonIcono" icon={cierraIcono} />
      </button>
    </div>

    <header class="Encabezado">
      <p class="Titulo">FAMILIA</p>
      <h1 class="Principal">Yuto-nahua</h1>
    </header>
    {#if elemento.activo}
      <button class="Saber" on:click={Mostrar}>Saber más</button>
      <div class="FamiliaDetalle">
        <FamiliaDetalle />
      </div>
    {/if}

    {#if !elemento.activo}
      <button class="Saber" on:click={Mostrar}>Saber más</button>
    {/if}
    <div class="Contenedor-1">
      <img
        class="Imagen"
        src={`http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`}
        alt="img" />
      <div class="TextoFotos">
        <p>Titulo Foto</p>
        <p>Descripción</p>
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

      <article class="Contenedor-2">
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
      </article>
    </div>

  </div>
</article>
