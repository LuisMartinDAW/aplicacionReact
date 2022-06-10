import React from 'react';
import './App.css';
import Componente from "./components/Componente.jsx";

function App() {
  return (
    <body>
      <header>
     <h1>Hola Mundo</h1>
      </header>
      <section>
      <Componente msg="Hola soy un Componente"/>
        <br/>
        <hr/>
        </section>
    </body>
    
    
  );
}

export default App;