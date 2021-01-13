<script>

    import { onMount } from 'svelte'
    // import Raphael from 'raphael';

    if( typeof window != 'undefined' ) {
        
        let canvas    

        let colW = window.innerWidth / 80
        
        const olas = []

        let currentWaiting = null
        let currentActive = null

        let ultimoClickX = 0
        let ultimoClickY = 0 

        let paper
        let variador = 0


        let lineas
        
        const inicializarLineas = () => {
            
            lineas = paper.set()
            
            let distancia

            let posicion = 0
            while (posicion < window.innerWidth) {
                distancia = Math.abs(ultimoClickX - posicion)
                variador = distancia > 10 ? 0 : distancia / 10  
                posicion += 4 - variador
                lineas.push(
                    paper.path(`M ${posicion}, 0 L ${posicion}, ${window.innerHeight}`)
                    .attr({stroke: "#5a7187"})
                )
            }
        }

        const dibujarLineas = () => {
            
            let distancia

            let posicion = 0
            let i = 0

            if (!!ultimoClickX) {
                while (posicion < window.innerWidth) {
                    
                    distancia = Math.abs(ultimoClickX - posicion)
                    variador = distancia > 30 ? 0 : distancia / 10
                    
                    posicion += 4 + variador

                    // if( distancia < 30 ) {
                        lineas[i].animate({
                            path: `M ${posicion}, 0 L ${posicion}, ${window.innerHeight}`
                        }, 1000)

                    // }

                    i++
                }

                ultimoClickX = null
            }
        }

        onMount(async ()=>{
            
            let Raphael
            await import('raphael')
            .then((something) => {
                Raphael=something.default
            });
            
            
            paper= Raphael(0, 0, window.innerWidth, window.innerHeight);
            
            inicializarLineas()

            document.body.addEventListener("click",(e)=>{
                ultimoClickX = e.clientX
                ultimoClickY = e.clientY
                // dibujarLineas()
                // circle.attr({
                //     cx: mouseX,
                //     cy: mouseY
                // })
            })
            


            
            
            let frame;
            let count=0;

            

    /*         return () => {
        cancelAnimationFrame(frame);
            };
    */       




            

            (function loop() {
                
                frame = requestAnimationFrame(loop);
                count++

                if( count % 30 == 0 ) {

                }
                // paper.clear()
                dibujarLineas()
                
            }());

            
        })
    }
    
</script>


<style>


    * {
        box-sizing: border-box;
    }

    svg {
        z-index: -1;
    }
</style>