import React from "react";
import Pais from "./Pais/Pais";
import './Paises.css'

function Paises(props) {
  return (
    <div className="row borda container justify-content-around">
    {props.paises.map( (p, indice) => {
      return <Pais key={indice} nome={p.nome} bandeira={p.bandeira} />
    })}
    </div>
  )
}

export default Paises