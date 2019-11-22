<script>
  import tweetsData from "../../../datos/tweetsData.js";

  let tweet = tweetsData[Math.floor(Math.random() * tweetsData.length)];
</script>

<style>
  article {
    width: 95%;
    height: 14rem;
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
    padding: 0.5rem;
    padding-right: 0;
  }

  .NombreActivista {
    font-weight: 700;
    font-size: 0.75rem;
    margin: 0;
    margin-bottom: 0.25rem;
  }

  .TwitterCuenta {
    font-weight: 200;
    font-size: 0.75rem;
    margin: 0;
  }

  .ContenidoTweet {
    font-size: 0.75rem;
    height: 11rem;
    /* overflow-y: scroll; */
    display: flex;
    align-items: center;
  }

  .FotoPerfil {
    display: flex;
    padding-top: 0.5rem;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
  }
  .EncabezadoActivista {
    height: 2.5rem;
    display:flex;
    align-items: center;
  }
</style>

<article class="Tweet">
  <div class="Contenedor-1">
    <div class="FotoPerfil">
      <img class="Imagen" src={tweet.imagen_usuario_url} alt="Twitter " />
    </div>
    <div class="ContenedorTweet">
      <header class="EncabezadoActivista">
      <div>
        <p class="NombreActivista">{tweet.nombre_usuario}</p>
        <p class="TwitterCuenta">@{tweet.usuario}</p>
      </div>
      </header>

      <div class="ContenidoTweet">
        <p>{tweet.texto}</p>
      </div>

    </div>

  </div>

</article>
