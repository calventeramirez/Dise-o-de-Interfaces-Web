import { useEffect, useState } from 'react'

export default function Articulos() {
  const [articulos, setArticulos] = useState([]);

  //Funcion para rellenar el array de articulos
  const  getArticulos = () =>{
      fetch("https://fakestoreapi.com/products/")
        .then(respuesta => respuesta.json())
        .then(resultado_final =>{
          setArticulos(resultado_final.data);
          console.log(resultado_final);
        });
  }

  useEffect (()=>{
    getArticulos();
  }, []); //Cado cargo el componente

  return (
    <section id="articles">
        <h2>Últimos artículos</h2>
        {articulos && articulos.map((articulo) => (
          <article key={articulo.id}>
            <div className="datos">
              <span>Fecha: 01 de enero</span>
              <span>Categoría:{articulo.category}</span>
            </div>
            <h4>
              {articulo.title}
            </h4>
            <p>
              {articulo.description}
            </p>
          </article>
        ))}
    </section>
  )
}
