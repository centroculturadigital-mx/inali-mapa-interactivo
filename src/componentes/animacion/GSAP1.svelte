<script>

    import { onMount } from 'svelte'

    import { TweenLite } from 'gsap';

    import Paper from 'paper';

    export let canvas    

    //Paper.install(window);
    let colW = window.innerWidth / 30
    
    const numLineas = 7
    const numBarras = 8
    const numPuntos = 5
    const barras = []
    const lineas = []

    let currentWaiting = null
    let currentActive = null



    onMount(()=>{


        let frame;
        let count=0;

        const paper = Paper.setup(canvas);

        crearLineas()
        // crearBarras()


        setupClickLineas()

        
    })
    

    const crearLineas = () => {

        let colW = window.innerWidth / numLineas

        
        // let fondo = new Paper.Path.Rectangle(
        //     new Paper.Point(0,0),
        //     new Paper.Point(window.innerWidth,window.innerHeight),
        // );

        // fondo.fillColor = new Paper.Color(0.01,0.3,0.7+(count%130/1300));

        //Define array of paths (I've choose 12 because my multitouch table accept 12 touch max)
        for (var i = 0-15; i < numLineas+15; i++)
        {

                
            let x = (i*colW)
                
            let linea = new Paper.Path.Line(new Paper.Point(x,0),new Paper.Point(x,window.innerHeight));

            let r = 0.02+(i%4==0?0.3:0) + Math.random()/4
            let g = 0.7+(i%4==0?0.03:0)
            let b = 0.7+(i%14)/44
            let opacity = (((i%8)/12)+Math.random()/6)/2

            linea.strokeColor = new Paper.Color(r,g,b,opacity);
            
            linea.strokeWidth = 1

            


                let tl = new TimelineMax({
                    yoyo: true,
                    repeat: -1,
                });
                
                tl.to(linea.position,4,{
                    x: x+30+Math.sin((i*4))*0.8,
                })
                tl.to(linea.position,4,{
                    x: x-100+Math.sin((i*40))*1.23,
                })
                tl.to(linea.position,4,{
                    x: x,
                })

                
               
            
            

            lineas.push(linea);

        }

    }


    const crearBarras = () => {
        
        // let fondo = new Paper.Path.Rectangle(
        //     new Paper.Point(0,0),
        //     new Paper.Point(window.innerWidth,window.innerHeight),
        // );

        // fondo.fillColor = new Paper.Color(0.01,0.3,0.7+(count%130/1300));

        //Define array of paths (I've choose 12 because my multitouch table accept 12 touch max)
        for (var i = 0-5; i < numBarras+5; i++)
        {
            
            let barra = new Paper.Path();
            
            let r = 0.2+(i%4==0?0.3:0) + Math.random()/4
            let g = ((i%10)/10)+(i%4==0?0.5:0)
            let b = 0.5+(i%14)/14
            
            let opacity = ((i%8)/128)

            barra.strokeColor = new Paper.Color(r,g,b,opacity);
            // barra.strokeColor = new Paper.Color(0+(i%4==0?1:0),80/i,60/i,0.05+(i%32)/164);
            barra.strokeWidth = (i % 6)**3;

            let separacion = window.innerHeight / numPuntos+1;

            for (var j = 0; j < numPuntos; j++)
            {
                
                let x = (i*colW) - (
                    Math.cos(j)
                    * 0.25
                )
                let punto = new Paper.Point(
                    x+Math.sin(360/(j+1))*33.3,
                    j * separacion
                )              
                
                barra.add(punto)
            
                let tl = new TimelineMax({
                    yoyo: true,
                    repeat: -1,
                });
                
                tl.to(barra.segments[j].point,20,{
                    x: x+100+Math.sin((i*4+j+1))*3,
                    y: j*separacion+((i%12)-6)*3,
                    z: 1
                })
                tl.to(barra.segments[j].point,20,{
                    x: x-+Math.sin((i*4+j+1))*8,
                    y: j*separacion+((i%24)-12)*13,
                    z: 1
                })
                tl.to(barra.segments[j].point,20,{
                    x: x-100+Math.sin((i*4+j+1))*1.23,
                    y: j*separacion+((i%12)-6)*2,
                    z: 1
                })
                tl.to(barra.segments[j].point,20,{
                    x: x-+Math.sin((i*4+j+1))*23,
                    y: j*separacion+((i%12)-6)*33,
                    z: 1
                })
            
                let tlSW = new TimelineMax({
                    yoyo: true,
                    repeat: -1,
                });
                
                tlSW.to(barra,10,{
                    strokeWidth: (i%5)**3,
                })
                tlSW.to(barra,10,{
                    strokeWidth:( 5-i%5)*20,                  
                })
                tlSW.to(barra,10,{
                    strokeWidth: (12-i%12)**3,                  
                })

            }

            barra.smooth()
            barras.push(barra);

        }

    }



    const setupClickLineas = () => {

        document.body.addEventListener("click", (e)=>{
            // for(const barra of barras) {
            //     let tl = new TimelineMax({
            //         delay:Math.random()/4
            //     });

            //     if( Math.abs(barra.position.x - e.clientX) > 100 ) {
            //         tl.to(barra, Math.random()*10, {
            //             strokeWidth: Math.random()*400,
            //         });
            //     } else {
            //         tl.to(barra, Math.random()*10, {
            //             strokeWidth: 100-Math.abs(barra.position.x - e.clientX),
            //         });
            //     }
            // }
            for(const linea of lineas) {
                
                var tl = new TimelineMax({
                    delay:Math.random()/4
                });

                if( linea.position.x - e.clientX > 0 ) {
                    tl.to(linea.position, Math.random()*4, {
                        x: linea.position.x + Math.abs(linea.position.x-e.clientX)/8
                    });
                } else {
                    tl.to(linea.position, Math.random()*4, {
                        x: linea.position.x - Math.abs(linea.position.x-e.clientX)/8
                    });
                }
    
                
            }
        })

    }


</script>



