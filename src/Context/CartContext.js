import React, {createContext, useEffect, useState} from 'react';
import swal from 'sweetalert';

export const CartContext = createContext();

const { Provider } = CartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantityTotal, setQuantityTotal] = useState(0);

    useEffect(() => {
        getQuantityTotal();
    }, [cart]);
    
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
    
    const getQuantityTotal = () => {
        let quantity = 0;
        cart.forEach(item => quantity += item.quantity);
        setQuantityTotal(quantity);
        return quantity;
    }

    const total = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
        
    return (
        <Provider value={{ cart, quantityTotal, addToCart, removeFromCart, total }}>
            {children}
        </Provider>
    );


}
export default CartProvider;