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
    overlap: 0.10,//10% encima del area
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
      let x = dropzone.x
      let y = dropzone.y
      //
        console.log(e.target,dragzone.getBoundingClientRect(),dropzone);
      //

      dragzone.style.webkitTransform =
      dragzone.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'
      dragzone.setAttribute('data-x', x)
      dragzone.setAttribute('data-y', y)
      //
      e.target.style.fill = colorDefault
      e.relatedTarget.style.fill = colorDefault
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
