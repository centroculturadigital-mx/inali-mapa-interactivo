<script>
    let portilla = 'leon-portilla.png';
    
</script>


<style>

    button {
        background-color: transparent;
        border: none;
        position: fixed;
        top: 4rem;
        right: 1rem;
    }

    .FotoHomenaje {
        display: flex;
        margin-top: .5rem;
        margin-left: 1.5rem;
    }

    img {
		width: 3rem;
		height: 3rem;
        object-fit: cover;
        border-radius: 50%;
    }

</style>

 <button class="FotoHomenaje" on:click>
    <img src="{portilla}"  alt="homenaje">
 </button>