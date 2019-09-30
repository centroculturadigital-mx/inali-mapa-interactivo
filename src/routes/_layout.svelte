<script>
	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte'
	import Animacion1 from '../componentes/animacion/Animacion1.svelte'

	let nombreUsuario = '';
	let contrasenna = '';
	let ingresado = false;
	
	$: ingreso = nombreUsuario=='ccd' && contrasenna == 'ccdinali' && ingresado
	
	let cargando

	const ingresar = () => {
	
		cargando = true
		ingresado = true
	
		setTimeout(()=>{

			cargando=false

		}, 3000)
	
	}

</script>

<style>
	main {
		background-color: transparent;
		box-sizing: border-box;
		position: fixed;
		padding: 1rem;
		margin: 0 auto;
		height: 100%;
		width: 100%;
	}

	.Contenedor {
		
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}

	form {

		max-width: 320px;
		padding: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--color-fondo);
		
	}
</style>
<!--  -->

<div class="Contenedor">


	<Animacion1 />


	{#if ingreso }

		{#if cargando }

			<h1>
				Cargando
			</h1>


		{:else}

			<Cabecera />

			<main>
				<slot></slot>
			</main>

			<Pie />
		
		{/if}

	{:else}

		<section class="LogIn">

			<h1>
				Ingresa
			</h1>


			<form on:submit={ingresar}>

				<label>
					<h5>
						Nombre de usuario
					</h5>
					<input type="text" name="nombreUsuario" placeholder="Nombre de usuario" bind:value={nombreUsuario}>
				</label>
				<label>
					<h5>
						Contraseña
					</h5>
					<input type="contrasenna" name="contrasenna" placeholder="***" bind:value={contrasenna}>`
				</label>

				<input type="submit" value="Ingresar">

			</form>

		</section>

	{/if}

</div>