<script>
  import { onMount } from "svelte";
  import Carousel from "@beyonk/svelte-carousel";
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
    height: 300px;
    width: 300px;
  }
  .Control {
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: gray;
  }
  .TextoFotos {
    position: absolute;
    bottom: 2rem;
    color: #fff;
    left: 2rem;
    height: auto;
    width: 90%;
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
