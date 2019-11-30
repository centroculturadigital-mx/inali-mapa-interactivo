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
	import textosVivos from "../../datos/textosvivos/01"


  export let mostrar = true;
  export let canvas;
  export let svg;

  export let texto=0
  $: resetearTextos(texto)

  const resetearTextos = () => {

  }



  // let letras = []
  $: textoVivo = (!!textosVivos && textosVivos.length > 1) ? textosVivos[texto] : { letras: [] }

  $: palabras = textoVivo ? textoVivo.svg.ids.map(id=>textoVivo.xy[id]) : {}
  $: palabrasSVG = textoVivo ? textoVivo.svg.ids.map(id=>textoVivo.svg.palabras.find(p=>p.id==id)) : []
  // $: console.log("palabras",palabrasSVG);
  

  const timeouts = []
  $: !! draw ? palabrasSVG.forEach( (p,h)=>{
    let t
    t = setTimeout(()=>{
    
      p.letras.forEach((path,i)=>{
        
        
        let tt = setTimeout(()=>{
          

          const posL = posicionLetra(palabras,h,i, { x: 200, y: 250, w: 1500 })
          
          const x= posL.x
          const y= posL.y

          
          draw.path(path)
          .stroke({
            width: 1,
            color: 'rgba(169, 194 , 217,0.85)'
          }).fill('rgba(149, 169, 187,0.2)').move(x,y)

        }, 80*i)

        timeouts.push(tt)

      })  

  
    },400*(h))

    timeouts.push(t)

  }) : null


  $: height = window.innerHeight;
  $: width = window.innerWidth;
  


  const pathInfo = {x: 120};

  $: posX = pathInfo.x

  let contador = 0;

  let draw;


  onMount(()=>{
      draw = SVG('svg-frasesvivas').size(window.innerWidth,window.innerHeight)      
  })


  onDestroy(()=>{

    timeouts.forEach(t=>clearTimeout(t));

    draw.clear();

  })
      
  const posicionLetra = ( palabras, palabraIndice, letraIndice, rect ) => {


      const posicion = { ...rect }
      const maxW = rect.w

      posicion.x = rect.x
      
      for(let h = 0; h<=palabraIndice; h++) {
        
        if( posicion.x > maxW) {
          posicion.y = posicion.y+180
          posicion.x = rect.x
        }


        
        let limite = !! palabras[h] ? palabras[h].length : 0
        // console.log(palabras[h],h);
        
        if( palabraIndice == h ) limite = letraIndice

        for(let i = 0; i<limite; i++) {
          
          // if( letraIndice > 0 ) {
            posicion.x = posicion.x+80;
          // }

        } 
      
        if( h>0 ) {
          posicion.x = posicion.x+100;
        }
        
      }

      return posicion


  }


function ucfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


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
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(179, 199, 217,0.3); */
  color: rgba(179, 199, 217,0.9);

  text-shadow: 6px 6px 6px var(--color-fondo);
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



{#each palabras as palabra, h ("palabra_"+h) }
  {#each palabra as letra, i ("palabra_"+h+"_letra_"+i) }
    
    <FormaLineas
    x={ posicionLetra(palabras,h,i, { x: 200, y: 150, w: 1500 }).x }
    y={ posicionLetra(palabras,h,i, { x: 200, y: 150, w: 1500 }).y }
    canvas={canvas}
    lineas={letra}
    opacidad={mostrar?1:0}
    />
    
  {/each}
{/each}

 
  <!-- {#if !! letras[0] }
    <FormaLineas x={pathInfo.x+(156)} canvas={canvas} lineasPares={letras[0]}/>
  {/if} -->



</main>


<Pie />        

{#if !! textoVivo}

  <div class="Info" transition:fade>

    <p class="Significado">{textoVivo.significado}</p>
    <h6 class="NombreLengua">
      <em>Aforismo <strong>{ucfirst(textoVivo.lengua.replace("_"," "))}</strong></em>
    </h6>
  </div>

{/if}