import React, { Component } from "react";


// COmponente funcional (funcion expresada)

const Componente = (props) => <h2>{props.msg}</h2>



// Componente funcional (funcion declarada)
/*
function Componente(props){
  return <h2>{props.msg}</h2>
}
*/

// Componente por clase
/*
class Componente extends Component{
  render(){
    return <h2>{this.proos.msg}</h2>
  }
}
*/
export default Componente;