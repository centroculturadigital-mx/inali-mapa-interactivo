<script>
import interact from 'interactjs'
import calculaPosicionMapa from '../../../funciones/calculaPosicionMapa'
//
const itemDrag = '.dragall'
const Drag = () => {
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
      // console.log('Fin Drag')
    }

  })
}

const dragMoveListener = (e) => {

  const {x, y} = calculaPosicionMapa(e.clientX, e.clientY)

  e.target.style.webkitTransform =
  e.target.style.transform =
  'translate(' + x + 'px, ' + y + 'px)'

  e.target.setAttribute('data-x', x)
  e.target.setAttribute('data-y', y)

}
//
Drag()
//
</script>
