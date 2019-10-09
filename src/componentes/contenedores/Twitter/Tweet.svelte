<script>

</script>



<style>

       

        article {
            width: 215px;
            height: 11rem;
            background-color: rgb(255, 255, 255);
        }

        .Contenedor-1 {
            display: flex;
            flex-flow: row nowrap;
            /* padding: 0 0.5rem; */
        }

        .ContenedorTweet {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0.5rem;
    
        }

        .NombreActivista {
            font-weight: 700;
            font-size: .5rem;
        }

        .TwitterCuenta {
            font-weight: 200;
            font-size: .5rem;
        }

        .ContenidoTweet {
            font-size: .5rem;
        }

        .FotoPerfil {
            display: flex;
            margin-top: 1rem;
        }

        img {
		    width: 40px;
		    height: 40px;
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
                <span class="TwitterCuenta">
                    @cuenta
                </span>
            </header>
    
            <div class="ContenidoTweet">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum eaque optio repellendus sint quos ab voluptate iste labore? 
                </p>
            </div>

        </div>

    </div>

</article>


