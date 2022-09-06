import React from "react";
import Titulo from "./componentes/Titulo/Titulo";
import Filtro from "./componentes/Filtro/Filtro";
import Paises from "./componentes/Paises/Paises";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [paises, setPaises] = useState([]);
  const [filtro, setFiltro] = useState();
  const [populacao, setPopulacao] = useState(0);
  const [totalPaises, setTotalPaises] = useState(0)
  const [paisesFiltrados, setPaisesFiltrados] = useState([]);

  function modifiqueiFiltro(modificacao) {
    setFiltro(modificacao);
    console.log(modificacao);
    const paisesQueCasamComONome = paises.filter( (pais) => pais.nome.toLowerCase().includes(modificacao.toLowerCase()))
    setPaisesFiltrados(paisesQueCasamComONome)
    setTotalPaises(paisesQueCasamComONome.length)
    const populacaoTotal = paisesQueCasamComONome.reduce((acc, pais) => pais.populacao + acc , 0)
    setPopulacao(populacaoTotal)
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
      setPaisesFiltrados(paisesTransformados)
      const populacaoTotal = paisesTransformados.reduce((acc, pais) => pais.populacao + acc , 0)
      setPopulacao(populacaoTotal)
      setTotalPaises(paises.length)
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
        <Filtro totalPaises={totalPaises} populacao={populacao} onFiltroChange={modifiqueiFiltro} />
        <Paises paises={paisesFiltrados}/>
      </div>      
    </main>
  )
}

export default App