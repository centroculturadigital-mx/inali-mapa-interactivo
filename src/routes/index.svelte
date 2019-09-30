<script>
import Drag from '../componentes/general/DragDrop/Drag.svelte'
import Mapa from '../componentes/Mapa/Mapa.svelte'
import Pie from '../componentes/general/Pie/Pie.svelte'
import FamiliaResumen from '../componentes/contenedores/Familia/FamiliaResumen.svelte'
import FamiliaDetalle from '../componentes/contenedores/Familia/FamiliaDetalle.svelte'

import { fade } from 'svelte/transition';

import familiasFake from "../datosFalsos/familiasFake"

let familiaSeleccionada
let familiaDetalle

$: familia = familiaDetalle


const seleccionar = (e) => {

	const id = e.detail.id
	
	
	if( !! id ) {
		familiaSeleccionada = familiasFake[Math.floor(Math.random()*familiasFake.length)]
	} else {
		familiaSeleccionada = null;
	}

}


const abrir = async (e) => {
	if( id ) {
		familiaDetalle = await familiasFake[e.detail.id]
	}
}

const cerrar = () => {
	familiaDetalle = null
	familiaSeleccionada = null
}


</script>

<style>

</style>

<svelte:head>
	<title>INALI | Mapa interactivo</title>
</svelte:head>

<!-- Interactividad -->
<Drag />
<!-- Elementos -->
<Mapa on:seleccionar={seleccionar}/>

{#if !! familiaDetalle || !! familiaSeleccionada }
	{#if !! familiaDetalle }
		<div transition:fade>
			<FamiliaDetalle familia={familia} on:cerrar={cerrar}/>
		</div>
	{:else}
		<div transition:fade>
			<FamiliaResumen familia={familiaSeleccionada} on:abrir={abrir}/>
		</div>
	{/if}

{/if}

<Pie />
