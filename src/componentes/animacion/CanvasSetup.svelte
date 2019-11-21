<script>

    import { onMount } from 'svelte'

    import { TweenLite } from 'gsap';

    import Paper from 'paper';

    export let canvas    


    onMount(()=>{

        const paper = Paper.setup(canvas);
        
    })
    
</script>