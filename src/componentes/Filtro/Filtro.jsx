import React from "react";
import { useState } from "react";

function Filtro(props) { 
  return (
    <div className="row">
        <div className="col-12 col-lg-10">
            <input onChange={(e) => {props.onFiltroChange(e.target.value)}} type='text' className='form-control'/>
        </div>
        <div className="col-12 col-lg-1">
            <strong>Países: {props.paises}</strong>
        </div>
        <div className="col-12 col-lg-1">
            <strong>População: {props.populacao}</strong>
        </div>
    </div>
  )
}

export default Filtro