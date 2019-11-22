<script>

    import { onMount } from 'svelte'


    import { TweenLite, TimelineMax } from 'gsap';

    import Paper from 'paper';

    export let lineas = [];
    
    let step = 6;

    onMount(()=>{

        console.log("lineas",lineas);
        // crearLineas(puntosFake[indice])    

        // console.log(puntosFake[indice]);
        

        
    })



</script>

<p>
    { lineas.length }
</p>