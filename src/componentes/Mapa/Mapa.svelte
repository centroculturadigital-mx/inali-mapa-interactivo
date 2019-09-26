<script>
  import { onMount } from "svelte";
  import FamiliasLinguisticas from "./FamiliasLinguisticas.svelte";
  import MexicoPaths from "./MexicoPaths.svelte";
  //
  let height;
  let width;
  const win = window;

  onMount(() => {
    // console.log("OnMount: ")
    
  });

  if (typeof win !== "undefined") {
    height = win.innerHeight; //altura default
    width = win.innerWidth; // ancho default
    //
    const resize = () => {
      win.onresize = e => {
        width = e.target.innerWidth;
        height = e.target.innerHeight;
      };
    };
    // llamadas
    resize();
  }
</script>

<style>
  #SVGMapa {
    height: 100%;
    width: 100%;
  }
</style>

<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  sodipodi:version="0.32"
  inkscape:version="0.92.3 (2405546, 2018-03-11)"
  version="1.0"
  sodipodi:docname="mapa.mexico.mili.svg"
  inkscape:output_extension="org.inkscape.output.svg.inkscape"
  viewBox="0 0 999.73236 679.94141"
  width='999.73236px'
  height='679.94141px'
  id="SVGMapa">
  <!-- viewBox="0 0 {width} {height}"
  width={width + 'px'}
  height={height + 'px'} -->

  <MexicoPaths />

  <FamiliasLinguisticas />

</svg>
<!--  -->
