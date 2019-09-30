<script>
import Drag from '../componentes/general/DragDrop/Drag.svelte'
import Mapa from '../componentes/Mapa/Mapa.svelte'
import FamiliaResumen from '../componentes/contenedores/Familia/FamiliaResumen.svelte'
import FamiliaDetalle from '../componentes/contenedores/Familia/FamiliaDetalle.svelte'

import { fade } from 'svelte/transition';

import familiasFake from "../datosFalsos/familiasFake"

let familiaResumenMostrar
let familiaDetalleMostrar

$: familia = familiaDetalleMostrar


const seleccionar = (e) => {

	const id = e.detail.id
	
	
	if( !! id ) {
		familiaResumenMostrar = familiasFake[Math.floor(Math.random()*familiasFake.length)]
	} else {
		familiaResumenMostrar = null;
	}

}


const abrir = async (e) => {
	if( id ) {
		familiaDetalleMostrar = await familiasFake[e.detail.id]
	}
}

const cerrar = () => {
	familiaDetalleMostrar = null
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

	{#if !! familiaDetalleMostrar }
		<div transition:fade>
			<FamiliaDetalle familia={familia} on:cerrar={cerrar}/>
		</div>
	{/if}
	{#if !! familiaResumenMostrar }
		<div transition:fade>
			<FamiliaResumen familia={familiaResumenMostrar} on:abrir={abrir}/>
		</div>
	{/if}


