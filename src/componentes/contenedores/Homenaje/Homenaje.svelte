<script>
    let portilla = 'leon-portilla.png';

</script>

<style>

        /* * {
            outline: 1px solid blue;
        } */

        .Homenaje {
            position: absolute;
            right: 26%;
            
            width: 16rem;
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
            height: 3.25rem;
            background: #516980;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 0px 22px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            color: #fff;
        }

        .Semblanza {
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

        .Texto * {
            padding-right: .5rem;
        }


        .FotoHomenaje {
            display: flex;
        }

        img {
		    width: 2rem;
		    height: 2rem;
            object-fit: cover;
            border-radius: 50%;
        }

    
</style>
    
<section class="Homenaje">
    <header class="Encabezado">
        <div class="FotoHomenaje">
            <img src="{portilla}"  alt="homenaje">
        </div>
        <div class="TituloNombre">
            <h4>
                Miguel León Portilla
            </h4>
        </div>
    </header>
    <div class="Semblanza">
        <div class="Texto">
            <p>
                Ciudad de México, 22 de febrero de 1926-Ibidem, 1 de octubre de 2019.
            </p>
            <p>
                Su nombre aparece en los documentos académicos como Miguel León-Portilla, fue un filósofo e historiador mexicano, experto reconocido en materia del pensamiento y la literatura de la cultura náhuatl.2​ 
            </p>
            <p>
                Desde 1988, se desempeñó como investigador emérito de la Universidad Nacional Autónoma de México, recibió la Medalla Belisario Domínguez en 1995, y desde el 23 de marzo de 1971 era miembro de El Colegio Nacional, institución para cuyo ingreso presentó la ponencia La historia y los historiadores en el México antiguo, y fue recibido con discurso de Agustín Yáñez.
            </p>
        </div>
    </div>
</section>
