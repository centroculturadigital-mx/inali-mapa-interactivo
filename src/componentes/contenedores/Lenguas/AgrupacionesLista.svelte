<script>
  import Riesgo from "../iconos/Riesgo.svelte";

  export let agrupaciones

  const obtenerColorRiesgo = ( riesgo ) => {
    
    const fillRiesgoBajo = "green";
    const fillRiesgoMedio = "yellow";
    const fillRiesgoAlto = "orange";
    const fillRiesgoMuyAlto = "red";

    let fillRiesgo;
    switch (riesgo) {
      case 0:
        fillRiesgo = fillRiesgoBajo
        break;
      case 1:
        fillRiesgo = fillRiesgoMedio
        break;
      case 2:
        fillRiesgo = fillRiesgoAlto
        break;
      case 3:
        fillRiesgo = fillRiesgoMuyAlto
        break;
    
      default:
        break;
    }

   return fillRiesgo

}
 
</script>

<style>
  .Agrupacion {
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
    /* box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
    border: 1px solid #dbdbdb; */
    border-radius: 4px; 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .AgrupacionNombre {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .AgrupacionNombre .Titulo {
    margin: 0;
    font-size: .75rem;
    font-weight: bold;
  }
  .AgrupacionRiesgo {
    width: 50%;
    display: flex;
  }
  .Riesgo {
    width: 1.25rem;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .CantidadContenedor {
    height: 100%;
    width: auto;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
  }
  .CantidadContenedor span {
    padding: 0.125rem 0;
  }
  .CantidadNumeros {
    font-weight: bold;
    width: 100%;
    margin: 0;
    font-size: 1rem;
    line-height: 1;
  }
  .CantidadTexto {
    font-weight: lighter;
    font-size: 0.75rem;
    width: 100%;
    margin: 0;
    line-height: 1;
  }

</style>
<ul>
{#each agrupaciones as agrupacion,i}

  <li class="Agrupacion">
    <div class="AgrupacionNombre">
      <h6 class="Titulo">{agrupacion.nombre}</h6>
    </div>
    <div class="AgrupacionRiesgo">
      <div class="Riesgo" style={`color:${obtenerColorRiesgo(agrupacion.riesgo)}`}>
        <i class="fa fa-exclamation-circle"></i>
      </div>
      <div class="CantidadContenedor">
        <span class="CantidadNumeros">{agrupacion.habitantes}</span>
        <span class="CantidadTexto">hablantes</span>
      </div>
    </div>
  </li>

{/each}
</ul>
