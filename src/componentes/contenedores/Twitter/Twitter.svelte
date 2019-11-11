<script>
  import IconoTwitterVentana from "./Iconos/IconoTwitterVentana.svelte";
  import Tweet from "./Tweet.svelte";

  import interact from "interactjs";
  import { tap } from "@sveltejs/gestures";
  import { onMount } from "svelte";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const tweetData = "../../datos/tweets.js";

  const cerrar = () => {
    dispatch("cerrar");
  };

  let contenedor;

  let ultimoTouchMoveY;
  let ultimoTouchMoveX;

  let ultimoScrollVentanaY = 0;
  let ultimoScrollVentanaX = 0;

  onMount(() => {
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
  .Twitter {
    width: 15rem;
    height: 18rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    color: #333;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    z-index: 1000;
  }

  .Encabezado {
    width: 100%;
    height: 3.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #878787;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .IconoCerrar {
    padding: 0;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
  }

  .ContenedorTweets {
    padding-top: 0.5rem;
    width: 100%;
  }

  .Tweets {
    width: 100%;
    max-height: 13.5rem;
    overflow: hidden;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    cursor: pointer;
  }
</style>

<section class="Twitter">
  <header class="Encabezado">
    <IconoTwitterVentana />
    <h4 class="Activismo">Activismo lingüístico</h4>
    <button class="IconoCerrar" use:tap on:tap={cerrar}>
      <i class="fa fa-close" />
    </button>
  </header>
  <div class="ContenedorTweets">
    <div class="Tweets" bind:this={contenedor}>

        <Tweet />

    </div>
  </div>
</section>
