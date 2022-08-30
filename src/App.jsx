import React from "react";
import Titulo from "./componentes/Titulo/Titulo";
import Filtro from "./componentes/Filtro/Filtro";
import Paises from "./componentes/Paises/Paises";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [paises, setPaises] = useState([]);
  const [filtro, setFiltro] = useState();
  const [populacao, setPopulacao] = useState();
  const [paisesFiltrados, setPaisesFiltrados] = useState([]);

  function modifiqueiFiltro(modificacao) {
    setFiltro(modificacao);
    console.log(modificacao);
  }

  useEffect( () => {
    const funcaoAssincrona = async () => {
      const resultado = await fetch('https://restcountries.com/v3.1/all')
      const resultadoJson = await resultado.json()
      const paisesTransformados = resultadoJson.map( pais => { 
        return {'nome': pais.translations.por.common,
                'bandeira': pais.flags.svg,
                'populacao': pais.population}
      })
      setPaises(paisesTransformados)
      const populacaoTotal = paisesTransformados.reduce((acc, pais) => pais.populacao + acc , 0)
      setPopulacao(populacaoTotal)
      setPaisesFiltrados(paisesTransformados.length)

      console.log(paisesTransformados)
    }
    funcaoAssincrona().catch(() => {console.log('Deu erro')})
  } , [])

  return (
    <main>
      <div className="container">
        <div className=" d-flex justify-content-center">
          <Titulo />
        </div>
        <Filtro paises={paisesFiltrados} populacao={populacao} onFiltroChange={modifiqueiFiltro} />
        <Paises paises={paises}/>
      </div>      
    </main>
  )
}

export default App