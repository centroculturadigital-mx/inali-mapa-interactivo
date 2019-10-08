<script>
  import { onMount } from "svelte";

  const posTwitter= [
    // ["0", "285"],
    ["200", "550"],
    ["1000", "300"],
    // ["1286", "554"]
  ]; //4 twitter
  let twitter_id = "twitter_";
  let twitter_class = "twitter";
  let twitter_info = "twitter-info";
  let toggleTwitter

  onMount(() => {

    function distribucionTwitter() {
      let twitters = document.querySelectorAll(".twitter");
      let twitterTexto = document.querySelectorAll(".twitter-info");
      let twitterTextoX = twitters[0].getBoundingClientRect().width * 2;
      let twitterTextoIzquierda;

      twitters.forEach((item, index) => {

        // al ultimo objeto posiciona a la derecha
        if (index != twitters.length-1) {
          twitterTextoIzquierda = posTwitter[index][0] * 2 + twitterTextoX;
        } else {
          twitterTextoIzquierda = posTwitter[index][0] * 1.79 - twitterTextoX;          
        }

        // translate multiplicado por 2 por que el svg tiene scale(0.5)
        item.style.webkitTransform = item.style.transform = `translate(${posTwitter[index][0] * 2}px, ${posTwitter[index][1] * 2}px)`; 
        twitterTexto[index].style.webkitTransform = twitterTexto[index].style.transform = `translate(${twitterTextoIzquierda}px, ${posTwitter[index][1] * 2}px)`;
      });
    }
    toggleTwitter = () => {
        console.log("toogleTwitter");
        
    }
    // checa si existe window
    if (typeof window != "undefined") {
      distribucionTwitter();
    }
  });

  //
</script>

<style>
  .twitter {
    transform-origin: center;
    transition: 1s;
  }
  .GrupoTwitter {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    cursor: pointer;
  }
  .GrupoTwitter:hover {
    animation: flota 1s 1 forwards;
  }

  @keyframes flota {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(0.505);
    }
  }
</style>

<!-- la cantidad de twitters depende del tamano del array de posiciones -->
{#each posTwitter as twitter, i}
  <g class="GrupoTwitter">
    <!-- "<foreignobject>" necesita que los valores de altura y ancho sean > 0 -->
    <foreignObject
      class={twitter_info}
      x=0
      y=0
      requiredExtensions="http://www.w3.org/1999/xhtml">
    </foreignObject>
 
  <path
    id={twitter_id + i}
    class={twitter_class}
    d="M68.75 6.47059C67.6716 7.0098 66.5931 7.54902 65.2451 7.81863C66.5931
    6.20098 67.6716 4.58333 68.2108 2.69608L69.0196 0L66.8627 1.34804C64.4363
    2.69608 62.0098 3.77451 59.3137 4.31372C56.6176 1.61765 53.1127 0.269608
    49.3382 0.269608C41.5196 0.269608 35.049 6.74019 35.049 14.5588C35.049
    15.098 35.049 15.9069 35.049 16.4461C25.0735 15.6373 15.9069 10.7843 9.43627
    2.96569L8.62745 1.88725L7.81863 3.23529C1.61765 15.6373 4.31372 25.3431
    7.81863 31.2745C11.5931 37.4755 17.5245 41.5196 21.5686 43.1372C17.5245
    45.8333 12.6716 47.1814 7.54902 47.1814C6.47059 47.1814 5.39216 47.1814
    4.31372 46.9118L0 46.3725L3.77451 48.799C9.97549 52.8431 17.2549 55 24.8039
    55C49.3382 55 63.897 35.3186 63.6274 16.1765C63.6274 15.6373 63.6274 15.3676
    63.6274 15.098C66.3235 13.2108 68.2108 11.0539 70.098 8.35784L71.9853
    5.12255L68.75 6.47059ZM52.0343 11.5931C50.9559 11.5931 50.4167 10.7843
    50.4167 9.97549C50.4167 9.16667 51.2255 8.35784 52.0343 8.35784C53.1127
    8.35784 53.652 9.16667 53.652 9.97549C53.9216 11.0539 53.1127 11.5931
    52.0343 11.5931Z"
    fill="#1DA1F2"
    on:click={toggleTwitter} />
  </g>
{/each}
