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
        <div class="TituloNombre">
            <h4>
                Miguel León Portilla
            </h4>
        </div>
        <button class="Cerrar" use:tap on:tap={cerrar}>
            <i class="fa fa-close"/>
        </button>
    </header>
    <div class="Semblanza">
        <div class="Texto" bind:this={contenedor}>
            <p class="Fecha">
                Ciudad de México, 22 de febrero de 1926-Ibidem, 1 de octubre de 2019.
            </p>
            <p>
                Su nombre aparece en los documentos académicos como Miguel León-Portilla, fue un filósofo e historiador mexicano, experto reconocido en materia del pensamiento y la literatura de la cultura náhuatl.2​ 
            </p>
            <p>
                Desde 1988, se desempeñó como investigador emérito de la Universidad Nacional Autónoma de México, recibió la Medalla Belisario Domínguez en 1995, y desde el 23 de marzo de 1971 era miembro de El Colegio Nacional, institución para cuyo ingreso presentó la ponencia La historia y los historiadores en el México antiguo, y fue recibido con discurso de Agustín Yáñez.
            </p>
        </div>
    </div>
</section>
