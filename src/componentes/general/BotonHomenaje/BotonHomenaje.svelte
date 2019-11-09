<script>
  import { tap } from "@sveltejs/gestures";

  let portilla = "leon-portilla.png";
</script>

<style>
  button {
    background-color: transparent;
    border: none;
    position: fixed;
    bottom: 7rem;
    right: 1rem;
    z-index: 10000;
    cursor: pointer;
  }

  .HomenajeBoton {
    display: flex;
    transform-origin: center right;
    animation: homenajeMovimiento 2s infinite;
    animation-delay: 3s;
  }

  img {
    width: 3.25rem;
    height: 3.25rem;
    object-fit: cover;
    border-radius: 50%;
    transition: all 2s;
    opacity: 0;
    transform-origin: center;
    animation: homenajeEntra 2s 1;
    animation-delay: 1s;
    animation-fill-mode: both;
  }

  @keyframes homenajeEntra {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes homenajeEntra {
    0% {
      transform: translate(-50%, 8px);
      opacity: 0;
    }
    100% {
      transform: translate(45%, 8px);
      opacity: 1;
    }
  }
  @keyframes homenajeMovimiento {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes homenajeMovimiento {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1.01);
    }
  }
</style>

<button class="HomenajeBoton" use:tap on:tap>
  <img src={portilla} alt="homenaje" />
</button>
