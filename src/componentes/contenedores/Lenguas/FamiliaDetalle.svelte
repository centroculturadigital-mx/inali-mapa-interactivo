<script>
  import Fa from "svelte-fa";
  import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

  let cierraIcono = faArrowCircleLeft;

  const ocultar = (e) => {
    
   console.log("Cierra ventanita", e);
    
  }
</script>

<style>
  section {
    width: 100%;
  }
  .Detalle {
    padding: 0;
    background-color: #fff;
    height: 100%;
  }
  .TextoWrapper {
    max-height: 42.7rem;
    background: #fff;
    font-size: 0.85rem;
    line-height: 1rem;
    overflow-y: auto;
    text-align: justify;
    color: #454344;
    height: 390px;
  }
  .Texto p {
    padding: 0 0.5rem;
  }
  .OcultarWrapper {
    display: flex;
    justify-content: right;
    height: 30px;
    width: 100%;
  }
  .Ocultar {
    border: 0;
    background-color: #fff;
  }
</style>

<section class="Detalle">
  <div class="OcultarWrapper">
    <!-- <button class="BotonConIcono Ocultar" on:click={cierraDetalle}> -->
    <button class="BotonConIcono Ocultar" on:click={ocultar}>
      <Fa icon={cierraIcono} />
    </button>
  </div>
  <section class="TextoWrapper">
    <div class="Texto">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod
        quidem delectus hic aspernatur sit eum rem laborum sequi, recusandae
        similique ut totam, dolores dignissimos veniam. Voluptatem error ipsam
        ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda veritatis hic illo dolore a voluptate perspiciatis, beatae
        nisi odit distinctio maiores reiciendis corporis obcaecati veniam, illum
        possimus at? Delectus, vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime
        quisquam optio quis aut nihil vero, ex fugiat non totam quidem modi,
        suscipit laboriosam molestiae placeat eligendi vel qui perspiciatis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime
        quisquam optio quis aut nihil vero, ex fugiat non totam quidem modi,
        suscipit laboriosam molestiae placeat eligendi vel qui perspiciatis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        consequuntur autem repudiandae ducimus nobis possimus facere sunt sint
        vero laudantium ex aperiam ipsa a, beatae neque, nostrum dolor animi
        sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        consequuntur autem repudiandae ducimus nobis possimus facere sunt sint
        vero laudantium ex aperiam ipsa a, beatae neque, nostrum dolor animi
        sit!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
        consequuntur commodi sed amet cum quasi minima voluptatum placeat est
        necessitatibus. Atque repudiandae laboriosam illum ea, magnam voluptatum
        sapiente architecto amet! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Eius consequuntur commodi sed amet cum quasi minima
        voluptatum placeat est necessitatibus. Atque repudiandae laboriosam
        illum ea, magnam voluptatum sapiente architecto amet!
      </p>
    </div>
  </section>
</section>
