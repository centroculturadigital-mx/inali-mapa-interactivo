<script>
    
    import { tap } from "@sveltejs/gestures"

    let portilla = 'leon-portilla.png';
    
</script>


<style>

    button {
        background-color: transparent;
        border: none;
        position: fixed;
        top: 4.5rem;
        right: .5rem;
        z-index: 10000;
    }

    .FotoHomenaje {
        display: flex;
    }

    img {
		width: 2.75rem;
		height: 2.75rem;
        object-fit: cover;
        border-radius: 50%;
    }

</style>

 <button class="FotoHomenaje" use:tap on:tap>
    <img src="{portilla}"  alt="homenaje">
 </button>