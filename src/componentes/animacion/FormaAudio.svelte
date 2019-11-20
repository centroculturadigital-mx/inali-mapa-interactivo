<script>
  import interact from 'interactjs'

  import SVG from "svg.js";
  import { onMount } from "svelte";

  import { TimelineMax } from 'gsap';


  onMount(async() => {
    
    let intersections = await import("svg.intersections.js");
    
    intersections = intersections.default

    const draw = SVG('drawing').size(400, 400)
    
    const path1 = draw.path('M30 30 L75 200 L125 170 L225 200 Z')
    .stroke('none').fill('rgba(200,0,30,0.3)')

    const path = draw.path('M30 30 L75 200 L125 170 L225 200 Z')
    .stroke('none').fill('none')

    const offsetX = 0;
    
    const lineasForma = []
    
    for( let i=0; i<40; i++) {
      
      const step = 6;
      // const step = width / 40;
      const line  = draw.line(offsetX+(i*step), 0,offsetX+(i*step), 386).stroke('none')
      
      const intersecciones = path.intersectsLine(line);
      
      // intersecciones.forEach(p=>draw.circle(5).move(p.x-2.5,p.y-2.5).fill ('none').stroke('red'))


      const pares = []

      intersecciones.forEach((p,i)=>{
        switch(i%2){
          case 0:
              pares.push([p]);
              break;
          case 1:
            const ultimo = pares[pares.length-1][0];
            if(
              (Math.abs(p.x - ultimo.x)<1)
              &&
              (p.y < ultimo.y)
            ) {
              pares[pares.length-1].push(p);
            }
            break;
        }
      })

      pares.forEach(p=>{
        if( p.length == 2 ) {
          const x = offsetX+(i*step);
          const lineaForma = draw.line(x, p[0].y,x, p[1].y).stroke('red')
          // console.log(scaleY);
          const alturaOriginal = p[0].y-p[1].y;
          const alturasDestino = [
            alturaOriginal * Math.max(Math.random()*1.3,1/3),
            alturaOriginal * Math.max(Math.random()*1.3,1/3),
            alturaOriginal * Math.max(Math.random()*1.3,1/3),
            alturaOriginal * Math.max(Math.random()*2.5,1/3),
            alturaOriginal * Math.max(Math.random()*2.5,1/3)
          ];

          const offsetsY = alturasDestino.map(a=> (a - alturaOriginal)/2 );
          
          const animarLineas = () => {
            lineaForma.animate(200).size(100,alturasDestino[0]).animate(200).size(100,alturasDestino[1]).after(function(){
              lineaForma.animate(200).size(100,alturasDestino[2]).animate(200).size(100,alturasDestino[3]).after(function(){
                lineaForma.animate(200).size(100,alturasDestino[4]).animate(200).size(100,alturaOriginal)
              })
            })

            
            lineaForma.animate(200).y(p[1].y-offsetsY[0]).animate(200).y(p[1].y-offsetsY[1]).after(function(){
                lineaForma.animate(200).y(p[1].y-offsetsY[2]).animate(200).y(p[1].y-offsetsY[3]).after(function(){
                lineaForma.animate(200).y(p[1].y-offsetsY[4]).animate(200).y(p[1].y)
              })
            })
          }
          setInterval(()=>{
            animarLineas()
          },1600)
          animarLineas()
          
          

            
          lineasForma.push(
            lineaForma
          )

        }
      })

      

    }
    // const circle = draw.circle(100).move(0, 100)

  });
</script>

<style>

</style>

<svg id="drawing" >
  <!-- <path d="M150 0 L75 200 L225 200 Z" /> -->
</svg>
