<script>
const logos = ['logos-gobmx-cultura-inah.svg','logo.ccd.svg','logo-inali-blanco.svg']
</script>

<style>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 35px;
    left: 0;
    bottom: 0;
    /* background: rgba(255, 255, 255, 0.2); */
    background: #465D72;
    
  }
  .PieLogo {
    margin: 0 1rem;
    height: 25px;
    width: auto;
  }
</style>

<footer>
{#each logos as  logo}
  <img class="PieLogo" src="./{logo}" alt="Logo {logo}">
{/each}
</footer>

