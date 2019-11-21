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

                        let r = (155/255)+Math.random()*0.05
                        let g = (173/255)+Math.random()*0.1
                        let b = (192/255)+Math.random()*0.25
                        let opacity = ((2/3)+Math.random()/3)

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
                        
                        tl
                        .to(linea.segments[0].point,1/8+(Math.random()/2),{
                            y: p[0].y-(10+Math.sin((i%12*12))*0.15),
                        })
                        .to(linea.segments[0].point,1/8+(Math.random()/2),{
                            y: p[0].y-(30+Math.sin((i%12*12))*1.5),
                        })
                        .to(linea.segments[0].point,1/8+(Math.random()/2),{
                            y: p[0].y,
                        })
                        .to(linea.segments[0].point,1/8+(Math.random()/2),{
                            y: p[0].y-(10+Math.sin((i%12*12))*0.25),
                        })
                        
                        tl
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: p[1].y+(10+Math.sin((i%12*12))*0.15),
                        })
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: p[1].y+(30+Math.sin((i%12*12))*1.5),
                        })
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: p[1].y,
                        })
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: p[1].y+(10+Math.sin((i%12*12))*0.25),
                        })
                        


                        // const targetVals = [
                        //     Math.round(Math.random()*18),
                        //     Math.round(Math.random()*3),
                        //     Math.round(Math.random()*2),
                        //     Math.round(Math.random()*4),
                        // ]


                        // tlSW.to(linea,10*Math.random(),{
                        //     strokeWidth: 1+targetVals[0],
                        //     opacity: 1-((targetVals[0]/18)*(3/4)),
                        // })
                        // .to(linea,10*Math.random(),{
                        //     strokeWidth: 1+targetVals[0],
                        //     opacity: 1-((targetVals[0]/18)*(3/4)),
                        // })
                        // .to(linea,10*Math.random(),{
                        //     strokeWidth: 1,
                        // })
                        // .to(linea,10*Math.random(),{
                        //     strokeWidth: 1+targetVals[0],
                        //     opacity: 1-((targetVals[0]/18)*(3/4)),
                        // })
                        // .to(linea,10*Math.random(),{
                        //     // strokeWidth: 1+targetVals[0],
                        //     opacity: 1-((targetVals[0]/18)*(3/4)),
                        // })
                        

                        lineas.push(linea);
                    }
                })
            })


        
        }
    }



</script>



