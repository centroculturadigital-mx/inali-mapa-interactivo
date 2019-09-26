<script>
import interact from 'interactjs'
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

  let target = e.target//objeto arrastrado
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy
// 
console.log(target.style.transform);

// 

target.style.webkitTransform =
  target.style.transform =
  'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
//
Drag()
//
</script>
