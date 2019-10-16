import interact from 'interactjs'
import calculaPosicionMapa from "./calculaPosicionMapa";
//
const velocidadTransision = '0.5s'
//Colores
const colorArea = 'gray'
const colorArrastre = 'lime'
const colorEntraArea = 'lightgray'

export default (zona, callback ) => {
  // // const ventanaFamilia = document.querySelector('.VentanaFamilia');
  
  const interactObj = "#" + zona.id + "-drop"
  const acceptObj = "#" + zona.id + "-drag"
  const id = zona.id
  const colorDefault = zona.fill

  interact(interactObj).dropzone({
    accept: acceptObj,
    overlap: 0.2,//10% encima del area
    ondropactivate: (e) => {
      // e.target.style.transition = velocidadTransision
      // e.target.style.fill = colorArrastre// area
      // e.target.style.opacity = 0.7
      // e.relatedTarget.style.fill = colorArrastre//dragged obj
      // e.relatedTarget.style.opacity = 0.7
    },
    ondragenter: (e) => {
      // e.target.style.fill = colorEntraArea
      // e.relatedTarget.style.fill = colorEntraArea
      e.target.style.fillOpacity = 1

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


      const dX = x - (e.target.getBBox().x - 37.47777777777779);
      const dY = y - (e.target.getBBox().y - 37.591661213362585);
      
      dragzone.style.webkitTransform =
      dragzone.style.transform =
      'translate(' + dX + 'px, ' + dY + 'px)'

      

      dragzone.setAttribute('data-x', dX)
      dragzone.setAttribute('data-y', dY)
      
      // dragzone.style.webkitTransform =
      // dragzone.style.transform =
      // 'translate(' + x + 'px, ' + y + 'px)'
      // dragzone.setAttribute('data-x', x )
      // dragzone.setAttribute('data-y', y )

      // apare ceventana datos
      // ventanaFamilia.style.display = "block"
      // ventanaFamilia.style.opacity = 1  

      let actionX = e.target.getBoundingClientRect().left + e.target.getBoundingClientRect().width / 2
      
      if(actionX<window.innerWidth/2) {
        actionX = e.target.getBoundingClientRect().left-(e.target.getBoundingClientRect().width-300)
      } else {
        actionX = e.target.getBoundingClientRect().left + (e.target.getBoundingClientRect().width+48)
      }

      let actionY = e.target.getBoundingClientRect().top + e.target.getBoundingClientRect().height / 2
      
      callback(
        e.target.id,
        actionX,
        actionY,
        id
      )

       
    },
    ondragleave: (e) => {
      // e.target.style.fill = colorArrastre
      // e.relatedTarget.style.fill = colorArrastre  
      // ventanaFamilia.style.opacity = 0
      // ventanaFamilia.style.display = "block"
      e.target.style.fillOpacity = 0
      //callback()

      
    },
    ondropdeactivate: (e) => {
      e.target.style.fill = colorArea
      e.relatedTarget.style.fill = colorDefault
      e.relatedTarget.style.strokeOpacity = 0
      console.log("drop: odda");
      
    }
  })

}
