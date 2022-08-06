import './Cart.scss'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import {Link} from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';


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
            <table className="table-light">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Precio Total</th>
                        <th scope="col">Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr className='tr' key={item.id}>
                            <td className='td'><img src={`${item.image}`} width="100px" alt={item.name} /></td>
                            <td className='td'>{item.name}</td>
                            <td className='td'>{item.quantity}</td>
                            <td className='td'>${item.price}</td>
                            <td className='td'>${item.quantity * item.price}</td>
                            <td className='td'><button className ='deleted' onClick={() => removeFromCart(item.id)}><DeleteIcon /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className = "cart-total">
                <div className='cTotal'>Total: ${total()}</div>
            </div>
            <div className = "item-count">
                <Link to={'/'} name="buy" className ='buy'>Seguir Comprando</Link>
                <button className="deleted" onClick={() => emptyCart()} >Vaciar Carrito</button>
                <Link to={'/form'} name="buy" className='buy'>Finalizar Compra</Link>
            </div>
        </div>

    )
}

export default Cart