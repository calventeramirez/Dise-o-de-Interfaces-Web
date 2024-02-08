import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../componentes/Header';
import Articulos from '../componentes/Articulos';
import Footer from '../componentes/Footer';
import Banner from '../componentes/Banner';
import Tarjetas from '../componentes/Tarjetas';
import BarraLateral from '../componentes/BarraLateral';
import Proyectos from '../componentes/Proyectos';
import Formacion from '../componentes/Formacion';
import Contacto from '../componentes/Contacto';


export default function RouterPrincipal() {
  return (
    <>
    {/* Meter la web que solo variará el contenido */}
    <BrowserRouter>
      <Header />
      <main className='wrap'>
        <section id = "info">
          <Banner />
          <Tarjetas />
        </section>
        <div className='cuerpo'>
          <BarraLateral />
          <Routes>
            <Route path="/" element={<Articulos />}></Route>
            <Route path="/blog" element={<Proyectos />}></Route>
            <Route path="/formacion" element={<Formacion />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={(
              <>
                <h1>Error 404</h1>
                <p>Esta página no existe</p>
              </>
            )} />
          </Routes>
          </div>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}
