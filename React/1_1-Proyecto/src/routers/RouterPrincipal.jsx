import { Inicio } from '../componentes/Inicio'
import { Listado } from '../componentes/Listado'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import {Routes, Route, NavLink, BrowserRouter} from "react-router-dom";

export const RouterPrincipal = () => {
    return (
    <>
        <div className='layout'>
            <BrowserRouter>
                <Header />
                <nav className='nav'>
                    <ul>
                    <li><NavLink to="/inicio">Inicio</NavLink></li>
                    <li><NavLink to ="/peliculas">Peliculas</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                </nav>
                <hr></hr>
                <Routes>
                    <Route path="/" element={<Inicio/>}></Route>
                    <Route path="/inicio" element={<Inicio/>}></Route>
                    <Route path="/peliculas" element={<Listado/>}></Route>
                    <Route path="/blog" element={<Listado/>}></Route>
                    <Route path="/contacto" element={<Listado/>}></Route>
                    <Route path="*" element={(
                    <>
                        <h1>Error 404</h1>
                        <p>Esta página no existe</p>
                    </>
                    )} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    </>
  )
}
