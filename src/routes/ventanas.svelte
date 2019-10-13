<script>

    import Ventana from "../componentes/contenedores/Ventana/Ventana.svelte";

    let ventanas = []

    if( typeof window != "undefined" ) {

        ventanas = [
            {
                test: "Contenido",
                origen: {
                    x: Math.random()*(window.innerWidth),
                    y: Math.random()*(window.innerHeight)
                },
                left: 0,
                top: 0
            },
            {
                test: "Contenido",
                origen: {
                    x: Math.random()*(window.innerWidth),
                    y: Math.random()*(window.innerHeight)
                },
                left: 0,
                top: 0
            },
            {
                test: "Contenido",
                origen: {
                    x: Math.random()*(window.innerWidth),
                    y: Math.random()*(window.innerHeight)
                },
                left: 0,
                top: 0
            }
        ]


        ventanas = ventanas.map(v=>{
        
            let wW = window.innerWidth;
            let wH = window.innerHeight;

            // let offX=1;
            // let offY=1;
            let vL;
            let vT;

            let diffX = Math.abs((wW/2)-v.origen.x)
            let diffY = Math.abs((wH/2)-v.origen.y)

            if( v.origen.x < wW/2  ) {
                vL = Math.max(Math.min((wW/2)-diffX,(wW-2)-240), 0)
            } else {
                vL = Math.max(Math.min((wW/2)+diffX,wW-240), wW/2)
            }

            if( v.origen.y < wH/2 ) {
                vT = Math.max(Math.min((wH/2)-diffY,(wW-2)-240), 0)            
            } else {
                vT = Math.max(Math.min((wH/2)+diffY,wH-240), wH/2)            
            }


            return {
                ...v,
                left: vL,
                top: vT,
            }

        })


    
    }





</script>


<style>
    .Ventanas {
        width: 100vw;
        height: 100vh;
        display: block;
        position: absolute;
        z-index: 1001;
    }

    .Origen {
        position: absolute;
        width: 2rem;
        height: 2rem;
        background-color: #f00;
        border-radius: 50%;
    }
</style>


<div class="Ventanas">


    {#each ventanas as ventana,i (i)}

        <Ventana {...ventana}>
            {ventana.test + parseInt(i+1)}
        </Ventana>

        <div class="Origen" style="left: {ventana.origen.x}px; top: {ventana.origen.y}px">
            {i+1}
        </div>

    {/each}


</div>