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
      }),
      interact.modifiers.restrict({
        restriction: 'self'            // keep the drag coords within the element
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

  const dX = x - (e.target.getBBox().x - 37.47777777777779) - e.target.getBBox().width/2;
  const dY = y - (e.target.getBBox().y - 37.591661213362585) - e.target.getBBox().height/2;
  
  e.target.style.webkitTransform =
  e.target.style.transform =
  'translate(' + dX + 'px, ' + dY + 'px)'

  

  e.target.setAttribute('data-x', dX)
  e.target.setAttribute('data-y', dY)

  e.preventDefault()

}
//
Drag()
//
</script>
