<script>


  import { tap } from '@sveltejs/gestures';

  import { TweenLite, Elastic, Circ } from "gsap";


  import Cabecera from '../general/Cabecera/Cabecera.svelte';
  import Pie from '../general/Pie/Pie.svelte'

  import FondoLineas from "./FondoLineas.svelte";
  import LetraIntersecciones from "./LetraIntersecciones.svelte";

	import { onMount } from "svelte"
	import textoFake from "../../datos/textoFake"


  let canvas;



  // let letras = []
  let letras = textoFake.map(path=>({path}))


  $: height = window.innerHeight;
  $: width = window.innerWidth;
  
  const pathInfo = {x: 120};

  let contador = 0;

  onMount(()=>{
  
      let tl = new TimelineMax({
          yoyo: true,
          repeat: -1,
      });
      
      tl.to(pathInfo,1.5+(1.0*Math.random()),{
          x: 120
      })
      tl.to(pathInfo,1.5+(1.0*Math.random()),{
          x: -1800
      })
  //   const letrasPaths = document.querySelectorAll('#texto path')

  //   letrasPaths.forEach(l=>letras.push(l.getAttribute("d")))
  //   // const letraPath = document.querySelector('#texto path')
  //   // letras.push(letraPath.getAttribute("d"))

    
  //   letras = letras

setInterval(()=>{
  letras.forEach((l,i)=>{
    l.opacidad = ((letras.length-Math.abs(contador/i))/letras.length)/2
  })
  letras[contador].opacidad = 1
  letras=letras
  contador++
  contador%=letras.length
},1000)
  })

     


</script>

<style>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* opacity: 0.5; */
}

#texto {
  visibility: hidden;
}

</style>



<svelte:head>
<title>INALI | Mapa interactivo</title>
</svelte:head>


<main>

{#each letras as letra, indice ("letra_"+indice) }
  
  {#if !! letra}
    <LetraIntersecciones canvas={canvas} x={pathInfo.x+(156*indice)} path={ letra.path } opacidad={ letra.opacidad ? letra.opacidad  : 1 }/>
    {/if}
  
  {/each}


  <canvas id="frases-vivas__canvas" bind:this={canvas}></canvas>


</main>


<Pie />        


