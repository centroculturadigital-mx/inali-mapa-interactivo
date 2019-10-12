<script>
    import IconoInformacion from "./Iconos/IconoInformacion.svelte";
    import TituloMapa from "./Iconos/TituloMapa.svelte";
</script>

<style>

        .Informacion {

            width: 16rem;
            height: 18rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
            color: #333;
            box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
            z-index: 10000;

        }

        .Encabezado {
            width: 100%;
            height: 3.25rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            background: #516980;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 0px 22px;
        }

         .Acerca {
            padding: .5rem 1.5rem;
        }

        .Texto {
            width: 100%;
            max-height: 13rem;
            overflow: auto;
            color: #5E5E5E;
            font-style: normal;
            font-weight: normal;
            font-size: .75rem;
            line-height: 1.5;
        }

        .TituloMapa {
            display: flex;
            justify-content: center;
        }

        .IconoInformacion {
            display: flex;
        }
    
</style>
    
<section class="Informacion">
    <header class="Encabezado">
        <div class="TituloMapa">
            <TituloMapa/>
        </div>
        <div class="IconoInformacion">
            <IconoInformacion/>
        </div>
    </header>
    <div class="Acerca">
        <div class="Texto">
            <h3 class="Subtitulo">
                ACERCA DE 
            </h3>
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