<script>
    import IconoInformacion from "./Iconos/IconoInformacion.svelte";
    import TituloMapa from "./Iconos/TituloMapa.svelte";
</script>

<style>

        /* * {
            outline: 1px solid blue;
        } */

        .Informacion {
            position: absolute;
            right: 0;
            width: 240px;
            height: 18rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            color: #333;
            box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
        }

        .Encabezado {
            width: 100%;
            height: 3rem;
            background: #516980;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 0px 25px;
        }

        .Acerca {
            padding: 0 1.3rem;
            margin-top: 1rem;

        }

        .Texto {
            width: 100%;
            max-height: 11rem;
            overflow: auto;
            color: #5E5E5E;
            font-style: normal;
            font-weight: normal;
            font-size: .5rem;
            line-height: 1rem;
            margin-top: .5rem;
        }

        .Texto * {
            padding-right: .5rem;
            padding-top: .5rem;
        }

        .Subtitulo {
            font-style: normal;
            font-weight: normal;
            font-size: .8rem;
            color: #878787;
        }

        .TituloEncabezado {
            display: flex;
            margin-top: -2rem;
            align-items: center;
        }

        .TituloMapa {
            display: flex;
            -webkit-transform: scale(1.8);
            transform: scale(1.8);
            padding-left: 0.4rem;
        }

        .IconoInformacion {
            display: flex;
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
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
        <span class="Subtitulo">
            ACERCA DE 
        </span>
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