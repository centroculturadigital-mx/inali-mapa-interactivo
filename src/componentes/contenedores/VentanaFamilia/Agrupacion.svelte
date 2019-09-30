<script>
    import Riesgo from "../iconos/Riesgo.svelte";

</script>

<style>
    .Agrupacion {
        position: relative;
        left: -34px;
        width: 600px;
        height: 60px;
        margin: 1em;
        padding: 0 0.9em;
        background: #FFFFFF;
        border: 1px solid #DBDBDB;
        box-sizing: border-box;
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .Riesgo {
        position: relative;
        top: 15px;
        left: 142px;
    }

    .Cantidad {
        position: relative;
        top: -9px;
        right: 21px;
        text-align: center;
        color: #454344;
    }

</style>

<article class="Agrupacion">
    <p>Nayeeri (Cora)</p>
    <div class="Riesgo">
        <Riesgo/>
    </div>
    <div class="Cantidad">
        <p>
            28, 718 <br/> hablantes
        </p>
    </div>
</article>