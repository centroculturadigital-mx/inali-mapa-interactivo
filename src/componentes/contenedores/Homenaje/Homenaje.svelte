<script>
    let portilla = 'leon-portilla.png';


  import interact from 'interactjs'
  import { tap } from '@sveltejs/gestures';
  import { onMount } from 'svelte';

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();


  const cerrar = () => {
    
    dispatch("cerrar")
    
  }

  let contenedor

  let ultimoTouchMoveY
  let ultimoTouchMoveX

  let ultimoScrollVentanaY = 0
  let ultimoScrollVentanaX = 0

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

    const datos =  {
    titulo: "Miguel León-Portilla",
    fecha: "(22 de febrero de 1926 - 1° de octubre de 2019 )",
    textoHomenaje: "Impulsor fundamental del estudio y pensamiento de las lenguas indígenas, de la otra realidad no percibida, de lo oculto en la belleza de las flores y el origen de los cantos. Este Mapa se soporta en los pilares que construyó. Tlazocamati, tlamatini.",
 }
</script>

<style>


        .Homenaje {
            
            width: 16rem;
            height: 18rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            color: #333;
            box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
            z-index: 100;

        }

        .Encabezado {
            width: 100%;
            height: 3.25rem;
            background: #516980;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 0px 22px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            color: #fff;
        }

        .FotoHomenaje {
            display: flex;
        }

        img {
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            border-radius: 50%;
        }

        .Cerrar {
            padding: 0;
            background-color: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 1rem;
        }

        .Semblanza {
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

        .Texto * {
            padding-right: .5rem;
        }

        .Fecha{
            font-weight: 400;
        }

    
</style>
    
<section class="Homenaje">
    <header class="Encabezado">
        <div class="FotoHomenaje">
            <img src="{portilla}"  alt="homenaje">
        </div>
        <h4 class="TituloNombre">
            {datos.titulo}
        </h4>
        <button class="Cerrar" use:tap on:tap={cerrar}>
            <i class="fa fa-close"/>
        </button>
    </header>
    <div class="Semblanza">
        <div class="Texto" bind:this={contenedor}>
            <p class="Fecha">
                {datos.fecha}
            </p>
            <p>
                {datos.textoHomenaje}
            </p>
        </div>
    </div>
</section>
