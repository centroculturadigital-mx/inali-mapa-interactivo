<script>
import interact from 'interactjs'
import calculaPosicionMapa from '../../../funciones/calculaPosicionMapa'

export let drag
export let dragEnd

//
const selector = '.dragall'
const Drag = () => {

  interact(selector).draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'svg',
        endOnly: true
      }),
      // interact.modifiers.restrict({
      //   restriction: 'self'            // keep the drag coords within the element
      // })
    ],
    
    
    // autoScroll: true,
    onmove: dragMoveListener,
    onend: (e) => {
      
      // console.log(dragEnd);
      

      // if(typeof(dragEnd)=="function") {
        
        dragEnd(e.target.id)

      // }

      // e.preventDefault()
      
    },

  })
  .on('down', (e)=>mostrarDropZone(e) )
  .on('up', (e)=>ocultarDropZone(e) )
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


  if(typeof(drag)=="function") {

    drag(e.target.getAttribute('id').split("-drag")[0],{x:e.clientX,y:e.clientY})

  }

  e.preventDefault()

}
//
Drag()
//


const mostrarDropZone = (e) => {

  let dropSelector = e.target.getAttribute("id").replace("drag","drop")

  let drop = document.getElementById(dropSelector)

  drop.style.strokeOpacity = 1;
  
  
}

const ocultarDropZone = (e) => {

  let dropSelector = e.target.getAttribute("id").replace("drag","drop")

  let drop = document.getElementById(dropSelector)

  drop.style.strokeOpacity = 0;
  
  
}

</script>
