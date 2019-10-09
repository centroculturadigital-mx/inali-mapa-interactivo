<script>
    let portilla = 'leon-portilla.png';

</script>

<style>

        /* * {
            outline: 1px solid blue;
        } */

        .Homenaje {
            position: absolute;
            right: 500px;
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
            border-radius: 0px 0px 0px 22px;
        }

        .Semblanza {
            padding: 0 1.5rem;
            margin-top: 1rem;

        }

        .Texto {
            width: 100%;
            max-height: 12.5rem;
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


        .TituloEncabezado {
            display: flex;
            flex-direction: row;
            color: #fff;
        }


        .FotoHomenaje {
            display: flex;
            margin-top: .5rem;
            margin-left: 1.5rem;
        }

          img {
		    width: 2rem;
		    height: 2rem;
            object-fit: cover;
            border-radius: 50%;
        }

        .Fecha {
            font-size: .4rem;
            color: #fff;
            /* line-height: 1.2; */

        }

        .TituloNombre {
            padding: .5rem;
            margin-left: .5rem;
        }
    
</style>
    
<section class="Homenaje">
    <header class="Encabezado">
    <div class="TituloEncabezado">
        <div class="FotoHomenaje">
            <!-- <img class="Imagen" src={`http://unsplash.it/300/${100+Math.floor(Math.random()*500)}`} alt="img"/> -->
            <img src="{portilla}"  alt="homenaje">
        </div>
        <div class="TituloNombre">
            <h6>
                Miguel León Portilla
            </h6>
            <span class="Fecha">
                <p>
                    (Ciudad de México, 22 de febrero de
                </p>
                <p>
                    1926-Ibidem, 1 de octubre de 2019)
                </p>
            </span>
        </div>
    </div>
    </header>
    <div class="Semblanza">
        <div class="Texto">
            <p>
                Su nombre aparece en los documentos académicos como Miguel León-Portilla, fue un filósofo e historiador mexicano, experto reconocido en materia del pensamiento y la literatura de la cultura náhuatl.2​ Desde 1988, se desempeñó como investigador emérito de la Universidad Nacional Autónoma de México, recibió la Medalla Belisario Domínguez en 1995, y desde el 23 de marzo de 1971 era miembro de El Colegio Nacional, institución para cuyo ingreso presentó la ponencia La historia y los historiadores en el México antiguo, y fue recibido con discurso de Agustín Yáñez.
            </p>
        </div>
    </div>
</section>
