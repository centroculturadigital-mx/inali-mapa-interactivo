<script>
	import Cabecera from '../componentes/general/Cabecera/Cabecera.svelte';
	import Pie from '../componentes/general/Pie/Pie.svelte'
	import Animacion1 from '../componentes/animacion/Animacion1.svelte'
	import env from '../.env.local.js'

	let nombreUsuario = '';
	let contrasenna = '';
	let ingresado = false;
	let cargando = false;

	$: ingresoDev = env.modo == "dev"
	$: ingreso = (nombreUsuario=='ccd' && contrasenna == 'ccdinali' && ingresado) || ingresoDev
	

	const ingresar = () => {
	
		cargando = true
		ingresado = true
	
		setTimeout(()=>{

			cargando=false

		}, 1500)
	
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
		color: var(--color-texto);
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
		color: var(--color-texto);

	}

	form, form * {
		text-align: center;
	}
	
</style>
<!--  -->

<div class="Contenedor">


	<Animacion1 />


	{#if ingreso }

		{#if cargando && ! ingresoDev }

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
					<input type="text" name="nombreUsuario" bind:value={nombreUsuario}>
				</label>
				<label>
					<h5>
						Contraseña
					</h5>
					<input type="password" name="contrasenna" bind:value={contrasenna}>`
				</label>

				<input type="submit" value="Ingresar">

			</form>

		</section>

	{/if}

</div>