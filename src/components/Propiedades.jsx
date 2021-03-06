import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props){

  return(
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
      <li>{props.cadena}</li>
      <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero": "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.Email}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
       <li>{props.elementoReact}</li>
        <li>{props.componentReact}</li>
      </ul>

      <div>
      
      
    </div>
      
    </div>
   
      
    
  );
  
}

Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};