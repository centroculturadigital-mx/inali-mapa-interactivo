<script>
  import Carousel from "@beyonk/svelte-carousel";
  // import Carousel from "../../../../node_modules/@beyonk/svelte-carousel/src/Carousel.svelte";
  // import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  import {
    ChevronLeftIcon,
    ChevronRightIcon
  } from "../../../../node_modules/svelte-feather-icons/src/index.js";

  let slides = new Array(10);
  //   .fill({
  //     imgURI: `http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`,
  //     credito: "Bernardo Gibraltar",
  //     propiedad: "INALI",
  //     nombre: "Nombre de imagen",
  //     archivo: "Archivo INALI",
  //     lengua: "Nombre Lengua",
  //     derechos: "Derechos reservados.",
  //     coleccion: "Colección INALI",
  //     pieDeFoto: "Descripción corta de la imagen contenida en el slide."
  //   });

  //   slides = slides.map(s => ({

  //       imgURI: `http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`,
  //       credito: "Bernardo Gibraltar",
  //       propiedad: "INALI",
  //       nombre: "Nombre de imagen",
  //       archivo: "Archivo INALI",
  //       lengua: "Nombre Lengua",
  //       derechos: "Derechos reservados.",
  //       coleccion: "Colección INALI",
  //       pieDeFoto: "Descripción corta de la imagen contenida en el slide."

  //   })
  //   );

slides = [
    {
      imgURI: `http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`,
      credito: "Bernardo Gibraltar",
      propiedad: "INALI",
      nombre: "Nombre de imagen",
      archivo: "Archivo INALI",
      lengua: "Nombre Lengua",
      derechos: "Derechos reservados.",
      coleccion: "Colección INALI",
      pieDeFoto: "Descripción corta de la imagen contenida en el slide."
    }]


//   slides = [
//     {
//       imgURI: `http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`,
//       credito: "Bernardo Gibraltar",
//       propiedad: "INALI",
//       nombre: "Nombre de imagen",
//       archivo: "Archivo INALI",
//       lengua: "Nombre Lengua",
//       derechos: "Derechos reservados.",
//       coleccion: "Colección INALI",
//       pieDeFoto: "Descripción corta de la imagen contenida en el slide."
//     },
//     {
//       imgURI: `http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`,
//       credito: "Bernardo Gibraltar",
//       propiedad: "INALI",
//       nombre: "Nombre de imagen",
//       archivo: "Archivo INALI",
//       lengua: "Nombre Lengua",
//       derechos: "Derechos reservados.",
//       coleccion: "Colección INALI",
//       pieDeFoto: "Descripción corta de la imagen contenida en el slide."
//     },
//     {
//       imgURI: `http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`,
//       credito: "Bernardo Gibraltar",
//       propiedad: "INALI",
//       nombre: "Nombre de imagen",
//       archivo: "Archivo INALI",
//       lengua: "Nombre Lengua",
//       derechos: "Derechos reservados.",
//       coleccion: "Colección INALI",
//       pieDeFoto: "Descripción corta de la imagen contenida en el slide."
//     },
//     {
//       imgURI: `http://unsplash.it/300/${100 + Math.floor(Math.random() * 500)}`,
//       credito: "Bernardo Gibraltar",
//       propiedad: "INALI",
//       nombre: "Nombre de imagen",
//       archivo: "Archivo INALI",
//       lengua: "Nombre Lengua",
//       derechos: "Derechos reservados.",
//       coleccion: "Colección INALI",
//       pieDeFoto: "Descripción corta de la imagen contenida en el slide."
//     }
//   ];

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
    bottom: 32px;
    color: #fff;
    left: 1rem;
    height: auto;
    width: 90%;
  }
  .TextoFotosSubTitulo {
    font-size: 12px;
  }
  /* .ContenedorCarrusel img {
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  } */
</style>
<!-- 
<Carousel perPage={{ 1024: 1 }} loop>

  <span class="Control" slot="left-control">
    <ChevronLeftIcon />
  </span> -->

  {#each slides as slide}
    <div class="SlideContent">
      <img class="Imagen" src={slide.imgURI} alt="INALI" />
      <div class="TextoFotos">
        <h4 class="TextoFotosTitulo">{slide.nombre}</h4>
        <p class="TextoFotosSubTitulo">{slide.pieDeFoto}</p>
      </div>
    </div>
  {/each}

<!-- 
  <span class="Control" slot="right-control">
    <ChevronRightIcon />
  </span>

</Carousel> -->
