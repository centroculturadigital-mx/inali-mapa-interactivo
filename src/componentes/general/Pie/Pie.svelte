<script>
const logos = ['logos-gobmx-cultura-inah.svg','logoCcd.svg','logoInali.svg']
</script>

<style>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 3rem;
    left: 0;
    bottom: 0;
    /* background: rgba(255, 255, 255, 0.2); */
    background: #3c5062;
    
  }
  .PieLogo {
    margin: 0 0.5rem;
    height: 2rem;
    width: auto;
  }
</style>

<footer>
{#each logos as  logo}
  <img class="PieLogo" src="./{logo}" alt="Logo {logo}">
{/each}
</footer>

