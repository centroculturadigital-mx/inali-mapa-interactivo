import interact from 'interactjs'
//Colores
const colorArea = 'purple'
const colorArrastre = 'lime'
const colorEntraArea = 'lightgray'
const colorJuntos = 'gray'
// const interact = require('interact')
export default (interactObj, acceptObj) => {
  // DEBUG:
  console.log("DropDebug",interactObj,acceptObj)
  const interactRef = interact(interactObj).dropzone({
    accept: acceptObj,
    overlap: 0.10,//10% encima del area
    ondropactivate: (e) => {
      e.target.style.fill = colorArrastre// area
      e.relatedTarget.style.fill = colorArrastre//dragged obj
    },
    ondragenter: (e) => {
      e.target.style.fill = colorEntraArea
      e.relatedTarget.style.fill = colorEntraArea
    },
    ondrop: (e) => {
      let dropzone = e.target.getBoundingClientRect()
      let obj = e.relatedTarget
      let x = 0
      let y = 0
      obj.style.webkitTransform =
      obj.style.transform =
      'translate(' + x + 'px, ' + y    + 'px)'
      obj.setAttribute('data-x', x)
      obj.setAttribute('data-y', y)
      //
      e.target.style.fill = colorJuntos
      e.relatedTarget.style.fill = colorJuntos
    },
    ondragleave: (e) => {
      e.target.style.fill = colorArrastre
      e.relatedTarget.style.fill = colorArrastre
    },
    ondropdeactivate: (e) => {
      e.target.style.fill = colorArea// area
    }
  })

}
