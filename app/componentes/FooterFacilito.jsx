import '../globals.css';

export default function SeparadorFooter() {
    return (
        <>
        <footer>
            <div style={{ width: '25%' }}>
                <div style={{ width: '85%' }}>
                    <img style={{ width: '100%' }} src="./img/home/iconos-footer.png" alt=""/>
                </div>
                <div style={{ width: '71%', backgroundColor: '#292C3F', borderRadius: '10px', padding: '10% 7% 10% 7%', marginTop: '3vh'}}>
                    <p style={{fontSize: 'medium'}}>“Los ordenadores son inútiles. Sólo pueden darte respuestas”</p>
                    <p style={{fontSize: 'medium'}}>- Pablo Picasso</p>
                </div>
            </div>
            <div style={{ width: '25%' }}>
                <h2>Planes de estudio</h2>

                <div class="footer-link">
                    <a href="">Desarrollador Web Frontend</a>
                </div>
                <div class="footer-link">
                    <a href="">Desarrollador JavaScript</a>
                </div>
                <div class="footer-link">
                    <a href="">Desarrollador Python</a>
                </div>
                <div class="footer-link">
                    <a href="">Introducción a la Programación</a>
                </div>
                <div class="footer-link">
                    <a href="">Desarrollo con Flutter</a>
                </div>
                <div class="footer-link">
                    <a href="">Especialidad de React</a>
                </div>
                <div class="footer-link">
                    <a href="">Ciencia de Datos</a>
                </div>
            </div>
            <div style={{ width: '25%' }}>
                <h2>Código Facilito</h2>
                <div class="footer-link">
                    <a href="">Cursos</a>
                </div>
                <div class="footer-link">
                    <a href="">Términos y Condiciones</a>
                </div>
                <div class="footer-link">
                    <a href="">Aviso de privacidad</a>
                </div>
                <div class="footer-link">
                    <a href="">Contacto</a>
                </div>
                <h2 style={{fontWeight: '400', fontSize: '20px'}}>González Ortega No. 165, Jojutla Morelos, México</h2>
            </div>
            <div style={{ width: '25%' }}>
                <h2>Descarga la app</h2>
                <div>
                    <img src="https://codigofacilito.com/assets/android/google-play-badge-c69016a28deb6489491a17780bc63d12e33afe011a07af75cdebbeab1ca6d71b.png" alt=""/>
                </div>
                <h2 style={{ fontSize: 'medium', fontWeight: '400', color: '#97989b'}}>Hecho con 💚 desde LATAM para todo el mundo de habla hispana.</h2>
            </div>
        </footer>
        </>);
}