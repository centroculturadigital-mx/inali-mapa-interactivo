<script>
  import interact from "interactjs";
  import { tap } from "@sveltejs/gestures";

  import { createEventDispatcher } from "svelte";

  import FamiliaDetalle from "./FamiliaDetalle.svelte";
  import AgrupacionesLista from "./AgrupacionesLista.svelte";
  import Slider from "../Slider/Slider.svelte";
  // import Fa from "../../../../node_modules/svelte-fa/dist/svelte-fa.mjs";
  import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  export let familia;

  let iconoCierra = "cerrar.svg";

  const dispatch = createEventDispatcher();

  const cerrar = () => {
    dispatch("cerrar", { familia: !!familia ? familia.id : null });
  };
  // let cierraIcono = faTimesCircle;
  let abajoIcono = faChevronDown;

  let detalleMostrar = false;

  let posicionDetalle;

  const mostrarDetalle = () => {
    const rect = contenedor.getBoundingClientRect();
    detalleMostrar = !detalleMostrar;
    if (rect.left > window.innerWidth - rect.width * 2) {
      posicionDetalle = "izquierdo";
    } else {
      posicionDetalle = null;
    }
  };
  const cerrarDetalle = () => {
    detalleMostrar = false;
  };

  // let botonFamiliaVentanaCerrar
  let contenedor;

  let ultimoTouchMoveY;
  let ultimoTouchMoveX;

  let ultimoScrollVentanaY = 0;
  let ultimoScrollVentanaX = 0;

  let agrupacionesModule;
  let familiasModule;

  $: agrupaciones = agrupacionesModule ? agrupacionesModule.default : [];
  $: familias = familiasModule ? familiasModule.default : [];

  $: agrupacionesFamilia = familia
    ? agrupaciones.filter(a => familia.agrupaciones.includes(a.id))
    : [];

  $: imagenes =
    familia && familia.fotografias && familia.fotografias.length
      ? familia.fotografias
      : familias && familias.length
      ? familias.find(f => f.id === "yutonahua").fotografias
      : [];
  $: console.log(agrupaciones.length);

  let tituloAgrupaciones = "Agrupaciones lingüísticas \n de esta familia:";

  onMount(async () => {
    agrupacionesModule = await import("../../../datos/agrupaciones.json");
    familiasModule = await import("../../../datos/familias.json");

    // botonFamiliaVentanaCerrar.addEventListener("touchstart",cerrarVentana)

    if (!!contenedor) {
      interact(contenedor).draggable({
        autoScroll: true,
        onstart: e => {
          ultimoTouchMoveY = e.clientY;
          ultimoTouchMoveX = e.clientX;
        },
        onend: e => {
          ultimoTouchMoveY = null;
          ultimoTouchMoveX = null;
        },
        onmove: e => {
          let top = contenedor.getBoundingClientRect().top;
          let right = contenedor.getBoundingClientRect().right;
          let bottom = contenedor.getBoundingClientRect().bottom;
          let left = contenedor.getBoundingClientRect().left;
          if (
            // adentro verticalmente
            e.clientY > top &&
            e.clientY < bottom &&
            // adentro horizontalmente
            e.clientX > left &&
            e.clientX < right
            // &&
            // extremo derecho
            // e.clientX > right - 50
          ) {
            let diferenciaY = ultimoTouchMoveY - e.clientY;
            let diferenciaX = ultimoTouchMoveX - e.clientX;

            if (Math.abs(diferenciaX) < Math.abs(diferenciaY)) {
              ultimoScrollVentanaY += diferenciaY * 3;

              // ultimoScrollVentanaY = Math.min( ultimoScrollVentanaY, document.querySelector(".VentanaFamilia").offsetHeight + 240 )

              contenedor.scrollTo({
                top: ultimoScrollVentanaY,
                behavior: "smooth"
              });
            }

            ultimoTouchMoveY = e.clientY;
            ultimoTouchMoveX = e.clientX;
          }
        }
      });
    }
  });

  $: scrollIniciado = ultimoScrollVentanaY > 0;

  const iniciarScroll = () => {
    ultimoScrollVentanaY = 300;
    contenedor.scrollTo({
      top: ultimoScrollVentanaY,
      behavior: "smooth"
    });
  };
</script>

<style>
  article {
    max-width: 14rem;
    max-height: 18rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    position: relative;
  }

  .BotonCierraWrapper {
    display: flex;
    justify-content: flex-end;
    width: auto;
    /* height: 2rem; */
    position: absolute;
    right: 0;
    top: 0.125rem;
    z-index: 1;
  }
  .BotonConIcono {
    background-color: transparent;
    border: none;
    color: #929191;
    cursor: pointer;
    font-size: 22px;
    padding: 0.3rem;
    display: flex;
  }
  .BotonCierraWrapper span {
    font-size: 0.5rem;
    font-weight: 100;
    display: flex;
    align-items: center;
    color: rgba(69, 67, 68, 0.5);
    height: auto;
    width: auto;
  }
  .BotonConIcono img {
    width: 1.25rem;
  }

  .Encabezado {
    width: 100%;
    height: auto;
    padding-top: 0.75rem;
  }

  .Titulo {
    text-align: center;
    font-weight: 200;
    font-size: 0.75rem;
    line-height: 1;
    letter-spacing: 0.25rem;
    color: #454344;
    margin: 0;
    margin-bottom: 0.25rem;
  }

  .Principal {
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
    /*line-height: 2;*/
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
    font-size: 0.75rem; 
  }

  .ContenedorCarrusel {
    width: 100%;
    height: 12rem;
    padding: 0;
    box-sizing: border-box;
  }

  /* .Carrousel {
    padding: 8px 0;
    font-size: 0.5rem;
  } */

  .ContenedorAgrupaciones {
    padding: 0 0.5rem 1rem;
  }
  .Flecha {
    background: none;
    position: absolute;
    bottom: -1rem;
    left: calc(50% - 1rem);
    height: auto;
    width: auto;
    border: none;
    font-size: 24px;
    color: #fff;
    text-shadow: 3px 3px 2px rgba(50, 50, 50, 0.8);
    cursor: pointer;
  }
  .Flecha:hover {
    text-shadow: 3px 3px 3px rgb(50, 50, 50, 1);
  }
  .bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(5px);
    }
    40% {
      transform: translateY(8px);
    }
    60% {
      transform: translateY(10px);
    }
  }
  .TitulosLista {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    width: 100%;
    height: auto;
    text-align: center;
  }
  .TituloLista:nth-child(1) {
    border-right: 1px solid rgb(175, 175, 175, 0.9) !important;
  }
  .TituloLista {
    font-weight: bold;
    padding: 0 0.5rem;
    font-size: 0.5rem;
    width: 50%;
    display: table-cell;
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
    width: calc(100% - 2.5rem);
    /* con slider */
    /* sin slider */
    /* transform: translateX(297px);  */
    z-index: 100;
  }

  .FamiliaDetalle.izquierdo {
    left: -12rem;
  }

  h1,
  h5 {
    margin: 0;
    padding: 0;
  }

  .SubTitulo {
    text-align: center;
    font-weight: 400;
  }

  :global(.carousel ul) {
    display: none;
  }

  .TituloAgrupaciones {
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>

<section class="VentanaFamiliaWrapper">

  <article class="Familia" bind:this={contenedor}>

    <div class="VentanaFamilia">
      <!-- <div class="ContenedorHeader"> -->
      <div class="BotonCierraWrapper">
        <span>Cerrar</span>
        <button class="BotonConIcono" use:tap on:tap={cerrar}>
          <!-- <Fa icon={cierraIcono} class="BotonIcono" /> -->
          <!-- <i class="fa fa-times-circle" /> -->
          <img src={iconoCierra} alt="Cierra ventana de Familia Lingüistica" />
        </button>
      </div>
      <!--  -->
      <header class="Encabezado">
        <p class="Titulo">FAMILIA</p>
        <!-- <h1 class="Principal">Yuto-nahua</h1> -->
        <h1 class="Principal" style={`color:#${familia.color}`}>
          {familia.nombreCastellanizado}
        </h1>
        {#if familia.nombreOriginario && familia.nombreOriginario != familia.nombreCastellanizado}
          <h4 class="SubTitulo" style={`color:#${familia.color}`}>
            ({familia.nombreOriginario})
          </h4>
        {/if}
      </header>
      <!--  -->
      <div class="BotonMasWrapper">
        <button
          class="Saber"
          use:tap
          on:tap={mostrarDetalle}
          style={`color:#${familia.color}; border-color:#${familia.color};`}>
          Saber más
        </button>
      </div>

      <!-- </div> -->
      <!--  -->
      <!-- <div class="ContenedorScroll"> -->

      <div class="ContenedorCarrusel">
        <Slider {imagenes} />
      </div>

      <div class="ContenedorAgrupaciones">
        <h5 class="TituloAgrupaciones">{tituloAgrupaciones}</h5>
        <div class="TitulosLista">
          <h6 class="TituloLista ">Nombre la agrupación</h6>
          <h6 class="TituloLista">Riesgo de desaparición por agrupación</h6>
        </div>
        <section class="ListaAgrupaciones">
          <AgrupacionesLista agrupaciones={agrupacionesFamilia} />
        </section>
      </div>
    </div>

    <!-- </div> -->
    {#if !scrollIniciado}
      <button class="Flecha bounce" on:click={iniciarScroll}>
        <i class="fa fa-chevron-down" />
      </button>
    {/if}
  </article>
  <!-- muestra detalle -->
  {#if detalleMostrar}
    <div class={'FamiliaDetalle ' + posicionDetalle} transition:fade>
      <FamiliaDetalle
        {cerrarDetalle}
        informacion={familia.informacion}
        orientacion={posicionDetalle} />
    </div>
  {/if}
</section>
