<script>
import Drag from '../componentes/general/DragDrop/Drag.svelte'
import Mapa from '../componentes/Mapa/Mapa.svelte'
import Pie from '../componentes/general/Pie/Pie.svelte'
import VentanaFamilia from '../componentes/contenedores/VentanaFamilia/VentanaFamilia.svelte'
</script>

<style>

</style>

<svelte:head>
	<title>INALI | Mapa interactivo</title>
</svelte:head>

<!-- Interactividad -->
<Drag />
<!-- Elementos -->
<Mapa />
<VentanaFamilia />
<Pie />
