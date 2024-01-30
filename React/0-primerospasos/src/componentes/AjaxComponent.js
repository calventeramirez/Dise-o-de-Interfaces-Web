import React, { useState, useEffect } from 'react'

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id":1,
                "email":"george.bluth@reqres.in",
                "first_name":"George",
                "last_name":"Bluth",
                "avatar":"https://reqres.in/img/faces/1-image.jpg"
            },
            {
                "id":2,
                "email":"janet.weaver@reqres.in",
                "first_name":"Janet",
                "last_name":"Weaver",
                "avatar":"https://reqres.in/img/faces/2-image.jpg"
            },
            {
                "id":3,
                "email":"emma.wong@reqres.in",
                "first_name":"Emma",
                "last_name":"Wong",
                "avatar":"https://reqres.in/img/faces/3-image.jpg"
            },
            {
                "id":4,
                "email":"eve.holt@reqres.in",
                "first_name":"Eve",
                "last_name":"Holt",
                "avatar":"https://reqres.in/img/faces/4-image.jpg"
            }
        ]);
    } 

    useEffect(()=>{
        getUsuariosEstaticos();
    }, []);//con [] le indico que se cargue unicamente cuando la carga inicial del componente
    

    return (
    <div>
        <h1>Ajax Component</h1>
        <h2>Listado de usuarios</h2>
        {/* Aqui ira nuestra peticion Ajax mediante: promesa o bien mediante async await */}
        <ol className='usuarios'>
            {
                usuarios.map(usuario => {
                    return  (<li key={usuario.id}>
                            <img src={usuario.avatar} width="25"/> &nbsp; &nbsp;
                            {usuario.first_name} {usuario.last_name}
                        </li>);
                            
                })
            }
        </ol>
    </div>
  )
}
