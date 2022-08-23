import React from "react";

function Pais(props){
    return(
      <div className="col-7 col-lg-3 borda pais">
        <img className='bandeira' src={props.bandeira} ></img>
        <span>{props.nome}</span>
      </div>
    )
}

export default Pais
