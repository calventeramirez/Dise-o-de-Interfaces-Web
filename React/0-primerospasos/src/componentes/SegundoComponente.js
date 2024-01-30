import React, {useState} from 'react'

export const SegundoComponente = () => {
//   let nombre = "Pablo Calvente";
//     const cambiarNombre = (e) => {
//         nombre = "Calvente, Pablo";
//     }

    //Hook - useState
    const [nombre, setNombre] = useState("Pablo Calvente");

    const cambiarNombre = (e, nombreFijo) =>{
        setNombre(nombreFijo);
    }

    return (
    <div>
        <h3>Componente: useState</h3>
        <p>Nombre: {nombre}</p>
        <button onClick = {e => cambiarNombre(e, "Calvente, Pablo")}>Cambiar Nombre</button>
        &nbsp; &nbsp;    {/*  Dejo un espacio */}
        <input type = "text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='Introduce un nombre'></input>
    </div>
  )
}
