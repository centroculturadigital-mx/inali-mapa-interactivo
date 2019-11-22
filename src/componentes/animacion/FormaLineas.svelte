<script>

    import { onMount } from 'svelte'


    import { TweenLite, TimelineMax } from 'gsap';

    import Paper from 'paper';

	// import puntosFake from "../../datos/puntosFake"


    export let canvas;
    export let lineas;
    export let color = "rgb(179, 199, 217)"
    export let x=0;
    export let y=0;
    export let step = 6;
    
    $: posX = x
    $: posY = y

    $: console.log(posX,y);
    
    let lineasDibujadas = []

    
    // $: !! canvas ? crearLineas(lineas,x) : null


    onMount(()=>{

        crearLineas(lineas)
        
        // setInterval(animarLineas,10000)

        // animarLineas()

    })
    
    // const animarLineas = () => {
    //     lineasDibujadas.forEach((linea,i)=>{
    //         // console.log(linea);
            
    //         let tl = new TimelineMax();
    //         const lineaX = 3 + parseInt(posX) + (i*step);

    //         tl
    //         .to(linea.position,10,{
    //             x: lineaX,
    //         })

    //     })
    // }

    const crearLineas = pares => {


        // console.log("craerlineas",pares);
        
        
        lineasDibujadas = []


        if(!!pares){

            // const circulo = new Paper.Path.Circle(
            //     new Paper.Point(x,y),
            //     3
            // );
            // circulo.strokeColor = new Paper.Color(color);

            pares.forEach((lineaPares,i)=>{
                
                lineaPares.forEach((p)=>{
                    if( p.length == 2 ) {

                        
                        const lineaX = 3 + parseInt(posX) + (i*step);
                        const y0 = parseInt(posY) + p[0].y;
                        const y1 = parseInt(posY) + p[1].y;
                            
                        const linea = new Paper.Path.Line(
                            new Paper.Point(lineaX,y0),
                            new Paper.Point(lineaX,y1)
                        );

                        // let r = (155/255)+Math.random()*0.05
                        // let g = (173/255)+Math.random()*0.1
                        // let b = (192/255)+Math.random()*0.25
                        let opacity = ((2/3)+Math.random()/3)

                        linea.strokeColor = new Paper.Color(color,opacity);
                        
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
                            y: y0-(10+Math.sin((i%12*12))*0.15),
                        })
                        .to(linea.segments[0].point,1/8+(Math.random()/2),{
                            y: y0-(30+Math.sin((i%12*12))*1.5),
                        })
                        .to(linea.segments[0].point,1/8+(Math.random()/2),{
                            y: y0,
                        })
                        .to(linea.segments[0].point,1/8+(Math.random()/2),{
                            y: y0-(10+Math.sin((i%12*12))*0.25),
                        })
                        
                        tl
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: y1+(10+Math.sin((i%12*12))*0.15),
                        })
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: y1+(30+Math.sin((i%12*12))*1.5),
                        })
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: y1,
                        })
                        .to(linea.segments[1].point,1/8+(Math.random()/2),{
                            y: y1+(10+Math.sin((i%12*12))*0.25),
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
                        

                        lineasDibujadas.push(linea);
                    }
                })
            })


        
        }
    }



</script>