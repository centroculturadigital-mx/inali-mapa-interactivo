<script>
  import lenguas from "../../../../datosFalsos/familiasFake.js";
  import Riesgo from "../iconos/Riesgo.svelte";

  console.log(lenguas);

  const fillRiesgoBajo = "red";
  const fillRiesgoAlto = "orange";
  const fillRiesgo = fillRiesgoAlto;
</script>

<style>
  .Agrupacion {
    width: 100%;
    height: 48px;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .AgrupacionRiesgo {
    width: 50%;
    display: flex;
  }
  .Riesgo {
    width: 20px;
    padding-left: 36px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .CantidadContenedor {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 0;
  }
  .CantidadNumeros {
    font-weight: bold;
    width: 100%;
    margin: 0;
  }
  .CantidadTexto {
    font-weight: lighter;
    font-size: 0.8rem;
    width: 100%;
    margin: 0;
  }
</style>

{#each lenguas as lengua}
  <!-- {console.log(lengua.id)} -->
  <div class="Agrupacion">
    <div class="AgrupacionNombre">
      <p>Nayeeri (Cora)</p>
    </div>

    <div class="AgrupacionRiesgo">
      <div class="Riesgo">
        <Riesgo fill={fillRiesgo} />
      </div>
      <div class="CantidadContenedor">
        <p class="CantidadNumeros">28,718</p>
        <!-- <p class="CantidadNumeros">riesgo.riesgoDesaparicion</p> -->
        <br />
        <p class="CantidadTexto">hablantes</p>
      </div>
    </div>
  </div>
{/each}
