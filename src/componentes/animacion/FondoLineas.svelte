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

    const draw = SVG('fondoLineas')
    // 
    

    // console.log(text2svg(path.node));
    

    const offsetX = 0;
    
    // console.log(path);
    let index = 0;
    
    const step = 0.2;
    const numLineas = 500;

    for( let i=0; i<numLineas; i++) {
    
        const line  = draw.line((i*step), 0,(i*step), 400).stroke({
            width: 0.03,
            color: 'rgba(100,140,230,0.2)'
        })

    }

  });
</script>

<style>

</style>
