<script>
  import Drag from "../componentes/general/DragDrop/Drag.svelte";
  import Mapa from "../componentes/Mapa/Mapa.svelte";
  import FamiliaVentana from "../componentes/contenedores/Lenguas/FamiliaVentana.svelte";

  import { fade } from "svelte/transition";

  import familiasFake from "../../datosFalsos/familiasFake";

  import Informacion from "../componentes/contenedores/Informacion/Informacion.svelte";
  import Twitter from "../componentes/contenedores/Twitter/Twitter.svelte";
  import Homenaje from "../componentes/contenedores/Homenaje/Homenaje.svelte";

  let familiaMostrar;

  const seleccionar = e => {
    const id = e.detail.id;

    if (!!id) {
      familiaMostrar =
        familiasFake[Math.floor(Math.random() * familiasFake.length)];
    } else {
      familiaMostrar = null;
    }
  };

  const cerrar = () => {
    familiaMostrar = null;
  };

</script>

<style>

</style>

<svelte:head>
  <title>INALI | Mapa interactivo</title>
</svelte:head>

<!-- Interactividad -->
<Drag />
<!-- Elementos -->
<Mapa on:seleccionar={seleccionar} />
<!-- <Mapa on:seleccionar={console.log("aosijvieurn")}/> -->

{#if !!familiaMostrar}
  <div transition:fade>
    <FamiliaVentana familia={familiaMostrar} cerrar={cerrar} />
  </div>
{/if}


<!-- <Informacion/>
<Twitter/>
<Homenaje/> -->
