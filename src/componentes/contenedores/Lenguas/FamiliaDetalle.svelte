<script>
  import { tap } from "@sveltejs/gestures";

  import interact from "interactjs";
  import { onMount } from "svelte";

  import Fa from "../../../../node_modules/svelte-fa/dist/svelte-fa.mjs";

  export let informacion;
  export let orientacion;

  let contenedor;

  let iconoOcultaIzquierda = "ocultar.izquierda.svg";
  let iconoOcultaDerecha = "ocultar.derecha.svg";

  let ultimoTouchMoveY;
  let ultimoTouchMoveX;

  let ultimoScrollVentanaY = 0;
  let ultimoScrollVentanaX = 0;

  export let cerrarDetalle;

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

              // ultimoScrollVentanaY = Math.min( ultimoScrollVentanaY, document.querySelector(".VentanaFamilia").offsetHeight - 240 )

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
  /* section .Detalle {
    width: 100%;
  } */
  .Detalle {
    padding: 0;
    background-color: #fff;
    height: 100%;
  }
  .TextoWrapper {
    max-height: 42.7rem;
    background: #fff;
    font-size: 0.65rem;
    line-height: 1rem;
    overflow-y: hidden;
    text-align: left;
    color: #454344;
    height: 390px;
    background-color: rgba(236, 236, 236, 1);
  }
  .TextoWrapper h3 {
    padding: 0 0.75rem;
    font-weight: bold;
  }
  .Texto p {
    /* padding: 0 0.5rem; */
    white-space: pre-line;
  }
  .OcultarWrapper {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    width: 100%;
    background-color: rgba(236, 236, 236, 1);
    
  }
  .OcultarWrapper.izquierdo {
    justify-content: flex-start;
  }

  .Ocultar {
    border: 0;
    background-color: transparent;
    color: #afafaf;
  }
  .OcultarWrapper img {
    width: 1.25rem;
  }
  .OcultarWrapper span {
    font-size: 0.5rem;
    font-weight: 100;
    display: flex;
    align-items: center;
    color: rgba(69, 67, 68, 0.5);
    height: auto;
    width: auto;
  }

  .Texto {
    padding: 0 0.75rem;

    padding-bottom: 10rem;
  }
</style>

<section class="Detalle">
  <div
    class={'OcultarWrapper ' + (orientacion == 'izquierdo' ? 'izquierdo' : '')}>
      {#if orientacion == 'izquierdo'}
    <button class="BotonConIcono Ocultar" use:tap on:tap={cerrarDetalle}>
        <!-- <i class="fa fa-arrow-right"></i> -->
        <img
          src={iconoOcultaIzquierda}
          alt="Oculta ventana de Familia Lingüistica" />
    </button>
        <span>Ocultar</span>
      {:else}
        <span>Ocultar</span>
    <button class="BotonConIcono Ocultar" use:tap on:tap={cerrarDetalle}>
        <!-- <i class="fa fa-arrow-left"></i> -->
        <img
          src={iconoOcultaDerecha}
          alt="Oculta ventana de Familia Lingüistica" />
    </button>
      {/if}
  </div>
  <section class="TextoWrapper" bind:this={contenedor}>
    <h3>Sobre esta familia</h3>
    <div class="Texto">
      <p>{informacion}</p>
    </div>
  </section>
</section>
