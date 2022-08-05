
import './purchase.scss';
import React from 'react';
import {useLocation } from 'react-router-dom';

const Purchase = () => {
    const location = useLocation();

    let newOrder = JSON.parse(location.state)

    return (
        <div className='purchase'>
            <h1>Gracias por su compra!</h1>
            <h3>¡Su compra a sido realizada!</h3> 
            <h4>El numero de su orden es: <span>{newOrder}</span></h4>
        </div>
    )
}

export default Purchase