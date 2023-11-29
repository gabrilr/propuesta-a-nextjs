
import '../globals.css';

export default function SectionAprende() {
    return (
        <>
        <section>
            <h2 class="subtitulo">Esto es lo que obtienes en CódigoFacilito</h2>
            <div class="separador-mediano">
                <img style={{width: '5%'}} src="./img/home/separator-mediano.png" alt=""/>
            </div>
            <div class="cont-text">
                <article class="columnasinfo">
                    <img class="cont-img" src="./img/home/learn-code-0.svg" alt="Aprende desde cero" srcset=""/>
                    <h3 class="cont-titulo">Aprende desde 0</h3>
                    <p style={{fontSize: '16px'}}>
                        Programar no tiene que ser tan difícil.
                        Aprende los fundamentos desde cero y obtén una base sólida.
                    </p>
                </article>
                <article class="columnasinfo">
                    <img class="cont-img" src="./img/home/learn-deeper.svg" alt="Aprende a tu ritmo" srcset=""/>
                    <h3 class="cont-titulo">Aprende a tu ritmo</h3>
                    <p style={{fontSize: '16px'}}>
                        Contamos con más de +1500 horas de contenido para que aprendas más allá de lo básico.
                        Cursos teóricos y prácticos con proyectos.
                    </p>
                </article>
                <article class="columnasinfo">
                    <img class="cont-img" src="./img/home/prepare.svg" alt="Prepárate para el futuro" srcset=""/>
                    <h3 class="cont-titulo">Prepárate para el futuro</h3>
                    <p style={{fontSize: '16px'}}>
                        Consigue las habilidades que tu carrera profesional necesita e
                        impúlsate para un futuro próspero en tecnología.
                    </p>
                </article>
            </div>
        </section>
        
        </>
    );
}