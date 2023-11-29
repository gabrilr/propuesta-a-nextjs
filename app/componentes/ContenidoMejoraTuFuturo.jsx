
import '../globals.css';

export default function SectionMejoraFuturo() {
    return (
        <>
        <section style={{backgroundColor: '#EFFAF4', display: 'flex'}}>
            <div style={{width: '10%'}} id="bar-left">
                <img style={{ position: 'relative', left: '-50px'}} src="./img/home/bottom-color-bars.svg" alt=""/>
            </div>
            <div style={{display: 'flex', width: '84%', padding: '10vh 0% 10vh 0%'}}>
                <div>
                    <h2 style={{fontSize: '60px', margin: '15% 0% 5% 0%', color: '#051626'}}>
                        ¡Es hora de mejorar tu futuro, comienza ahora!</h2>
                    <a id="btn-comienza" href="">¡Comienza gratis ahora!</a>
                </div>
                <div>
                    <img src="https://codigofacilito.com/assets/codys/programando-circle-83a5c0c48b92a40090f4d46f1b28b026630dd9ee8e51769cf223e53ca3eb32cb.png"
                        alt=""/>
                </div>
            </div>
            <div id="bar-right">
                <img src="./img/home/top-color-bars.svg" alt=""/>
            </div>
        </section>
        </>);
}