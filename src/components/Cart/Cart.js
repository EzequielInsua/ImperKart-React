import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const productsImage = require.context('../../assets', true);


const Cart = () => {
    const { cart, removeFromCart, total } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="cart">
                <h1>Carrito Vacio</h1>
            </div>
        )
    }

    return (
        <div className="cart">
            <h1>Carrito</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <div className="cart-item">
                            <img src={productsImage(`./${item.image}`)} width="70px"  alt={item.name} />
                            <div className="item-details">
                                <h2>{item.abstract}</h2>
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <buttom onClick={() => removeFromCart(item.id)}>Remover</buttom>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <p>Total: ${total()}</p>
            </div>
        </div>
    )
}

export default Cart