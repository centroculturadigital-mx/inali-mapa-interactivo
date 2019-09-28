import interact from 'interactjs'
//
const velocidadTransision = '0.5s'
//Colores
const colorArea = 'gray'
const colorArrastre = 'lime'
const colorEntraArea = 'lightgray'

export default (interactObj, acceptObj, colorDefault) => {
  //
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
      

      
      let offsetX
      let offsetY
      // 0.5622254758418741
      const proporcionViewBoxY = 768/1366
      const proporcionViewBoxX = 1366/768
      
      let anchoReal = 0
      let altoReal = 0
      
      if( window.innerWidth > window.innerHeight ) {
        altoReal = window.innerHeight
        anchoReal = altoReal * proporcionViewBoxX 
        
        if(anchoReal < window.innerWidth ) {
          altoReal = window.innerHeight
          anchoReal = window.innerHeight * proporcionViewBoxX 
          
          
          offsetX = (window.innerWidth - anchoReal)/2
          offsetY = 0
        } else {
          anchoReal = window.innerWidth
          altoReal = window.innerWidth * proporcionViewBoxY
          
          offsetX = (window.innerWidth - anchoReal)/2
          offsetY = (window.innerHeight - altoReal)/2
        }

        
      } else {
        anchoReal = window.innerWidth
        altoReal = window.innerWidth * proporcionViewBoxY
        
        offsetY = (window.innerHeight - altoReal)/2
        offsetX = 0        
      }
      

      
      let xDrag = (dropzone.x - offsetX ) / (anchoReal/1366 )
      let yDrag = (dropzone.y - offsetY ) / (altoReal/768)
      // let xDrag = ((dropzone.x - offsetX - (window.innerWidth-anchoReal)/2 ) / (anchoReal/1366) )
      // let yDrag = ((dropzone.y - offsetY - (window.innerHeight-altoReal)/2 ) / (altoReal/768))
      // let xDrag = (dropzone.x * ( 1366/window.innerWidth )) 
      // let yDrag = (dropzone.y - offsetY) / proporcionViewBoxY
      // suaviza el drop + elimia transicion
      e.relatedTarget.style.transition = velocidadTransision
      setTimeout(()=>{
        e.relatedTarget.style.transition = null
      },600)
      //
      dragzone.style.webkitTransform =
      dragzone.style.transform =
      'translate(' + xDrag + 'px, ' + yDrag + 'px)'
      dragzone.setAttribute('data-x', xDrag )
      dragzone.setAttribute('data-y', yDrag )
      //
      //TODO: Al ejecutarce el snap, aparece un div con textoa un lado de la zona arrojada
      // = anclar texto a area

      //
    },
    ondragleave: (e) => {
      e.target.style.fill = colorArrastre
      e.relatedTarget.style.fill = colorArrastre
    },
    ondropdeactivate: (e) => {
      e.target.style.opacity = 0.6
      e.relatedTarget.style.opacity = 0.9
      e.relatedTarget.style.fill = colorDefault
    }
  })

}
