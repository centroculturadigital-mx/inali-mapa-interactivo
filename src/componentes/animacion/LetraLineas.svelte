<script>

    import { onMount } from 'svelte'


    import { TweenLite, TimelineMax } from 'gsap';

    import Paper from 'paper';

    export let canvas;
    export let pares;
    export let step = 6;
    export let x;
    
   
    const lineas = []

    
    $: crearLineas(pares)



    onMount(()=>{


        const paper = Paper.setup(canvas);

        // crearLineas(pares)

        
    })
    

    const crearLineas = (pares) => {
        if(!!pares){

            pares.forEach((lineaPares,i)=>{
                
                lineaPares.forEach((p)=>{
                    if( p.length == 2 ) {

                        
                        const lineaX = 3 + parseInt(x) + (i*step);
                            
                        const linea = new Paper.Path.Line(
                            new Paper.Point(lineaX,p[0].y),
                            new Paper.Point(lineaX,p[1].y)
                        );

                        let r = 0.2+(i%4==0?0.2:0) + Math.random()/8
                        let g = 0.2+(i%4==0?0.4:0) + Math.random()/3
                        let b = 0.7+((i%14)/14)/6
                        let opacity = ((1/4)+Math.random()/4)

                        linea.strokeColor = new Paper.Color(r,g,b,opacity);
                        
                        linea.strokeWidth = 1

                        

                        let tl = new TimelineMax({
                            yoyo: true,
                            repeat: -1,
                        });
                        
                        let tlSW = new TimelineMax({
                            yoyo: true,
                            repeat: -1,
                        });
                        
                        tl.to(linea.segments[0].point,(Math.random()/2),{
                            y: p[0].y-(30+Math.sin((i%12*12))*0.15),
                        })
                        tl.to(linea.segments[1].point,(Math.random()/2),{
                            y: p[1].y+(30+Math.sin((i%12*12))*0.15),
                        })

                        tlSW.to(linea,10*Math.random(),{
                            strokeWidth: 1+parseInt(Math.random()*3),
                        }).to(linea,10*Math.random(),{
                            strokeWidth: 1+parseInt(Math.random()*3),
                        })
                        

                        lineas.push(linea);
                    }
                })
            })


        
        }
    }



</script>



