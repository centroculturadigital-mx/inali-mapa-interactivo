<script>
  import { onMount } from "svelte";
  import Carousel from "@centroculturadigital-mx/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "../../../../node_modules/svelte-feather-icons/src/index.js";
  import slides from "../../../../datosFalsos/slidesFake";
  
  onMount(() => {
    // fix para carga erronea de imagen
    window.dispatchEvent(new Event("resize"));
  });


</script>

<style>
  .SlideContent {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .SlideContent img {
    object-fit: cover;
    width: 100%;
    height: 9rem;
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
    left: 1.5rem;
    height: auto;
    width: 90%;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
  }
  
  .TextoFotosSubTitulo {
    font-size: 12px;
  }
</style>

<!-- <Carousel perPage={{ 320: 1, 760: 1, 1024: 1, 1200: 1 }} loop> -->
<Carousel perPage={{ 800: 1 }} loop>

  <span class="Control" slot="left-control">
    <ChevronLeftIcon />
  </span>

  {#each slides as slide}
    <div class="SlideContent">
      <img class="Imagen" src={slide.imgURI} alt="INALI" />
      <div class="TextoFotos">
        <h4 class="TextoFotosTitulo">{slide.nombre}</h4>
        <p class="TextoFotosSubTitulo">{slide.pieDeFoto}</p>
      </div>
    </div>
  {/each}

  <span class="Control" slot="right-control">
    <ChevronRightIcon />
  </span>

</Carousel>
