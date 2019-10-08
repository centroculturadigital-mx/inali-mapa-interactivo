<script>
    import IconoInformacion from "./Iconos/IconoInformacion.svelte";
    import TituloMapa from "./Iconos/TituloMapa.svelte";
</script>

<style>

        /* * {
            outline: 1px solid blue;
        } */

        .Informacion {
            max-width: 360px;
            height: 26rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            color: #333;
            box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
        }

        .Encabezado {
            width: 100%;
            height: 5rem;
            background: #516980;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 0px 40px;
        }

        .Acerca {
            padding: 0 2rem;
            margin-top: 1rem;

        }

        .Texto {
            width: 100%;
            max-height: 16rem;
            overflow: auto;
            color: #5E5E5E;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 1.5rem;
        }

        .Texto * {
            padding-right: 1rem;
        }

        .Subtitulo {
            font-style: normal;
            font-weight: normal;
            font-size: 1.2rem;
            color: #878787;
        }

        .TituloEncabezado {
            display: flex;
            
            margin-top: -1rem;
        }

        .TituloMapa {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 1;
        }

        .IconoInformacion {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 1.5;
        }
        
    
</style>
    
<section class="Informacion">
    <header class="Encabezado">
    <div class="TituloEncabezado">
        <figure class="TituloMapa">
            <TituloMapa/>
        </figure>
        <figure class="IconoInformacion">
            <IconoInformacion/>
        </figure>
    </div>
    </header>
    <div class="Acerca">
        <h6 class="Subtitulo">
            ACERCA DE 
        </h6>
        <div class="Texto">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod quidem delectus hic aspernatur sit eum rem laborum sequi, recusandae similique ut totam, dolores dignissimos veniam. Voluptatem error ipsam ipsa!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis hic illo dolore a voluptate perspiciatis, beatae nisi odit distinctio maiores reiciendis corporis obcaecati veniam, illum possimus at? Delectus, vitae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quisquam optio quis aut nihil vero, ex fugiat non totam quidem modi, suscipit laboriosam molestiae placeat eligendi vel qui perspiciatis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime quisquam optio quis aut nihil vero, ex fugiat non totam quidem modi, suscipit laboriosam molestiae placeat eligendi vel qui perspiciatis!
            </p>
            <p>
                Lore ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur autem repudiandae ducimus nobis possimus facere sunt sint vero laudantium ex aperiam ipsa a, beatae neque, nostrum dolor animi sit!
                Lore ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur autem repudiandae ducimus nobis possimus facere sunt sint vero laudantium ex aperiam ipsa a, beatae neque, nostrum dolor animi sit!
            </p>
        </div>
    </div>
</section>