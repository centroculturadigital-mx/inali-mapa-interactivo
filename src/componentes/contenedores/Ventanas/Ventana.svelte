<script>

    export let left=0
    export let top=0

</script>


<style>
    .Ventana, .Ventana * {
        pointer-events:auto;
    }
    
    .Ventana {

        position: absolute;

        width: 15rem;
        height: 15rem;

        display: flex;
        align-items: center;
        justify-content: center;
        /* font-size: 2rem;
        border:1rem solid #000; */
    }
</style>



<div class="Ventana" style="left: {left}px; top: {top}px">
    <slot/>
</div>
