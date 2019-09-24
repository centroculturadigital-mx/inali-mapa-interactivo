<script>
import interact from 'interactjs'
// colores
import colorFamilia1 from '../../Mapa/FamiliasLinguisticas.svelte'
//Colores
const colorArea = 'purple'
const colorArrastre = 'lime'
const colorEntraArea = 'lightgray'
const colorJuntos = 'gray'
//
const itemDrag = '.dragall'
const configuraDrag = () => {
  interact(itemDrag).draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'svg',
        endOnly: true
      })
    ],
    // autoScroll: true,
    onmove: dragMoveListener,
    onend: (e) => {
      e.target.style.fill = colorArrastre
      console.log('Fin')
    }

  })
}

const dragMoveListener = (e) => {

  let target = e.target
  console.log("Moviendo: ")
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy
  target.style.webkitTransform =
  target.style.transform =
  'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
//
configuraDrag()
//
</script>

<script context="module">

	export const ConfiguraDrop = (interactObj, acceptObj) => {
    console.log("COnfigura Drop");
    //
    // interact(interactObj).dropzone({
    //   accept: acceptObj,
    //   overlap: 0.10,//10% encima del area
    //   ondropactivate: (e) => {
    //     e.target.style.fill = colorArrastre// area
    //     e.relatedTarget.style.fill = colorArrastre//dragged obj
    //   },
    //   ondragenter: (e) => {
    //     e.target.style.fill = colorEntraArea
    //     e.relatedTarget.style.fill = colorEntraArea
    //   },
    //   ondrop: (e) => {
    //     let dropzone = e.target.getBoundingClientRect()
    //     let obj = e.relatedTarget
    //     let x = 0
    //     let y = 0
    //     obj.style.webkitTransform =
    //     obj.style.transform =
    //     'translate(' + x + 'px, ' + y    + 'px)'
    //     obj.setAttribute('data-x', x)
    //     obj.setAttribute('data-y', y)
    //     //
    //     e.target.style.fill = colorJuntos
    //     e.relatedTarget.style.fill = colorJuntos
    //   },
    //   ondragleave: (e) => {
    //     e.target.style.fill = colorArrastre
    //     e.relatedTarget.style.fill = colorArrastre
    //   },
    //   ondropdeactivate: (e) => {
    //     e.target.style.fill = colorArea// area
    //   }
    // })
  }
</script>
