import interact from 'interactjs'
import calculaPosicionMapa from "./calculaPosicionMapa";
//
const velocidadTransision = '0.5s'
//Colores
const colorArea = 'gray'
const colorArrastre = 'lime'
const colorEntraArea = 'lightgray'

export default (interactObj, acceptObj, colorDefault) => {
  const ventanaFamilia = document.querySelector('.VentanaFamilia');
  
  interact(interactObj).dropzone({
    accept: acceptObj,
    overlap: 0.2,//10% encima del area
    ondropactivate: (e) => {
      e.target.style.transition = velocidadTransision
      e.target.style.fill = colorArrastre// area
      e.target.style.opacity = 0.7
      e.relatedTarget.style.fill = colorArrastre//dragged obj
      e.relatedTarget.style.opacity = 0.7
    },
    ondragenter: (e) => {
      e.target.style.fill = colorEntraArea
      e.relatedTarget.style.fill = colorEntraArea
    },
    ondrop: (e) => {
      let dropzone = e.target.getBoundingClientRect()//drop
      let dragzone = e.relatedTarget//drag

      let {x, y} = calculaPosicionMapa(dropzone.x, dropzone.y)

      e.relatedTarget.style.transition = velocidadTransision
      setTimeout(()=>{
        e.relatedTarget.style.transition = null
      },600)
      //
      dragzone.style.webkitTransform =
      dragzone.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'
      dragzone.setAttribute('data-x', x )
      dragzone.setAttribute('data-y', y )

      // apare ceventana datos
      ventanaFamilia.style.display = "block"
      ventanaFamilia.style.opacity = 1  
      console.log(e.target.id);
       
    },
    ondragleave: (e) => {
      e.target.style.fill = colorArrastre
      e.relatedTarget.style.fill = colorArrastre  
      ventanaFamilia.style.opacity = 0
      ventanaFamilia.style.display = "block"
      
    },
    ondropdeactivate: (e) => {
      e.target.style.opacity = 0.6
      e.target.style.fill = colorArea
      e.relatedTarget.style.opacity = 0.9
      e.relatedTarget.style.fill = colorDefault
      
    }
  })

}
