import React from "react";
import Titulo from "./componentes/Titulo/Titulo";
import Filtro from "./componentes/Filtro/Filtro";
import Paises from "./componentes/Paises/Paises";
function App() {
  return (
    <main>
      <div className="container">
        <div className=" d-flex justify-content-center">
          <Titulo />
        </div>
        <Filtro />
        <Paises />
      </div>      
    </main>
  )
}

export default App