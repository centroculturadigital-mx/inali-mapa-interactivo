<script>
    import IconoTwitterVentana from "./Iconos/IconoTwitterVentana.svelte";
    import Tweet from "./Tweet.svelte";
</script>

<style>

        /* * {
            outline: 1px solid blue;
        } */


        .Twitter {
            max-width: 360px;
            height: 30rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            color: #333;
            box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }


        .Encabezado {
            width: 100%;
            height: 5rem;
            background: #878787;;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 1.5rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }

        .ContenedorTweets {
            padding: 0 2rem;
        }

        .Tweets {
            width: 100%;
            max-height: 22rem;
            overflow: auto;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* margin-bottom: 1rem; */
            /* align-content: space-around; */
            /* justify-content: space-around; */
        }

        .ContenedorEncabezado {
            display: flex;
            padding: 0 2rem;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        
        .IconoTwitter {
            justify-content: flex-start !important;
            flex-basis: 60%;
            color: #fff;
            margin-left: -2.5rem;
        }

        .Activismo {
            display: flex;
            align-items: center;
            flex-basis: 125%;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 1.5rem;
            color: #fff;
        }

        .IconoCerrar {
            display: flex;
            flex-direction: column;
            color: #fff;
            justify-content: center;
            margin-right: -0.5rem;
        }



</style>
    
<section class="Twitter">
    <header class="Encabezado">
    <div class="ContenedorEncabezado">
        <div class="IconoTwitter">
            <IconoTwitterVentana/>
        </div>
        <div class="Activismo">
            <span>
                Activismo lingüístico
            </span>
        </div>
        <div class="IconoCerrar">
           <i>icon</i>
        </div>
    </div>
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