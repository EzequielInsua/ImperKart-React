
import './purchase.scss';
import React from 'react';
import {useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";

const Purchase = () => {
    const location = useLocation();

    let newOrder = JSON.parse(location.state)

    return (
        <div className='purchase'>
            <h1>Gracias por su compra!</h1>
            <h3>¡Su compra a sido realizada!</h3> 
            <h4 className='purchaseH4'>El numero de su orden es: <span className='newOrder'>{newOrder}</span></h4>
            <Link to={'/'} name="buy" className ='buy'>Ir a la página principal</Link>
        </div>
    )
}

export default Purchase