<script>

    import { onMount } from 'svelte'


    import { TweenLite, TimelineMax } from 'gsap';

    import Paper from 'paper';

    export let canvas;

    let step = 6;
    
    let numLineas = Math.floor( window.innerWidth / step )
   
    const lineas = []

    
    

    onMount(()=>{


        crearLineas()

        
    })
    

    const crearLineas = () => {

      for( let i = 0; i<numLineas; i++) {


        
        const lineaX = (i*step);
            
        const linea = new Paper.Path.Line(
            new Paper.Point(lineaX,0),
            new Paper.Point(lineaX,window.innerHeight)
        );






        let r = 130/255
        let g = 153/255
        let b = 174/255
        let opacity = (1/2+Math.random()/2)

        linea.strokeColor = new Paper.Color(r,g,b,opacity);
        
        linea.strokeWidth = 1

        

        let tl = new TimelineMax({
            yoyo: true,
            repeat: -1,
        });
        
        tl.to(linea,1.5+(1.0*Math.random()),{
            opacity: Math.random()
        })
        tl.to(linea,1.5+(1.0*Math.random()),{
            opacity: 0.1
        })
        tl.to(linea,1.5+(1.0*Math.random()),{
            opacity: Math.random()
        })
        tl.to(linea,1.5+(1.0*Math.random()),{
            opacity: 0.5+(i%8)/16
        })
        tl.to(linea,1.5+(1.0*Math.random()),{
            opacity: Math.random()
        })
        tl.to(linea,1.5+(1.0*Math.random()),{
            opacity: 0.3+Math.random()/3
        })

        lineas.push(linea);
                    
          
      }


    }



</script>



