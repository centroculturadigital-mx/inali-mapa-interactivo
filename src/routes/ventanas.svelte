<script>

    import Ventana from "../componentes/contenedores/Ventana/Ventana.svelte";

    let ventanas = [
        {
            test: "Contenido",
            origen: {
                x: Math.random()*(window.innerWidth-400),
                y: Math.random()*(window.innerHeight-300)
            },
            left: 0,
            top: 0
        },
        {
            test: "Contenido",
            origen: {
                x: Math.random()*(window.innerWidth-400),
                y: Math.random()*(window.innerHeight-300)
            },
            left: 0,
            top: 0
        },
        {
            test: "Contenido",
            origen: {
                x: Math.random()*(window.innerWidth-400),
                y: Math.random()*(window.innerHeight-300)
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

        // if( v.origen.x < wW/2 && v.origen.y < wH/2 ) {
        //     offX*=-1;
        //     offY*=-1;
        // }
        // if( v.origen.x < wW/2 && v.origen.y > wH/2 ) {
        //     offX*=-1;
        // }
        // if( v.origen.x > wW/2 && v.origen.y < wH/2 ) {
        //     offY*=-1;
        // }

        let diffX = Math.abs((wW/2)-v.origen.x)
        let diffY = Math.abs((wW/2)-v.origen.x)

        let vL = (wW/2)+diffX
        let vT = (wH/2)+diffY
        // let vT =
    })


    





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
            {ventana.test}
        </Ventana>

        <div class="Origen" style="left: {ventana.origen.x}px; top: {ventana.origen.y}px"/>

    {/each}


</div>