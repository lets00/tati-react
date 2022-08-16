import React from "react";
import Titulo from "./componentes/Titulo/Titulo";
import Filtro from "./componentes/Filtro/Filtro";
function App() {
  return (
    <main>
      <div className="container">
        <div className=" d-flex justify-content-center">
          <Titulo />
        </div>
        <Filtro />
      </div>      
    </main>
  )
}

export default App