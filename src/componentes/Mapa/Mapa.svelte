<script>
import FamiliasLinguisticas from './FamiliasLinguisticas.svelte'
import MexicoSVG from './MexicoSVG.svelte'
let svgPadre//svg
//
let height
let width

if (typeof window !== 'undefined') {

  height = window.innerHeight//altura default
  width = window.innerWidth// ancho default
  console.log("Default Ancho: ", width)
  console.log("Default Alto: ", height)
  //


  const resize = () => {
    window.onresize = (e) => {
      width = e.target.innerWidth
      height = e.target.innerHeight
      console.log("Window Ancho: ", width)
      console.log("Window Alto: ", height)
    }
  }
  // llamadas
  resize()

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
preserveAspectRatio="xMidYMid meet"
viewBox="0 0 {height} {width}"
width={width + 'px'}
height={height + 'px'}
bind:this={svgPadre}
id="SVGMapa"
>

<MexicoSVG />
<FamiliasLinguisticas />

</svg>
<!--  -->
