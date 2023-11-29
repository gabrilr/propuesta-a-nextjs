
import Navbar from "./navbar";
import SectionCoco from "./componentes/Contenidococo";
import SectionAprende from "./componentes/ContenidoAprende";
import SectionComoAprender from "./componentes/ContenidoComoAprender";
import SectionDicenEstudiantes from "./componentes/ContenidoDicenEstudiantes";
import SectionMejoraFuturo from "./componentes/ContenidoMejoraTuFuturo";
import SeparadorFooter from "./componentes/SeparadorFooter";
import FooterFacilito from "./componentes/FooterFacilito";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <title>Código Facilito</title>
        {/* <link rel="icon" type="image/x-icon" href="./img/iconCF.png" /> */}
      </header>
      <body >
        <Navbar/>
        <SectionCoco/>
        <SectionAprende/>
        <SectionComoAprender/>
        <SectionDicenEstudiantes/>
        <SectionMejoraFuturo/>
        <SeparadorFooter/>
        <FooterFacilito/>

        {children}
      </body>
    </html>
  )
}
