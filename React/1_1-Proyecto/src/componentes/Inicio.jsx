import { Listado } from '../componentes/Listado'
import { Buscador } from '../componentes/Buscador'
import Crear from '../componentes/Crear'

export const Inicio = () => {
  return (
    <>
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
    </>
  )
}
