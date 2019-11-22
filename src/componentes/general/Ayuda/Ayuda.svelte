<script>
  import {tap} from "@sveltejs/gestures"

  let heightAyuda = 66;
  let widthAyuda = 66;
  let color = 'white'
  //
  const linkUrl = '#'
  //
</script>
<style>
  button {
    /* padding: 0.5rem; */
    margin: 0;
    position: fixed;
    /* top: 0; */
    bottom: 3rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
  }
  #AyudaPathGroup {
    transition: all 2s;
    opacity: 0;
    transform: translate(0%, 8px) scale(1.09);
    transform-origin: center;
    animation: ayudaEntra 2s 1;
    animation-delay:1s;
    animation-fill-mode: both;
    cursor: pointer;
  }
  .AyudaSimbolo {
    transform-origin: center;
    animation: ayudaMovimiento 2s infinite;
    animation-delay:3s;
  }

  @keyframes ayudaEntra {
    0% {
      transform: translate(50%, 8px);
      opacity: 0;
    }
    100% {
      transform: translate(20px, 8px);
      opacity: 1;
    }
  }
  @-webkit-keyframes ayudaEntra {
    0% {
      transform: translate(50%, 0px);
      opacity: 0;
    }
    100% {
      transform: translate(20px, 0px);
      opacity: 1;
    }
  }
  @keyframes ayudaMovimiento {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.025);
    }
    100% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes ayudaMovimiento {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.025);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
<!--  -->
<button class="InformacionBoton" use:tap on:tap>
  <!-- <figure> -->

  <svg width={widthAyuda} height={heightAyuda} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="AyudaPathGroup">
      <circle class="AyudaSimbolo" cx="40" cy="40" r="40" fill={color}/>
      <path class="AyudaSimbolo" d="M44.134 35.0571V58.4772H35.4501V35.0571H44.134ZM39.792 22.119C41.1955 22.119 42.3504 22.5722 43.2568 23.4786C44.1925 24.3557 44.6603 25.4522 44.6603 26.7679C44.6603 28.0837 44.1925 29.1947 43.2568 30.1011C42.3504 30.9783 41.1955 31.4169 39.792 31.4169C38.3886 31.4169 37.2191 30.9783 36.2834 30.1011C35.377 29.1947 34.9238 28.0837 34.9238 26.7679C34.9238 25.4522 35.377 24.3557 36.2834 23.4786C37.2191 22.5722 38.3886 22.119 39.792 22.119Z"
      fill="#465D72"/>
      <rect class="AyudaSimbolo" x="3.24902" y="51.1675" width="25.1777" height="25.1777"
      fill={color}/>
    </g>
  </svg>

  <!-- </figure> -->

</button>