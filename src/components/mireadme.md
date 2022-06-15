prop-types 

instalar

npm i -S prop-types

**El CICLO DE VIDA DE LOS COMPONENTES**
***Normalmente tiene tres fases***

*Montado*
*, Actualización*
*, Desmontaje*


**MONTADO**
Son métodos que la aplicación React carga en el navegador y ya tenemos el elemento insertado en el DOM.

**El estado de un componente padre, se le puede pasar a la propiedad de un componente hijo**
*Los componentes funcionales no pueden taner estado, pero el estado del padre se le pasó como una *propieddad* al componente hijo. 
Esto es importante porque cada vez recibe una propiedad modifica su estado esa propiedad va a renderizar el pintado de la UI**
Enonces cambios en los estados como en las propiedades van hacer cambios en la UI