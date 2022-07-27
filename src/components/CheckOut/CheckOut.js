import React from "react";
import {Link} from "react-router-dom";
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CheckOut = () => {

    const {emptyCart} = useContext(CartContext)
    
    return(
        <div className="item-count">
            <Link to={'/'} name="buy" className='buy'>Seguir Comprando</Link>
            <Link to={'/cart'} name="buy" className='buy'>Finalizar Compra</Link>
        </div>
    )
}

export default CheckOut;