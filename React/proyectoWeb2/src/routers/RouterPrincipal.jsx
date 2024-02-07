import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../componentes/Header';
import Inicio from '../componentes/Inicio';
import Footer from '../../../1_1-Proyecto/src/componentes/Footer';


export default function RouterPrincipal() {
  return (
    <>
    {/* Meter la web que solo variará el contenido */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="*" element={(
          <>
            <h1>Error 404</h1>
            <p>Esta página no existe</p>
          </>
        )} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
