
import '../globals.css';

export default function SectionCoco() {
    return (
        <>
        <section class="contenedor-inicio">

            <img class="linea-arriba" src="../img/home/top-color-bars.svg" alt=""/>
            {/* <img class="linea-abajo" src="./img/home/bottom-color-bars.svg" alt="" srcset=""> */}

            <div class="imgcoco" style={{width: '100%'}}>
                <img class="frontal" src="../img/home/evolution.png" alt="Evolucion cocodrilo dev"
                    style={{marginTop: '3%', width: '40%'}}/>
            </div>

            <div>
                <h1>La escuela para programadores</h1>
                <br/>
                <p style={{color: 'aliceblue', fontSize: 'large', marginBottom: '20px'}}>
                    Todo lo que tu carrera necesita para ir de 0 a senior en programación.</p>
                
                <form >
                    <input class="buscar" type="text" name="" id=""
                        placeholder="&#128269; Encuentra lo que tu carrera necesita..."/>
                </form>
            </div>
            <br/>
            <img class="barra" src="../img/home/separator.svg" alt="Barra color" srcset=""/>
            <br/><br/>
            <div>
                <a class="boton botonreg" href="">+ 200 cursos con Premium</a>
                <a class="boton botoninscrip" href="">Bootcamps (inscripciones abiertas)</a>
            </div>
            <br/><br/>
            <a style={{color: 'white', textDecoration: 'underline', fontSize: 'medium', fontWeight: 'bold'}} href="">Inicia con 10
                clases gratis</a>
                <br/><br/><br/>
        </section>
        </>
    );
}