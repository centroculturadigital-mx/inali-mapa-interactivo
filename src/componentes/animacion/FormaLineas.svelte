<script>

    import { onMount, onDestroy } from 'svelte'


    import { TweenLite, TimelineMax, TweenMax } from 'gsap';

    import Paper from 'paper';

	// import puntosFake from "../../datos/puntosFake"
	// import { getContext } from 'svelte';

    // const { getDrags } = getContext('drag');

    

    export let canvas;
    export let lineas;
    export let color = "rgb(179, 199, 217)"
    export let x=0;
    export let y=0;
    export let step = 6;
    
    export let dragW;
    
    
    let dragX;
    let dragY;
    


    $: posX = x
    $: posY = y

    let lineasTiempo = []
    let lineasDibujadas = []
    let lineasPosiciones = []

    // $: !! canvas ? crearLineas(lineas,x) : null

    $: moverLineas(dragX,dragY);

    let moviendo = false

    const moverLineas = (dragX,dragY)=>{
    
        if( !! dragX && ! moviendo ) {

            moviendo = setTimeout(()=>{
                
                // crearLineas(lineas);
                // console.log( lineasPosiciones[10] );
                
                lineasDibujadas.forEach((linea,i)=>{
                    
                    if(!!linea.segments[0].point&&!!linea.segments[1].point){
                        
                        let t = new TimelineMax();
                        // let t2 = new TimelineMax();
                        // let t3 = new TimelineMax();
                        
                        // const lineaX = 3 + parseInt(posX) + (i*step);

                        const rangoX = (lineasPosiciones[lineasPosiciones.length-1].x-lineasPosiciones[0].x)/2
                        const offsetX = (lineasPosiciones[i].x-lineasPosiciones[0].x)-rangoX

                        const minY = Math.min(...lineasPosiciones.map(lp=>(lp.y-lp.rangoY/2)))
                        const maxY = Math.max(...lineasPosiciones.map(lp=>(lp.y+lp.rangoY/2)))
                        const rangoY = maxY-minY
                        
                        const offsetY = lineasPosiciones[i].y-lineasPosiciones[i].rangoY/2 - minY - rangoY/2

                        // const rangoY = lineasPosiciones[i].rangoY
                        
                        lineasTiempo[i].clear()

                        

                        t                        
                        .to(linea.position,0.05,{
                            x: dragX+offsetX,
                            y: dragY+offsetY,
                            // y: dragY,
                        })
                        lineasTiempo[i] = aplicarLineasTiempo(
                            linea,
                            dragY+offsetY,//-lineasPosiciones[i].rangoY/4,//-rangoY/2,
                            dragY+offsetY,//+lineasPosiciones[i].rangoY/4,
                            i
                        )
                        
                        // t2                        
                        // .to(linea.segments[0].point,0.3,{
                        //     x: lineaX + dragX,
                        //     y: dragY+linea.segments[0].point.y,
                        // })
                        // t3                        
                        // .to(linea.segments[1].point,0.3,{
                        //     x: lineaX + dragX,
                        //     y: dragY+linea.segments[1].point.y,
                        // })
                        

                    }
                })
                
                moviendo = false;

            }, 30 )

        }
        
    }

    let unsubscribe;

    onMount(()=>{

        crearLineas(lineas)

        if(!!dragW){

            unsubscribe = dragW.subscribe(d=>{
                
                dragX = d.x
                dragY = d.y
            })

        }
        // console.log("crear");
        
        // setInterval(animarLineas,10000)

        // animarLineas()

    })
    


    onDestroy(()=>{

        
        setTimeout(()=>{
            
            lineasDibujadas.forEach((l,i)=>{
                    setTimeout(()=>{
                        l.remove()
                        delete lineasDibujadas[i]
                    },30+Math.random(666))
                })

        },1000)

        animarLineas()

        if( typeof(unsubscribe) == "function" ) {
            unsubscribe();
        }
        // animarLineas()

    })
    
    const animarLineas = () => {
        lineasDibujadas.forEach((linea,i)=>{
            // console.log(linea);
            
            let tl = new TimelineMax();
            // let tl2 = new TimelineMax();
            const lineaX = 3 + parseInt(posX) + (i*step);

            const c = new Paper.Color(color).components;
            const {red,green,blue} = c
            
            console.log(c);
            
            
            tl
            .set(linea.strokeColor,{
                // position: {x: lineaX + Math.random()*30},
                red: c[0],
                green: c[1],
                blue: c[2],
                alpha:1
            })
            .to(linea.strokeColor,3,{
                // position: {x: lineaX + Math.random()*30},
                red: c[0],
                green: c[1],
                blue: c[2],
                alpha:0
            })

        })
    }

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

                        // console.log("posY",(linea.position.y-(y0+((y0-y1)/2))));
                        
                        // let c = new Paper.Path.Circle(new Paper.Point(lineaX,linea.position.y),2);
                        // c.strokeColor = color

                        // let r = (155/255)+Math.random()*0.05
                        // let g = (173/255)+Math.random()*0.1
                        // let b = (192/255)+Math.random()*0.25
                        let opacity = ((2/3)+Math.random()/3)

                        linea.strokeColor = new Paper.Color(color,opacity);
                        
                        linea.strokeWidth = 1

                        

                        const tl = aplicarLineasTiempo(linea,y0,y1,i)

                        lineasTiempo.push(tl);

                        lineasDibujadas.push(linea);
                        lineasPosiciones.push({
                            x: linea.position.x,
                            y: linea.position.y,
                            rangoY: linea.segments[1].point.y - linea.segments[0].point.y,
                        });
                        
                    }
                })
            })


        
        }
    }


    const aplicarLineasTiempo = (linea,y0,y1,i) => {
        
        const tl = new TimelineMax({
            yoyo: true,
            repeat: -1,
        });
                        
                        
        tl
        .to(linea.segments[0].point,1/8+(Math.random()/2),{
            y: y0,
        })
        .to(linea.segments[0].point,1/8+(Math.random()/2),{
            y: y0-(10+Math.sin((i%12*12))*0.75),
        })
        .to(linea.segments[0].point,1/8+(Math.random()/2),{
            y: y0-(30+Math.sin((i%12*12))*1),
        })
        .to(linea.segments[0].point,1/8+(Math.random()/2),{
            y: y0-(30+Math.sin((i%12*12))*1.25),
        })
        .to(linea.segments[0].point,1/8+(Math.random()/2),{
            y: y0,
        })
        .to(linea.segments[0].point,1/8+(Math.random()/2),{
            y: y0-(10+Math.sin((i%12*12))*0.25),
        })
        
        tl
        .to(linea.segments[1].point,1/8+(Math.random()/2),{
            y: y1+(10+Math.sin((i%12*12))*0.01),
        })
        .to(linea.segments[1].point,1/8+(Math.random()/2),{
            y: y1+(30+Math.sin((i%12*12))*2.5),
        })
        .to(linea.segments[1].point,1/8+(Math.random()/2),{
            y: y1,
        })
        .to(linea.segments[1].point,1/8+(Math.random()/2),{
            y: y1+(10+Math.sin((i%12*12))*0.25),
        })

        return tl

    }



</script>