export const GuardarEnLocalStorage = (key, elemento) => {   
    // Realizo el Proceso de Almacenaje
    // Conseguir los elementos que ya tenemos en el LocalStorage
    let elementos = JSON.parse(localStorage.getItem(key));
    console.log(elementos);

    //Comprobar si es ya un array mi variable elementos
    if (Array.isArray(elementos)){
        // Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    } else{
      // Crear un array con la elemento porque no es un array o no saco nada
      elementos = [elemento];
    }

    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elementos));

    //Devolver objeto
    return elemento;
}