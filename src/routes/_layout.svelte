<script>
	import Animacion1 from '../componentes/animacion/Animacion1.svelte'
	// import env from '../.env.local.js'

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let nombreUsuario = '';
	let contrasenna = '';
	let ingresado = false;
	let cargando = false;


	const progress = tweened(0, {
		duration: 600,
		easing: cubicOut
	});

	// $: ingresoDev = env.modo == "dev"
	$: ingresoDev = true
	$: ingreso = (nombreUsuario=='ccd' && contrasenna == 'ccdinali' && ingresado) || ingresoDev
	
	let progreso = 0;
	let progresoFalso = 0;

	const ingresar = (e) => {
	
		cargando = true
		ingresado = true
	
		progresoFalso = setInterval(()=>{
			
			// console.log( progreso );
			if(progreso>=1.2) {
				
				cargando=false
				clearInterval(progresoFalso)

			}
			
			progreso += 0.2
			progress.set(progreso)
			

		}, 200)
	
		e.preventDefault()
	}

</script>

<style>



	.Contenedor,
	.Contenedor > div {
		height: 100%;
		width: 100%;
	}

	.Contenedor > div {	
		display: flex;
		flex-direction: column;
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


	<!-- <Animacion1 /> -->


	{#if ingreso }

		{#if cargando && ! ingresoDev }

			<div class="Loading" transition:fade>
				<p>
					Cargando
				</p>

				<progress value={$progress}></progress>
			</div>

		{:else}

			<div transition:fade>
				
				<slot></slot>
				
			</div>
		
		{/if}

	{:else}

		<div class="LogIn" transition:fade>

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

		</div>

	{/if}

</div>