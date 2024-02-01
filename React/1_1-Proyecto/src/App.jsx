import './App.css'
import { Buscador } from './componentes/Buscador'
import Crear from './componentes/Crear'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import { Listado } from './componentes/Listado'
import Navbar from './componentes/Navbar'

function App() {
  return (
    <>
      <div className="layout">
        {/* <!--Cabecera--> */}
        <Header/>

        {/* <!--Barra de navegación--> */}
        <Navbar/>

        {/* <!--Contenido principal--> */}
        <section id="content" className="content">

            {/* <!--aqui van las peliculas--> */}
            <Listado/>

        </section>

        {/* <!--Barra lateral--> */}
        <aside className="lateral">
            <Buscador/>
            <Crear/>
        </aside>

        {/* <!--Pie de página--> */}
        <Footer/>
      </div>
    </>
  )
}

export default App
