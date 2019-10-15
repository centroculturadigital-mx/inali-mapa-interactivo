<script>
    import IconoInformacion from "./Iconos/IconoInformacion.svelte";
    import TituloMapa from "./Iconos/TituloMapa.svelte";

  import { createEventDispatcher } from 'svelte';


  import interact from 'interactjs'
  import { tap } from '@sveltejs/gestures';
  import { onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  let contenedor

  let ultimoTouchMoveY
  let ultimoTouchMoveX

  let ultimoScrollVentanaY = 0
  let ultimoScrollVentanaX = 0


  const cerrar = () => {
    
    dispatch("cerrar")
    
  }

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

        .Informacion {

            width: 16rem;
            height: 18rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            color: #333;
            box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
            z-index: -1;

        }

        .Encabezado {
            width: 100%;
            height: 3.25rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            background: #516980;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 0px 22px;
        }

        .TituloMapa {
            display: flex;
            justify-content: center;
        }

        .IconoInformacion {
            display: flex;
            flex-basis: 45%;
        }

        .IconoCerrarInfo {
            padding: 1rem;
            background-color: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            display: flex;
        }

         .Acerca {
            padding: .5rem 1.5rem;
        }

        .Texto {
            width: 100%;
            max-height: 13rem;
            overflow: hidden;
            color: #5E5E5E;
            font-style: normal;
            font-weight: normal;
            font-size: .75rem;
            line-height: 1.5;
        }
        
    
</style>
    
<section class="Informacion">
    <header class="Encabezado">
        <div class="TituloMapa">
            <TituloMapa/>
        </div>
        <button class="IconoInformacion" use:tap on:tap={cerrar}>
            <i class="fa fa-times-circle"/>
        </button>
    </header>
    <div class="Acerca">
        <div class="Texto" bind:this={contenedor}>
            <h3 class="Subtitulo">
                ACERCA DE 
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod quidem delectus hic aspernatur sit eum rem laborum sequi, recusandae similique ut totam, dolores dignissimos veniam. Voluptatem error ipsam ipsa!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis hic illo dolore a voluptate perspiciatis, beatae nisi odit distinctio maiores reiciendis corporis obcaecati veniam, illum possimus at? Delectus, vitae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quisquam optio quis aut nihil vero, ex fugiat non totam quidem modi, suscipit laboriosam molestiae placeat eligendi vel qui perspiciatis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quisquam optio quis aut nihil vero, ex fugiat non totam quidem modi, suscipit laboriosam molestiae placeat eligendi vel qui perspiciatis!
            </p>
            <p>
                Lore ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur autem repudiandae ducimus nobis possimus facere sunt sint vero laudantium ex aperiam ipsa a, beatae neque, nostrum dolor animi sit!
                Lore ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur autem repudiandae ducimus nobis possimus facere sunt sint vero laudantium ex aperiam ipsa a, beatae neque, nostrum dolor animi sit!
            </p>
        </div>
    </div>
</section>