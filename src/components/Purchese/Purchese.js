import React from "react";
import {useLocation } from 'react-router-dom';

const Purchese = () => {
    const location = useLocation();
    console.log('hola', location);

    let newOrder = JSON.parse(location.state)
    
    console.log('estoy en P', newOrder);
    return (
        <>
            <h1>Orden de Compra</h1>
            <h3>¡Su compra a sido realizada!</h3> 
            <h4>El numero de su orden es: ${newOrder}</h4>
        </>
    )
}

export default Purchese