<script>
import { onMount } from "svelte";
import FamiliasLinguisticas from "./FamiliasLinguisticas.svelte";
// import MexicoPaths from "./MexicoPaths.svelte";
import MexicoPaths1366x768 from "./MexicoPaths1366x768.svelte";
//
// let width = 1000
// let height = 680

const win = window;
// if (typeof win !== "undefined") {
  // $: width = 1366
  // $: height = 768
  $: height = win.innerHeight; //altura default
  $: width = win.innerWidth; // ancho default
  //
  // const resize = () => {
  //   win.onresize = e => {
  //     width = e.target.innerWidth;
  //     height = e.target.innerHeight;
  //   };
  // };
  // llamadas
  // resize();
// }
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
viewBox="0 0 1366 768"
width={width+'px'}
height={height+'px'}
id="SVGMapa">
<!-- viewBox="0 0 {width} {height}" -->


<!-- <MexicoPaths /> -->
<MexicoPaths1366x768 />
<FamiliasLinguisticas />

</svg>
<!--  -->
