<script>
  import interact from 'interactjs'

  import SVG from "svg.js";
  import { onMount } from "svelte";

  import { TimelineMax } from 'gsap';
  import textoFake from '../../datos/textoFake';


  import LetraLineas from "./LetraLineas.svelte";


  export let canvas;

  export let x = 0;
  export let path;
  
  
  $: letraX = parseInt(x);

  let lineasPares = [];

  onMount(async() => {
    
    let intersections = await import("svg.intersections.js");
    // let text2svg = await import("text-to-svg");
    
    intersections = intersections.default
    // text2svg = text2svg.default

    const draw = SVG('svgfraseviva').size(window.innerWidth,window.innerHeight)
    // 
    
    const minH = 1;

    // console.log(text2svg(letraPath.node));
    

    const offsetX = 0;
    
    const lineasForma = []

    // console.log(path);
    let index = 0;

    const step = 6;


    const letraPath = draw.path(path)
    .stroke({
      width: 0,
      color: 'none'
    }).fill('none').move(0,100)
    // .stroke('rgba(100,140,230)').fill('rgba(100,140,230,0.1)').move(letraX,200)
  
    const animaciones = []

    for( let i=0; i<30; i++) {
      
      // const step = width / 40;
      const lineaX = 1+(i*step)
      const line  = draw.line(lineaX, 0,lineaX, window.innerHeight).stroke('none')
      
      const intersecciones = letraPath.intersectsLine(line);
      
      // intersecciones.forEach(p=>draw.circle(5).move(p.x-2.5,p.y-2.5).fill ('none').stroke('red'))


      const paresLinea = []

      intersecciones.forEach((p,i)=>{
        
        // draw.circle(4).move(p.x,p.y).fill('none').stroke('#8ac')

        switch(i%2){
          case 0:
              paresLinea.push([p]);
              break;
          case 1:
            const ultimo = paresLinea[paresLinea.length-1][0];
            if(
              paresLinea[paresLinea.length-1].length < 2
              &&
              (Math.abs(p.x - ultimo.x)<1)
              &&
              (Math.abs(p.y - ultimo.y)>minH)
            ) {
              
              paresLinea[paresLinea.length-1].push(p);
              
              let par = [...paresLinea[paresLinea.length-1]]
              par = par.sort((a,b)=>(a.y-b.y))
              paresLinea[paresLinea.length-1] = par

            }
            break;
        }
      })

      
     /*  
      paresLinea.forEach(p=>{
        if( p.length == 2 ) {
          
          draw.circle(4).move(p[0].x,p[0].y).fill('none').stroke('#fff')
          draw.circle(4).move(p[1].x,p[1].y).fill('none').stroke('#000')

          const lineaX = (i*step);
          const lineaForma = draw.line(lineaX, p[0].y,lineaX, p[1].y).stroke({
            width: 1,
            color: '#fa0'
          })
          // console.log(scaleY);
          // let alturaOriginal = (p[0].y>p[1].y) ? p[0].y-p[1].y : p[1].y-p[0].y;

          // const alturasDestino = [
          //   alturaOriginal * (((Math.random()*1.3)/2)+0.5),
          //   alturaOriginal * (((Math.random()*1.3)/2)+0.5),
          //   alturaOriginal * (((Math.random()*1.3)/2)+0.5),
          //   alturaOriginal * (((Math.random()*1.3)/2)+0.5),
          // ];

          // const offsetsY = alturasDestino.map(a=> (a - alturaOriginal)/2 );
          

          

          lineasForma.push(
            lineaForma
          )

        } else {
          p.forEach(pp=>draw.circle(4).move(pp.x,pp.y).fill('none').stroke('#f00'))
        }
      })
      */
      
      
      lineasPares.push(paresLinea)

    }

    lineasPares = lineasPares;
    
    draw.path(path)
    .stroke({
      width: 0.5,
      color: 'rgba(130,180,250,0.7)'
    }).fill('none').move(x,100)

  });
  
</script>

<style>

</style>

{#if !! canvas}
  <LetraLineas x={x} canvas={canvas} pares={lineasPares}/>
{/if}