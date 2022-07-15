import React, {createContext, useState} from 'react';
import swal from 'sweetalert';

export const CartContext = createContext();

const { Provider } = CartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            updateCart(item.id, quantity)
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const updateCart = (id, quantity) => {
        const newCart = cart.map((item) => 
            item.id === id ? {...item, quantity: item.quantity + quantity} : item
            )
        setCart(newCart);
    }

    
    const removeFromCart = (id) => {
        swal({
            title: "¿Estás seguro?",
            text: "¡Una vez eliminado, no podrás recuperar este Producto!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            swal(`Poof! ¡Tu Producto ha sido eliminado!`, {
            icon: "success",
            }
        );
            const newCart = cart.filter((item) => item.id !== id);
            setCart(newCart);
        } else {
            swal(`¡Tu Producto está a salvo!`);
        }
        });





    }
    

    const total = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
        
    return (
        <Provider value={{ cart, addToCart, removeFromCart, total }}>
            {children}
        </Provider>
    );


}
export default CartProvider;