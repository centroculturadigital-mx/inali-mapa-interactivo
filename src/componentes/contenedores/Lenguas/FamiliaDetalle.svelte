<script>

  import { tap } from '@sveltejs/gestures';


  import interact from 'interactjs'
  import { onMount } from 'svelte'

  import Fa from '../../../../node_modules/svelte-fa/dist/svelte-fa.mjs';
  import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

  export let informacion

  let contenedor

  let ultimoTouchMoveY
  let ultimoTouchMoveX

  let ultimoScrollVentanaY = 0
  let ultimoScrollVentanaX = 0


  let cierraIcono = faArrowCircleLeft;

  export let cerrarDetalle;


  onMount(()=>{

     if(!!contenedor) {

      interact(contenedor)
      .draggable({
        autoScroll:true,
        onstart: (e) => {
          
          ultimoTouchMoveY = e.clientY
          ultimoTouchMoveX = e.clientX
            
        },
        onend: (e) => {
          
          ultimoTouchMoveY = null
          ultimoTouchMoveX = null
            
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
              
              ultimoScrollVentanaY += diferenciaY*3

              ultimoScrollVentanaY = Math.min( ultimoScrollVentanaY, document.querySelector(".VentanaFamilia").offsetHeight - 240 )

              contenedor.scrollTo({
                top: ultimoScrollVentanaY,
                behavior: 'smooth'
              })
            
            }
            
            ultimoTouchMoveY = e.clientY
            ultimoTouchMoveX = e.clientX
            
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
    font-size: 0.65rem;
    line-height: 1rem;
    overflow-y: hidden;
    text-align: left;
    color: #454344;
    height: 390px;
  }
  .Texto p {
    padding: 0 0.5rem;
    white-space: pre-line;
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
    color: #afafaf;
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
        {informacion}
      </p>
    </div>
  </section>
</section>
