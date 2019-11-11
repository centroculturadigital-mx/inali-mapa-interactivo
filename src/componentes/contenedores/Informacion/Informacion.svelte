<script>
  import IconoInformacion from "./Iconos/IconoInformacion.svelte";
  import TituloMapa from "./Iconos/TituloMapa.svelte";

  import { createEventDispatcher } from "svelte";

  import interact from "interactjs";
  import { tap } from "@sveltejs/gestures";
  import { onMount } from "svelte";

  const datos = {
    texto:
      "El Mapa Interactivo de Lenguas Indígenas de México es una colaboración entre el Centro de Cultura Digital y el Instituto Nacional de Lenguas Indígenas. \n Su creación responde a la realidad: México es un país multilingüe y multinacional, dentro del que se hablan 11 familias lingüísticas indoamericanas, de las que se despliegan 68 agrupaciones lingüísticas, conformadas por 364 variantes."
  };

  const info = "icono-info.svg";

  const dispatch = createEventDispatcher();

  let contenedor;

  let ultimoTouchMoveY;
  let ultimoTouchMoveX;

  let ultimoScrollVentanaY = 0;
  let ultimoScrollVentanaX = 0;

  const cerrar = () => {
    dispatch("cerrar");
  };

  onMount(() => {
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

              ultimoScrollVentanaY = Math.min(
                ultimoScrollVentanaY,
                document.querySelector(".VentanaFamilia").offsetHeight - 240
              );

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
</script>

<style>
  .Informacion {
    width: 16rem;
    height: 18rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    color: #333;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .Encabezado {
    width: 100%;
    height: 3.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: #516980;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 0px 22px;
  }

  .TituloMapa {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }
  .Titulo-l1 {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1.2;
    color: #fff;
  }
  .Titulo-l2 {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #fff;
  }

  .IconoInformacion {
    display: flex;
    flex-basis: 45%;
  }

  img {
    width: 10%;
  }
  .Cerrar {
    padding: 1rem;
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    /* display: flex; */
    font-size: 1rem;
  }

  .Acerca {
    padding: 0;
  }

  .Texto {
    width: 100%;
    max-height: 14rem;
    overflow: auto;
    color: #5e5e5e;
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 1rem;
  }

  .Subtitulo {
    text-transform: uppercase;
  }
</style>

<section class="Informacion">
  <header class="Encabezado">
    <div class="TituloMapa">
      <h6 class="Titulo-l1">mapa interactivo de</h6>
      <h6 class="Titulo-l2">lenguas indígenas</h6>
    </div>
    <img src={info} alt="info" />
    <button class="Cerrar" use:tap on:tap={cerrar}>
      <i class="fa fa-close" />
    </button>
  </header>
  <div class="Acerca">
    <div class="Texto" bind:this={contenedor}>
      <h3 class="Subtitulo">acerca de</h3>
      <p>{datos.texto}</p>
    </div>
  </div>
</section>
