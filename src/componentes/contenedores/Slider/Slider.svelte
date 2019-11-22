<script>
  import { onMount } from "svelte";
  import Carousel from "@centroculturadigital-mx/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "../../../../node_modules/svelte-feather-icons/src/index.js";

  export let imagenes

  $: console.log(imagenes)
  
  onMount(() => {
    // fix para carga erronea de imagen
    window.dispatchEvent(new Event("resize"));
  });

  const escalarImagenCloudinary = src => {
    const partes = src.split("upload/")
    return partes[0] + "upload/w_192/" + partes[1]
  }


</script>

<style>
  .SlideContent {
    display: flex;
    justify-content: center;
    align-items: space-between;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .SlideContent img {
    object-fit: contain;
    width: 100%;
    height: 11rem;
  }
  .Control {
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .TextoFotos {
    position: absolute;
    bottom: 0;
    color: #fff;
    left: 0;
    height: auto;
    width: 80%;
    text-shadow: 1px 1px 0px rgba(0,0,0,0.8);
    /* background-color: rgba(0,0,0,0.45); */
    padding: 0.5rem 1.5rem;
    background: -moz-linear-gradient(bottom,  rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(bottom,  rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
    background: linear-gradient(to top,  rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);

  }
  .TextoFotos p {
    margin-bottom: 0;
    margin-top: 0.25rem;
  }
  
  .TextoFotosTitulo {
    font-size: 12px;
  }
  .TextoFotosSubTitulo {
    font-size: 10px;
  }
  /*  */
  :global(.carousel ul) {
    display: none;
  }
</style>

<!-- <Carousel perPage={{ 320: 1, 760: 1, 1024: 1, 1200: 1 }} loop> -->
{#if imagenes && imagenes.length} 
  <Carousel perPage={{ 800: 1 }} loop>

  <span class="Control" slot="left-control">
    <ChevronLeftIcon />
  </span>

  {#each imagenes as imagen}
    <div class="SlideContent">
      <img class="Imagen" src={escalarImagenCloudinary(imagen.url)} alt="INALI" />
      <div class="TextoFotos">
        {#if imagen.titulo}
          <h4 class="TextoFotosTitulo">{imagen.titulo}</h4>
        {/if }
        {#if imagen.creditos}
          <p class="TextoFotosSubTitulo">
          <span>Créditos: </span>
          <span>{imagen.creditos}</span>
          </p>
        {/if }
      </div>
    </div>
  {/each}

  <span class="Control" slot="right-control">
    <ChevronRightIcon />
  </span>

</Carousel>
{/if}