
import Link from "next/link";
import './globals.css';

export default function Navbar() {

    return (

        <header>
            <nav className="colornav" style={{paddingLeft: '1%', paddingRight: '1%' }}>
                <img className='logo' src="../img/home/logo.png" alt="Logo CoFacilito" />
                <div style= {{width: '85%', textAlign: 'center'}}>
                    <a className='unalinea' href="">Contenido &#10140; Cursos</a>
                    <a className='unalinea' href="">Productos &#10140; Premium</a>
                    <a className='unalinea' href="">Precios</a>
                    <a className='unalinea' href="" style={{color: 'red'}}>CÓDIGOFEST</a>
                </div>
                <div style={{width: '20%', justifyContent: 'flex-end'}}>
                    <a class='unalinea' href="" style={{textDecoration: 'underline', color: 'gray'}}>Iniciar sesión</a>
                    <a class='unalinea boton botonreg' href="">Regístrate</a>
                </div>
            </nav>
        </header>
    );
}