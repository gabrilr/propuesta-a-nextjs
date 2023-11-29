import '../globals.css';
import Carrusel from './Carrusel';

export default function SectionAprende() {
    return (
        <>
        <section>
            <h2 class="subtitulo">¿Cómo quieres aprender?</h2>
            <div class="separador-mediano">
                <img style={{width: '5%'}} src="./img/home/separator-mediano.png" alt=""/>
            </div>
            
            <Carrusel/>

            <article class="aprender-art">
                <div style={{display: 'flex'}}>
                    <div id="bar-left">
                        <img src="https://codigofacilito.com/assets/branding/colors-bars-d92669e0d40bd282be1e0d76e8b07b3826d0e1d504ac5597131322c416aa20e7.png"
                            alt=""/>
                    </div>
                    <div id="div-information-CTO">
                        <div id="img-CTO"></div>
                        <div id="text-CTO">
                            <p style={{paddingBottom: '15%'}}>"Somos una de las propuestas educativas con más historia en la
                                industria, producimos contenido de educación accesible y de calidad desde la perspectiva del
                                respeto y la profesionalidad. Por eso millones han aprendido con Código Facilito."</p>
                            <p style={{fontWeight: 'bold', fontSize: 'x-large'}}>Uriel Hernández</p>
                            <p style={{color: '#0082E5', fontWeight: 'bold', fontSize: 'large'}}>CTO y Co-fundador de Código
                                Facilito</p>
                        </div>
                    </div>
                    <div id="bar-right">
                        <img src="https://codigofacilito.com/assets/branding/colors-bars-d92669e0d40bd282be1e0d76e8b07b3826d0e1d504ac5597131322c416aa20e7.png"
                            alt=""/>
                    </div>
                </div>
            </article>
        </section>
        </>);
}