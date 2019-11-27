<script>


  import { tap } from '@sveltejs/gestures';

  import { TweenLite, Elastic, Circ } from "gsap";

  import SVG from "svg.js";
  
  import { fade } from "svelte/transition";


  import Cabecera from '../general/Cabecera/Cabecera.svelte';
  import Pie from '../general/Pie/Pie.svelte'

  import FondoLineas from "./FondoLineas.svelte";
  import FormaLineas from "./FormaLineas.svelte";

	import { onMount, onDestroy } from "svelte"
	import puntosFake from "../../datos/puntosFake"
	import textoFake from "../../datos/textoFake.holamundo"


  export let mostrar = true;
  export let canvas;
  export let svg;



  // let letras = []
  $: letras = puntosFake
  $: !! draw ? textoFake.forEach((path,indice)=>{
    
    const x= posX +(90*(indice%18))
    const y= 100+(Math.floor(indice/18)*170)
    
    draw.path(path)
    .stroke({
      width: 1,
      color: 'rgba(149, 169, 187,0.85)'
    }).fill('none').move(x,y)
    
  }) : null
  // $: console.log(letras);
  // $: letras.forEach(l=>console.log(l));
  
  


  $: height = window.innerHeight;
  $: width = window.innerWidth;
  


  const pathInfo = {x: 120};

  $: posX = pathInfo.x

  let contador = 0;

  let draw;

  onMount(()=>{
  

      draw = SVG('svg-frasesvivas').size(window.innerWidth,window.innerHeight)

      
      // let tl = new TimelineMax({
      //     yoyo: true,
      //     repeat: -1,
      // });
      
      // tl.to(pathInfo,1.5+(1.0*Math.random()),{
      //     x: 1200
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


  onDestroy(()=>{


    
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

.Info {
  position: absolute;
  bottom: 3rem;
  right: 0;
  padding: 5rem 2rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(179, 199, 217,0.3); */
  color: rgba(179, 199, 217,0.3);

  text-shadow: 3px 3px 3px var(--color-fondo);
  z-index: 80;
}
.Info .Significado {
  font-size: 2rem;
  font-weight: bold;
}
.Info .NombreLengua {
  font-size: 1.75rem;
  font-weight: bolder;
}

</style>



<svelte:head>
<title>INALI | Mapa interactivo</title>
</svelte:head>


<main>


{#each letras as letra, indice ("letra_"+indice) }
  
  <FormaLineas x={ posX +(90*(indice%18))} y={(Math.floor(indice/18)*170)} canvas={canvas} lineas={letra} opacidad={mostrar?1:0}/>
  
{/each}
 
  <!-- {#if !! letras[0] }
    <FormaLineas x={pathInfo.x+(156)} canvas={canvas} lineasPares={letras[0]}/>
  {/if} -->



</main>


<Pie />        


<div class="Info" transition:fade>

  <p class="Significado">No hay día y no hay noche, no hay lluvia y no hay Sol, y no hay hambre, van sin detenerse. </p>
  <h6 class="NombreLengua">
    Lengua: Tu'un savi
  </h6>
</div>