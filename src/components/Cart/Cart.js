import './Cart.scss'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import {Link} from "react-router-dom"

const productsImage = require.context('../../assets', true);


const Cart = () => {
    const { cart, removeFromCart, total, emptyCart, purchase } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="emptyCart">
                <h1>Carrito Vacio</h1>
                <Link to={'/'} name="buy" className ='buy'>¡Es hora de llenarlo!</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <h1>Carrito</h1>
            <ul id = "ul">
                {cart.map(item => (
                    <li key={item.id}>
                        <div className="cartItem">
                            <h4>{item.abstract}</h4>
                            <div className="item-details">
                                <img src={productsImage(`./${item.image}`)} width="100px"  alt={item.name} />
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <buttom className ='buy' onClick={() => removeFromCart(item.id)}>Remover</buttom>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className = "cart-total">
                <p>Total: ${total()}</p>
            </div>
            <div className = "item-count">
                <Link to={'/'} name="buy" className ='buy'>Seguir Comprando</Link>
                <button className="buy" onClick={() => emptyCart()} >Vaciar Carrito</button>
                <Link to={'/form'} name="buy" className='buy'>Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart