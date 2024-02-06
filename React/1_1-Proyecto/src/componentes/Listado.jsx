import { Link } from "react-router-dom"

export const Listado = () => {
  return (
    <article className="peli-item">
        <h3 className="title">Contenido 1</h3>
        <p className="description">Descripción 1</p>
        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
        <Link to="/">Ir a inicio</Link>
    </article>
)
}
