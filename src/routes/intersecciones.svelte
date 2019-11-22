<script>


  import { tap } from '@sveltejs/gestures';

  import { TweenLite, Elastic, Circ } from "gsap";


	import Intersecciones from "../componentes/animacion/Intersecciones.svelte";

	import { onMount } from "svelte"


	import textoFake from "../datos/textoFake"


    let escala = 40;

  let canvas;
  
  let familiasModule
  
  const win = window;


  $: height = win.innerHeight;
  $: width = win.innerWidth;

    onMount( async ()=>{


        // let ctx = canvas.getContext('2d')        
    //     ctx.globalCompositeOperation = 'difference';


    })


    const resultado = []

    const mostrarLineas = (lineas,indice) => {
        
        resultado[indice]=lineas

        if( resultado.length == textoFake.length ) {
            
            console.log(resultado);
            
        }
    }
    

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


  <svg id="svg-intersecciones"></svg>



  {#each textoFake as letra, i ("letra_"+i) }
    {#if !! canvas }

        <Intersecciones mostrar={mostrarLineas} x={0} path={ letra } indice={i} escala={escala}/>

    {/if}
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
  

  <canvas id="fondo" bind:this={canvas}></canvas>

</main>