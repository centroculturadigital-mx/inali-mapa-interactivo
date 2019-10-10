<script>
    import IconoTwitterVentana from "./Iconos/IconoTwitterVentana.svelte";
    import Tweet from "./Tweet.svelte";
</script>

<style>


        .Twitter {
            position: absolute;
            right: 20%;

            width: 15rem;
            height: 18rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            color: #333;
            box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            z-index: 10000;

        }


        .Encabezado {
            width: 100%;
            height: 3.25rem;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            background: #878787;
            color: #fff;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
        }


        .IconoCerrar {
            align-self: flex-start;
            padding: .5rem;
            background-color: transparent;
            border: none;
            color: #fff;
        }


        .ContenedorTweets {
            padding-top: .5rem;
        }

        .Tweets {
            width: 100%;
            max-height: 13.5rem;
            overflow: auto;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }


        
</style>
    
<section class="Twitter">
    <header class="Encabezado">
        <div class="IconoTwitter">
            <IconoTwitterVentana/>
        </div>
            <h4 class="Activismo">
                Activismo lingüístico
            </h4>
        <button class="IconoCerrar">
           <i class="fa fa-close fa-lg"></i>
        </button>
    </header>
    <div class="ContenedorTweets">
        <div class="Tweets">
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
        </div>
    </div>
</section>