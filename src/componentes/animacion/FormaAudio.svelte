<script>


  import { tap } from '@sveltejs/gestures';

  import { TweenLite, Elastic, Circ } from "gsap";


  import Cabecera from '../general/Cabecera/Cabecera.svelte';
  import Pie from '../general/Pie/Pie.svelte'

  import FondoLineas from "./FondoLineas.svelte";
  import FormaLineas from "./FormaLineas.svelte";

	import { onMount } from "svelte"
	import zonasFake from "../../datos/zonasFake"


  export let canvas;



  // let letras = []
  $: letras = zonasFake
  // $: console.log(letras);
  // $: letras.forEach(l=>console.log(l));
  
  


  $: height = window.innerHeight;
  $: width = window.innerWidth;
  
  
  const pathInfo = {x: 120};

  let contador = 0;

  onMount(()=>{
  
      let tl = new TimelineMax({
          yoyo: true,
          repeat: -1,
      });
      
      // tl.to(pathInfo,1.5+(1.0*Math.random()),{
      //     x: 120
      // })
      // tl.to(pathInfo,1.5+(1.0*Math.random()),{
      //     x: -1800
      // })
  //   const letrasPaths = document.querySelectorAll('#texto path')

  //   letrasPaths.forEach(l=>letras.push(l.getAttribute("d")))
  //   // const letraPath = document.querySelector('#texto path')
  //   // letras.push(letraPath.getAttribute("d"))

    
    letras = letras

// setInterval(()=>{
//   letras.forEach((l,i)=>{
//     l.opacidad = ((letras.length-Math.abs(contador/i))/letras.length)/2
//   })
//   letras[contador].opacidad = 1
//   letras=letras
//   contador++
//   contador%=letras.length
// },1000)
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
  
  <FormaLineas x={pathInfo.x+(120*indice)} canvas={canvas} lineas={letra}/>
  
{/each}
 
  <!-- {#if !! letras[0] }
    <FormaLineas x={pathInfo.x+(156)} canvas={canvas} lineasPares={letras[0]}/>
  {/if} -->



</main>


<Pie />        


