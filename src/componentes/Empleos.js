import React from "react";
import '../Estilos/Empleos.css';
 export function Empleos(props){
    return(
        <div className="contenedor-empleos">
            <img className="imagen-empleo"
            src={require(`../imagenes/${props.imagen}.png`)}
            alt='empleo1'/>
            <div className="contenedor-texto-descripcion">
                <p className="nombre-empleo1"><strong>{props.nombre}</strong>
                </p>
                <p className='cargo'>{props.cargo}</p>
                <p className='parrafo'>{props.descripcion}</p>
            </div>
        </div>
        
    );
}
//export default Empleos;