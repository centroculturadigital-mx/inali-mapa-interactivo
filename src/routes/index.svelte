<script>
import Drag from '../componentes/general/DragDrop/Drag.svelte'
import Mapa from '../componentes/Mapa/Mapa.svelte'
import Pie from '../componentes/general/Pie/Pie.svelte'
import Animacion1 from '../componentes/animacion/Animacion1.svelte'
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
<Animacion1 />
<Pie />
