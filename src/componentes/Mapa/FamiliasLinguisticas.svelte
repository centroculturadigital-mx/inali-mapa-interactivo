<script>

  import drop from "../../funciones/drop";
  import shuffle from "../../funciones/shuffle";
  import { onMount } from "svelte";
  import { createEventDispatcher } from 'svelte';
  import { fade } from "svelte/transition";

  import audios from "../../datos/zonasAudioFamiliasPuntos";
  import zonasFamilias from "../../datos/zonasFamilias";
  import posArea from "../../datos/posArea";
  import posDrag from "../../datos/posDrag";

  import CanvasSetup from "../animacion/CanvasSetup.svelte";
  import FormaLineas from "../animacion/FormaLineas.svelte";

  const dispatch = createEventDispatcher();


  import { daDrags } from "../../stores/drags"

  // const daDrags = getDrags();

  
  // $: console.log("dadrags",daDrags);
  

  // let canvas;
  export let canvas;
  export let zonasDrag = {};
  // export let drags;
  
  

  // $: dragArray = zonasFamilias.map(f=>drags[f.id])

  // $: !! drags ? (()=>{dragArray=dragArray})() : null
  
  const zonaDrop = []
  
  $: cajasDrop = !! canvas ? zonaDrop.map(
    z=>({
      x: ((canvas.clientWidth/1368)*(1368/35.5))*(z.getBBox().x-37.47777777777779),
      y: ((canvas.clientHeight/768)*(768/19.959004392386532))*(z.getBBox().y-37.591661213362585)-(100*dY)
    })
  ) : []

  $: dX = window.innerWidth / 1368
  $: dY = window.innerHeight / 768
  
  $: dMX = 1368/35.5
  $: dMY = 768/19.959004392386532

  $: zonasAudios = audios.map(lns=>lns.map(lnsprs=>lnsprs.map(prs=>prs.map(p=>({x:p.x*dX,y:p.y*dY})))))
  
  $: cajasDrag = !! canvas ? zonaDrop.map(
    (z,i)=>({
      x: (dX*dMX)*(z.getBBox().x+parseInt(posDrag.find(p=>p.id==zonasFamilias[i].id).posicion[0])-37.47777777777779),
      y: (dY*dMY)*(z.getBBox().y+parseInt(posDrag.find(p=>p.id==zonasFamilias[i].id).posicion[1])-37.591661213362585)-(95*dY)
    })
  ) : []

  // $: zonasAudios = audios.map(lns=>lns.map(prs=>prs.map(p=>({x:p.x*dX,y:p.y*dY}))))
  // $: zonasAudios = audios.map(prs=>prs.map(p=>({x:p.x*dX,y:p.y*dY})))
  // $: console.log(zonasAudios);
  
  
  const funcionDrop = ( idZona, x, y, idFamilia ) => {
      
    dispatch('seleccionar', {idZona, x, y, idFamilia});
    
  }
  
  const funcionDropFuera = ( idZona ) => {
      
    delete zonasDrag[ idZona.split("-drop")[0] ]

    zonasDrag = zonasDrag

    console.log(idZona,zonasDrag);
    

  }

  onMount(() => {
    // aplica funcion drop a area zona linguistica
    zonasFamilias.forEach(zona => {
       // console.log(index)
      drop( zona, funcionDrop, funcionDropFuera );
    });

    
    // Mientras: Distribucion aleatoria hardcodeada
    function distribucionAreas() {
      
      let dragall = document.querySelectorAll(".dragall");
      let dropall = document.querySelectorAll(".dropall");

      // let posDrag = shuffle(posDrag);
      
      dropall.forEach((item, index) => {
        item.style.webkitTransform = item.style.transform = `translate(${posArea[index][0]}px, ${posArea[index][1]}px)`;
        item.setAttribute("data-x", posArea[index][0]);
        item.setAttribute("data-y", posArea[index][1]);
      });
      
      dragall.forEach((item, index) => {
        item.style.webkitTransform = item.style.transform = `translate(${posDrag[index].posicion[0]}px, ${posDrag[index].posicion[1]}px)`;
        item.setAttribute("data-x", posDrag[index].posicion[0]);
        item.setAttribute("data-y", posDrag[index].posicion[1]);
      });
      
    }

    if (typeof window != "undefined") {
      distribucionAreas();
    }


    zonaDrop = zonaDrop
    
  }); //onMount

  const zonasM = zonasFamilias.map(z=>({
    x: z.d.split(/\b(\s)/)[0].split("M")[1].split(",")[0],
    y: z.d.split(/\b(\s)/)[0].split("M")[1].split(",")[1]
  }))


  // console.log("zonasM",zonasM);
  
  const manejarMoverZona = id => {
    zonasDrag[id] = true
  }


</script>

<style>

  path {
    transform-origin: center;
    transition: fill-opacity 1s, stroke-opacity 1s, opacity 1s;
    
  }

  .dropall {
    stroke-opacity: 0;
    fill-opacity: 0;
    -webkit-transition: fill-opacity 1s, stroke-opacity 1s;
    transition: fill-opacity 1s, stroke-opacity 1s;
  }

  /* .zonaDragAnim:hover {
    animation: flota 1s infinite;
    transform-origin: 50% 50%;
  }
  @keyframes flota {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.012);
    }
    100% {
      transform: scale(1);
    }
  } */
</style>

{#each zonasFamilias as zona,i}
    <g class="zonaDragAnim">
      
    <!-- {#if ! zonasDrag[zona.id]} -->

        <path
          id={zona.id+"-drag"}
          class="dragall"
          d={zona.d}
          fill={zona.fill}
          stroke={zona.fill}
          stroke-width={0.05}
          stroke-linejoin="round"
          opacity={ ! zonasDrag[zona.id] ? 0.85 : 0 }
          transition:fade
        />
    <!-- {/if} -->


    </g>
    <path
      id={zona.id+"-drop"}
      class="dropall"
      d={zona.d}
      fill={zona.fill}
      stroke={zona.fill}
      stroke-width={0.05}
      stroke-linejoin="round"
      bind:this={zonaDrop[i]}
    />
    

{/each}

{#if !! canvas && !! dX && !! cajasDrop.length>0 }
  
  <CanvasSetup canvas={canvas}/>

  {#each zonasFamilias as zona,i}
    {#if zonasDrag[zona.id]}
          <FormaLineas
            x={cajasDrop[i].x}
            y={cajasDrop[i].y}
            canvas={canvas}
            lineas={zonasAudios[i]}
            color={zona.fill}
            step={ 6 * dX }
          />
          
          <!-- x={cajasDrag[i].x}
          y={cajasDrag[i].y} -->

          <FormaLineas
            x={cajasDrag[i].x}
            y={cajasDrag[i].y}
            canvas={canvas}
            lineas={zonasAudios[i]}
            color={zona.fill}
            step={ 6 * dX }
            dragW={ !! daDrags ? daDrags[ zonasFamilias[i].id ] : null }
          />
    {/if}
  {/each}

{/if}

