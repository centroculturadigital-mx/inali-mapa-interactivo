<script>
  import interact from 'interactjs'

  import SVG from "svg.js";
  import { onMount } from "svelte";

  import { TimelineMax } from 'gsap';
  import textoFake from '../../datos/textoFake';


  onMount(async() => {
    
    let intersections = await import("svg.intersections.js");
    // let text2svg = await import("text-to-svg");
    
    intersections = intersections.default
    // text2svg = text2svg.default

    const draw = SVG('svgfraseviva').size(800, 800)
    // 
    

    // console.log(text2svg(path.node));
    

    const offsetX = 0;
    
    const lineasForma = []

    // console.log(path);
    let index = 0;

    let letraX = (index*55)
    const path = draw.path("M 0 296 L 0 0 L 59.2 0 L 59.2 168 L 62 168 L 89.6 135.6 L 132.8 89.6 L 200.8 89.6 L 120.8 171.2 L 209.2 296 L 138.8 296 L 78.8 204.8 L 59.2 224.4 L 59.2 296 L 0 296 Z")
    .stroke('none').fill('rgba(100,140,230,0.1)').move(letraX,200)
    // .stroke('rgba(100,140,230)').fill('rgba(100,140,230,0.1)').move(letraX,200)
  
    for( let i=0; i<50; i++) {
      
      const step = 6;
      // const step = width / 40;
      const line  = draw.line(letraX+offsetX+(i*step), 0,letraX+offsetX+(i*step), 586).stroke('none')
      
      const intersecciones = path.intersectsLine(line);
      
      // intersecciones.forEach(p=>draw.circle(5).move(p.x-2.5,p.y-2.5).fill ('none').stroke('red'))


      const pares = []

      intersecciones.forEach((p,i)=>{
        
        draw.circle(4).move(p.x,p.y).fill('none').stroke('#8ac')

        switch(i%2){
          case 0:
              pares.push([p]);
              break;
          case 1:
            const ultimo = pares[pares.length-1][0];
            if(
              (Math.abs(p.x - ultimo.x)<1)
              &&
              (Math.abs(p.y - ultimo.y)>3)
              &&
              (p.y > ultimo.y)
            ) {
              pares[pares.length-1].push(p);
            }
            break;
        }
      })

      console.log("pares",pares);
      

      pares.forEach(p=>{
        if( p.length == 2 ) {
          const x = 1 + letraX + offsetX + (i*step);
          const lineaForma = draw.line(x, p[0].y,x, p[1].y).stroke({
              width: 1,
              color: 'rgba(100,240,230,0.6)'
          })
          // console.log(scaleY);
          const alturaOriginal = p[0].y-p[1].y;
          const alturasDestino = [
            alturaOriginal * Math.max(Math.random()*1.3,1/3),
            alturaOriginal * Math.max(Math.random()*1.3,1/3),
            alturaOriginal * Math.max(Math.random()*1.3,1/3),
          ];

          const offsetsY = alturasDestino.map(a=> -(a - alturaOriginal)/2 );
          
          const animarLineas = () => {
            lineaForma.animate(200).size(100,alturasDestino[0]).animate(200).size(100,alturasDestino[1]).after(function(){
              lineaForma.animate(200).size(100,alturasDestino[2])
            })

            
            lineaForma.animate(200).y(p[0].y-offsetsY[0]).animate(200).y(p[1].y-offsetsY[1]).after(function(){
              lineaForma.animate(200).y(p[1].y-offsetsY[2])
            })
          }
          setInterval(()=>{
            animarLineas()
          },2000)
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

<svg id="svgfraseviva" >
  <!-- <path d="M150 0 L75 200 L225 200 Z" /> -->
</svg>
