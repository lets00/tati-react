import React from "react";
import { useState } from "react";

function Filtro() {
  const [entrada, setEntrada] = useState();  
  return (
    <div className="row">
        <div className="col-12 col-lg-10">
            <input onChange={(e) => {setEntrada(e.target.value) }} value={entrada} type='text' className='form-control'/>
        </div>
        <div className="col-12 col-lg-1">
            <strong>Países: 999</strong>
        </div>
        <div className="col-12 col-lg-1">
            <strong>População: 9.999.999.999</strong>
        </div>
        <p> { entrada } </p>
    </div>
  )
}

export default Filtro