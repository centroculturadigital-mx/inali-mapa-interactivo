<script>

  import { tap } from '@sveltejs/gestures';


  import interact from 'interactjs'
  import { onMount } from 'svelte'

  import Fa from '../../../../node_modules/svelte-fa/dist/svelte-fa.mjs';
  import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";


  let contenedor

  let ultimoTouchMoveY
  let ultimoTouchMoveX

  let ultimoScrollVentanaY = 0
  let ultimoScrollVentanaX = 0


  let cierraIcono = faArrowCircleLeft;

  export let cerrarDetalle;


  onMount(()=>{

    // botonFamiliaVentanaCerrar.addEventListener("touchstart",cerrarVentana)

    if(!!contenedor) {

      interact(contenedor)
      .draggable({
        autoScroll:true,
        onstart: (e) => {
          
          ultimoTouchMoveY = e.clientY
          ultimoTouchMoveX = e.clientX
            
        },
        onmove: (e) => {
          
          let top=contenedor.getBoundingClientRect().top
          let right=contenedor.getBoundingClientRect().right
          let bottom=contenedor.getBoundingClientRect().bottom
          let left=contenedor.getBoundingClientRect().left
          if(
            // adentro verticalmente
            e.clientY > top && e.clientY < bottom
            &&
            // adentro horizontalmente
            e.clientX > left && e.clientX < right
            // &&
            // extremo derecho
            // e.clientX > right - 50
          )  {

            
            let diferenciaY = (ultimoTouchMoveY-e.clientY)
            let diferenciaX = (ultimoTouchMoveX-e.clientX)
            
            
            if( Math.abs(diferenciaX) < Math.abs(diferenciaY) ) {
              
              ultimoScrollVentanaY += diferenciaY

              contenedor.scrollTo({
                top: diferenciaY*30,
                behavior: 'smooth'
              })
            
            }
            
            ultimoTouchMoveY = e.clientY
            ultimoTouchMoveX = e.clientX
            // const proporcionY = (e.clientY-top)/(bottom-top)
            // const alturaDestino = document.querySelector(".FamiliaVentana").offsetHeight * proporcionY;
            
            
            // contenedor.scrollTo({
            //   top: alturaDestino,
            //   behavior: 'smooth'
  
            // } )
          }
        }
      })
    
    }
  })



</script>

<style>
  /* section .Detalle {
    width: 100%;
  } */
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
    overflow-y: hidden;
    text-align: justify;
    color: #454344;
    height: 390px;
  }
  .Texto p {
    padding: 0 0.5rem;
  }
  .OcultarWrapper {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    width: 100%;
  }
  .Ocultar {
    border: 0;
    background-color: #fff;
  }

  .Texto {
    padding: 0 .75rem;
  }
</style>

<section class="Detalle">
  <div class="OcultarWrapper">
    <button class="BotonConIcono Ocultar" use:tap on:tap={cerrarDetalle}>
      <i class="fa fa-arrow-left"></i>
      <!-- <Fa icon={cierraIcono} /> -->
    </button>
  </div>
  <section class="TextoWrapper" bind:this={contenedor}>
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
