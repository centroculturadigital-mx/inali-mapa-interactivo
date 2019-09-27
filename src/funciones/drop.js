import interact from 'interactjs'
//
//Colores
const colorArea = 'gray'
const colorArrastre = 'lime'
const colorEntraArea = 'lightgray'

export default (interactObj, acceptObj, colorDefault) => {
  //
  interact(interactObj).dropzone({
    accept: acceptObj,
    overlap: 0.50,//10% encima del area
    ondropactivate: (e) => {
      e.target.style.fill = colorArrastre// area
      e.target.style.opacity = 1// area
      e.relatedTarget.style.fill = colorArrastre//dragged obj
    },
    ondragenter: (e) => {
      e.target.style.fill = colorEntraArea
      e.relatedTarget.style.fill = colorEntraArea
    },
    ondrop: (e) => {
      let dropzone = e.target.getBoundingClientRect()//drop
      let dragzone = e.relatedTarget//drag
      let xDrag = dropzone.x
      let yDrag = dropzone.y
      //DEBUG: snap
      // console.log("Area: ",dropzone,xDrag,yDrag);
      // console.log("Drag: ",e.relatedTarget.getBoundingClientRect(),e.relatedTarget.getBoundingClientRect().x,e.relatedTarget.getBoundingClientRect().y);
      //
      dragzone.style.webkitTransform =
      dragzone.style.transform =
      'translate(' + xDrag + 'px, ' + yDrag + 'px)'
      dragzone.setAttribute('data-x', xDrag)
      dragzone.setAttribute('data-y', yDrag)
      //
      
    },
    ondragleave: (e) => {
      e.target.style.fill = colorArrastre
      e.relatedTarget.style.fill = colorArrastre
    },
    ondropdeactivate: (e) => {
      e.target.style.opacity = 0
      e.relatedTarget.style.fill = colorDefault
    }
  })

}
