<script>

</script>



<style>


        article {
            width: 13rem;
            height: 11rem;
            background-color: rgb(255, 255, 255);
        }

        .Contenedor-1 {
            display: flex;
            flex-flow: row nowrap;
        }

        .ContenedorTweet {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: .5rem;
        }

        .NombreActivista {
            font-weight: 700;
            font-size: .75rem;
        }

        .TwitterCuenta {
            font-weight: 200;
            font-size: .75rem;
        }

        .ContenidoTweet {
            font-size: .75rem;
        }

        .FotoPerfil {
            display: flex;
            padding-top: .5rem;
        }

        img {
		    width: 2.75rem;
		    height: 2.75rem;
            object-fit: cover;
            border-radius: 50%;
        }

</style>


<article class="Tweet">
    <div class="Contenedor-1">
        <div class="FotoPerfil">
            <img class="Imagen" src={`http://unsplash.it/300/${100+Math.floor(Math.random()*500)}`} alt="img"/>
        </div>
        <div class="ContenedorTweet">
            <header class="EncabezadoActivista">
                <p class="NombreActivista">
                    Nombre del activista
                </p>
                <p class="TwitterCuenta">
                    @cuenta
                </p>
            </header>
    
            <div class="ContenidoTweet">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum eaque optio repellendus sint quos ab voluptate 
                </p>
            </div>

        </div>

    </div>

</article>


