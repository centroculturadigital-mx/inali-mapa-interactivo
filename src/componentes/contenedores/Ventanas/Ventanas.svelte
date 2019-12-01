<script>

    import Ventana from "./Ventana.svelte";

    import {onMount} from "svelte";

    import { createEventDispatcher } from 'svelte';

    import FamiliaVentana from "../Lenguas/FamiliaVentana.svelte";
    import TwitterVentana from "../Twitter/Twitter.svelte";
    
    import Informacion from "../Informacion/Informacion.svelte";
    import Homenaje from "../Homenaje/Homenaje.svelte";
 

    const dispatch = createEventDispatcher();
    


    export let ventanas = []


    $: ventanas ? posicionarVentanas() : ()=>{}

    
    onMount(()=>{
        
        
        if( typeof window != "undefined" && !! ventanas ) {
    
            posicionarVentanas()
        
        }
    
    })


    const posicionarVentanas = () => {


        ventanas = ventanas.map((v,i)=>{
            
            let wW = window.innerWidth;
            let wH = window.innerHeight;

            // let offX=1;
            // let offY=1;
            let vL;
            let vT;

            let diffX = Math.abs((wW/2)-v.origen.x)
            let diffY = Math.abs((wH/2)-v.origen.y)

            if( v.origen.x < wW/2  ) {
                vL = Math.max(Math.min((wW/2)-diffX,(wW-2)-240), 0)
            } else {
                vL = Math.max(Math.min((wW/2)+diffX,wW-240), wW/2)
            }

            if( v.origen.y < wH/2 ) {
                vT = Math.max(Math.min((wH/2)-diffY,(wW-2)-240), 0)            
            } else {
                vT = Math.max(Math.min((wH/2)+diffY,wH-(240+64)), wH/2)            
            }


            let newV = {
                ...v,
                left: vL,
                top: vT
            }

            // acomodarSinColisiones(newV)

            return newV

        })
        
        ventanas = ventanas.map((v,i)=>{
        
            let newV = {
                ...v
            }

            acomodarSinColisiones(newV)


            return {...newV};

        })

        ventanas = ventanas

    }

    const detectarColisiones = (v) => {
        
        let posX = v.origen.x
        let posY = v.origen.y

        if( !! v.left && !! v.top ) {
            posX = v.left
            posY = v.top
        }

        let ventanasEncimadas = ventanas.filter( (otra,oI) => {
            
            let posOtraX = otra.origen.x
            let posOtraY = otra.origen.y

            if( !! otra.left && !! otra.top ) {
                posOtraX = otra.left
                posOtraY = otra.top
            }
            
            if( v.indice != otra.indice ) {

                console.log(
                    v.origen.x,otra.origen.x,
                    "posX",posX,
                    "posY",posY,
                    "posOtraX",posOtraX,
                    "posOtraY",posOtraY
                );
                
                return (
                    Math.abs( posX - posOtraX ) <= 240 &&
                    Math.abs( posY - posOtraY ) <= 240
                    // ( posX >= (posOtraX) ) && ( posX <= (posOtraX+240) )
                    // &&
                    // ( posY >= (posOtraY) ) && ( posY <= (posOtraY+240) )
                    // &&
                    // (v != otra)
                )

            } else {
                
                return false
            }
        })

        if(ventanasEncimadas.length > 0) {
            ventanasEncimadas.push(v)
        }

        

        return ventanasEncimadas

    }


    const acomodarSinColisiones = (v) => {
        
        let colisiones;

        colisiones = detectarColisiones(v)

        let otraAcomodada = colisiones.find(v_=>v_.acomodada)
        
        let ventanasPorReacomodar = colisiones.filter(v_=>!v_.acomodada)
        
        if( !! otraAcomodada ) {
            
            ventanasPorReacomodar.map(vpr=>{
                
                posicionarNuevoOrigen(vpr,otraAcomodada.left,otraAcomodada.top);                

                let nuevasColisiones = detectarColisiones(vpr)

                if( nuevasColisiones.length > 0 ) {
                    let nuevaOtraAcomodada = nuevasColisiones.find(v_=>v_.acomodada)

                    if( ! nuevaOtraAcomodada ) {
                        vpr.acomodada = true
                    }

                    nuevasColisiones.filter(nCV=>!nCV.acomodada).forEach(nCV=>acomodarSinColisiones(nCV))


                    // posicionarNuevoOrigen(vpr,nuevaOtraAcomodada.left,nuevaOtraAcomodada.top);                
                }

            })

        }

    }

    const posicionarNuevoOrigen = (v,vL,vT) => {
        
        // vL += 240
        // vT += 240

        if( vL > window.innerWidth / 2 ) {
            v.left = vL - 300
        } else {
            v.left = vL + 300
        }

        v.top = vT //+ 300

    }




    const cerrar = (ventana,e) => {        
        dispatch("cerrar", {ventana,e})
    }


</script>


<style>
    .Ventanas {
        width: 100vw;
        /* height: 95vh; */
        height: calc(100vh - 3rem);
        display: block;
        position: absolute;
        z-index: 60;
        pointer-events: none;
    }

    .Origen {
        position: absolute;
        width: 2rem;
        height: 2rem;
        background-color: #f00;
        border-radius: 50%;
    }
</style>


<div class="Ventanas">


    {#each ventanas as ventana,i ("ventana_"+i)}

        <Ventana {...ventana}>
            {#if ventana.tipo=="twitter"}
                <TwitterVentana on:cerrar={()=>cerrar(ventana)}/>
            {/if}
            {#if ventana.tipo=="familia"}
                <FamiliaVentana familia={ventana.props.familia} {...ventana.props} on:cerrar={(e)=>cerrar(ventana,e)}/>
            {/if}
            {#if ventana.tipo=="homenaje"}
                <Homenaje on:cerrar={()=>cerrar(ventana)}/>
            {/if}
            {#if ventana.tipo=="informacion"}
                <Informacion on:cerrar={()=>cerrar(ventana)}/>
            {/if}
        </Ventana>

        <!-- <div class="Origen" style="left: {ventana.origen.x}px; top: {ventana.origen.y}px">
            {i+1}
        </div> -->

    {/each}


</div>