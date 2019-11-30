<script>
  import { tap } from "@sveltejs/gestures";

  import { TweenLite, Elastic, Circ } from "gsap";

  import Intersecciones from "../componentes/animacion/Intersecciones.svelte";

  import { onMount } from "svelte";

  import palabrasSVG from "../datos/textosvivos/svg/02";

  let escala = 40;

  let canvas;

  let familiasModule;

  const win = window;

  $: palabras = !!palabrasSVG ? palabrasSVG.palabras : [];
  $: console.log(palabras);

  $: height = win.innerHeight;
  $: width = win.innerWidth;

  onMount(async () => {
    // let ctx = canvas.getContext('2d')
    //     ctx.globalCompositeOperation = 'difference';
  });

  const resultado = {};

  const mostrarLineas = (lineas, id, indice) => {
    if (!resultado[id]) {
      resultado[id] = [];
    }

    resultado[id][indice] = lineas;

    // const palabrasIncompletas = palabras.filter(
    //   p => p.letras.length != resultado[id].length
    // );
    // // console.log("rl", resultado.length, resultado[id].length, palabrasIncompletas);
    
    // const palabrasCompletas = palabrasIncompletas.length == 0;

    // console.log('palabrasCompletas',palabrasCompletas, Object.keys(resultado).length, palabrasIncompletas.length );
    // if ( Object.keys(resultado).length == palabras.length ) {
    // if (palabrasCompletas && Object.keys(resultado).length == palabras.length) {
      console.log('resultado',resultado);
    // }
  };
</script>

<style>
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 1;
    /* z-index: -1; */
  }
</style>

<svg id="svg-intersecciones" />

{#each palabras as palabra, h ('palabra_' + h)}
  {#each palabra.letras as letra, i ('letra_' + i)}
    {#if !!canvas}
      <Intersecciones
        mostrar={mostrarLineas}
        x={0}
        id={palabra.id}
        path={letra}
        indice={i}
        {escala} />
    {/if}
  {/each}
{/each}

<svelte:head>
  <title>INALI | Mapa interactivo</title>
</svelte:head>

<!-- 
<svg
  viewBox="37.47777777777779 37.591661213362585 35.5 19.959004392386532"
  width={width + 'px'}
  height={height + 'px'}
  id="fondoLineas">
</svg> -->

<!--  -->

<main>

  <canvas id="fondo" bind:this={canvas} />

</main>
