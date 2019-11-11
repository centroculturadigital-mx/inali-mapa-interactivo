<script>
  import tweetsData from "../../../datos/tweetsData.js";

  // let nombre;
  // let fotoUsuario;
  // let usuario;
  // let contenido;
  // let menciones;
  // let hashtags;

  let tweet = tweetsData[Math.floor(Math.random() * tweetsData.length)];
  // console.log(tweet.status.toUpperCase());
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
    padding: 0.5rem;
  }

  .NombreActivista {
    font-weight: 700;
    font-size: 0.75rem;
  }

  .TwitterCuenta {
    font-weight: 200;
    font-size: 0.75rem;
  }

  .ContenidoTweet {
    font-size: 0.75rem;
  }

  .FotoPerfil {
    display: flex;
    padding-top: 0.5rem;
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
      <img
        class="Imagen"
        src={tweet.imagen_usuario_url}
        alt="Twitter " />
    </div>
    <div class="ContenedorTweet">
      <header class="EncabezadoActivista">
        <p class="NombreActivista">{tweet.nombre_usuario}</p>
        <p class="TwitterCuenta">@{tweet.usuario}</p>
      </header>

      <div class="ContenidoTweet">
        <p>{tweet.texto}</p>
      </div>

    </div>

  </div>

</article>
