import React from 'react';
import './App.css';
import Componente from "./components/Componente.jsx";
import Propiedades from "./components/Propiedades.jsx";

function App() {
  return (
    <div>
       <header>
       <h1>Hola Mundo</h1>
      </header>
      
      <section>
        <Componente msg="Hola soy un Componente"/>
        <hr/>
        <br/>
        <Propiedades
          cadena = "Esto es una cadena de texto" 
          numero = {19} 
          booleano = {true}
          arreglo = {[1, 2, 3]}
          objeto = {{nombre: "Luis", Email: "luisvigente@hotmail.com"}}
          funcion = {(num) => num * num}
          elementoReact = {<i>Esto es un elemento React</i>}
          componentReact = {<Componente msg="Soy un componente pasado como Prop"/>}/>
        <hr/>
        <br/>
        
        </section>
    
    </div>
    
  );
}

export default App;