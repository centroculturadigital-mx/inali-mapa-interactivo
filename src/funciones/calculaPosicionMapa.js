export default (x, y) => {
    

      
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
    

    return {
        x: (x - offsetX ) / (anchoReal/1366 ),
        y: (y - offsetY ) / (altoReal/768)
    }
}