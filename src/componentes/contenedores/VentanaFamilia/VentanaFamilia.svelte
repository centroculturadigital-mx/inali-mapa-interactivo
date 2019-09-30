<script>
    import Agrupacion from "./Agrupacion.svelte";
    import BotonCerrar from "../botones/BotonCerrar.svelte";
    import Flecha from "../iconos/Flecha.svelte";
    import Carrousel from "../iconos/Carrousel.svelte";
    import FamiliaDetalle from "./FamiliaDetalle.svelte";

    let elemento = { activo: false };
	const Mostrar = () => {
		elemento.activo = !elemento.activo;
    }
    
</script>

<style>

    article {
        max-width: 320px;
        /* height: 1617px; */
	}

    .VentanaFamilia {
        background: #F7F7F7;
        border-radius: 10px;
	    display: flex;
	    justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        max-height: 350px;
        overflow-y: auto;
        position: absolute;
        bottom: 35px;
        left: 0;
        z-index: 10000;
        display: none;
        opacity: 0;
        transition: 0.5s;
    }

    .Cerrar {
        position: relative;
        left: 264px;
    }

    img {
		width: 580px;
		height: 455px;
        object-fit: cover;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    
    .Titulo {
        text-align: center;
        font-weight: 200;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.2em;
        color: #454344;
        margin: 0.2em;
    }

    .Principal {
        text-align: center;
        font-weight: 600;
        font-size: 44px;
        line-height: 53px;
        text-align: center;
        color: #E6AA30;
        margin: 0.2em;
    }

    .Saber {
        width: 105px;
        height: 26px;
        position: relative;
        left: 5px;
        border: 1px solid #E6AA30;
        box-sizing: border-box;
        border-radius: 15px;
        color: #E6AA30;
    }

    /* .Cerrar {
        height:20px;
        width:20px;
        border-radius:20px / 20px;
        border: 1px solid #878787;
        box-sizing: border-box;
    } */

    .TitulosLista {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin: 1em;
    }

    .TextoFotos {
        position: relative;
        top: -102px;
        left: -220px;
        color: #fff;
    }

    .Flecha {
        width: 44px;
        height: 22px;
        position: relative;
        left: 259px;
        top: 40px;
        
    }

    .Carrousel {
        top: -97px;
        position: relative;
    }

    .Contenedor-1 {
        position: relative;
        top: -137px;
    }

    .FamiliaDetalle {
        position: absolute;
        left: 648px;
        top: 8px;
    }
.FamiliaWrapper {
    width: 100%;
}

   
/* Cambiar estos valores en global.css */
/* TO DO Agregar font Fira Sans en estilos global en proyecto mapa interactivo */
    button {
        padding: 0 0.4em;
	    margin: 0 0 1em 0;
    }

</style>
<article class="VentanaFamilia">
<div class="FamiliaWrapper">
    <figure class="Cerrar">
        <BotonCerrar/>
    </figure>
    <header class="Encabezado">
        <p class="Titulo">
            FAMILIA
        </p>
        <h1 class="Principal">
            Yuto-nahua
        </h1>
    </header>
        {#if elemento.activo}
	    <button class="Saber" on:click={Mostrar}>
	    	Saber más
	    </button>
        <div class="FamiliaDetalle">
	        <FamiliaDetalle/>
        </div>
        {/if}

        {#if !elemento.activo}
	    <button class="Saber" on:click={Mostrar}>
	    	Saber más
	    </button>
        {/if}
        
         <!-- <img src="http://fakeimg.pl/244x80?text=logo" alt="img" /> -->
	    <img class="Imagen" src={`http://unsplash.it/300/${100+Math.floor(Math.random()*500)}`} alt="img"/>
        <div class="TextoFotos">
            <p>
                Titulo Foto
            </p>
            <p>
                Descripción
            </p>
        </div>

    <div class="Carrousel">
        <Carrousel/>
    </div>

    <article class="Contenedor-1">
        <figure class="Flecha">
            <Flecha/>
        </figure>
        <header class="TitulosLista">
            <h4>
                Agrupaciones Lingüísticas
            </h4>
            <h4>
                Riesgo de desaparición
            </h4>
        </header>
            <section class="Lista">
                <ul>
                <Agrupacion/>
                <Agrupacion/>
                <Agrupacion/>
                </ul>
            </section>
    </article>

</div>
</article>









