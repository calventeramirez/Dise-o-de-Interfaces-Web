import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TercerComponente = props => {
    const[year, setYear] = useState(props.year);
    const avanzarFecha = (e) => {
        setYear(year+1);
    }
    const retrocederFecha = (e) => {
        setYear(year-1);
    }
    const cambiarAnio = (e) =>{
        let dato  = parseInt(e.target.value);
        if(Number.isInteger(dato)){
            setYear(dato)
        }
    }

    return (
    <div>
        <br></br>
        <h3>Fecha</h3>
        <p>{year}</p>
        <input type="text" placeholder='Cambiar año'></input>
        <button onClick={cambiarAnio}>Cambiar Año</button>
        <button onClick={retrocederFecha}>Retroceder</button>
        <button onClick={avanzarFecha}>Avanzar</button>
        <br></br>
        <br></br>
    </div>
  )
}

TercerComponente.propTypes = {
    year: PropTypes.number.isRequired
}

export default TercerComponente