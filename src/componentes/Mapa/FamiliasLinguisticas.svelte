<script>

  import drop from "../../funciones/drop";
  import shuffle from "../../funciones/shuffle";
  import { onMount } from "svelte";
  import { createEventDispatcher } from 'svelte';

  import zonasFamilias from "../../datos/zonasFamilias";
  import posArea from "../../datos/posArea";
  import posDrag from "../../datos/posDrag";

  const dispatch = createEventDispatcher();

    
  const funcionDrag = ( id, x, y ) => {
      
    dispatch('seleccionar', {id, x, y});
    
  }

  onMount(() => {
    // aplica funcion drop a area zona linguistica
    zonasFamilias.forEach(zona => {
      // console.log(index)
      if (zona.class === "dropall") {
        drop("#" + zona.id, "#" + zona.related, zona.fill, funcionDrag);
      }
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
        item.style.webkitTransform = item.style.transform = `translate(${posDrag[index][0]}px, ${posDrag[index][1]}px)`;
        item.setAttribute("data-x", posDrag[index][0]);
        item.setAttribute("data-y", posDrag[index][1]);
      });
      
    }

    if (typeof window != "undefined") {
      distribucionAreas();
    }
  }); //onMount


</script>

<style>
  path {
    transform-origin: center;
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

{#each zonasFamilias as zona}
  {#if zona.class == "dragall"} 
    <g class="zonaDragAnim">
      <path
        id={zona.id}
        class={zona.class}
        d={zona.d}
        fill={zona.fill}
        stroke={zona.fill}
        stroke-width={0.05}
        stroke-linejoin="round"
        opacity={zona.opacity} />
    </g>
  {:else}
  <!-- evita animacion en las areas fijas -->
    <path
      id={zona.id}
      class={zona.class}
      d={zona.d}
      fill={zona.fill}
      stroke={zona.fill}
      stroke-width={0.05}
      stroke-linejoin="round"
      opacity={zona.opacity} />
  {/if}
{/each}
