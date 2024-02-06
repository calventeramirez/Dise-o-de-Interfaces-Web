import { useState } from "react";
import { GuardarEnLocalStorage } from "./utilidades/GuardarEnLocalStorage";

export default function Crear() {
  const[peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let target = e.target;
    console.log(target);
    let titulo = target.title.value;
    let descripcionTmp = target.description.value;

    let peli ={
        id: new Date().getTime(),
        titulo, // equivalente --> titulo: titulo,
        descripcion: descripcionTmp
    }

    // cambio el estado
    setPeliState(peli);

    GuardarEnLocalStorage("pelis", peli);
  }

  return (
    <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        {/* significa que si existe el titulo y la descripcion se muestra */}
        {(peliState.titulo && peliState.descripcion) && peliState.titulo}
        
        <form onSubmit={conseguirDatosForm}>
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
