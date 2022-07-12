import "./ItemCount.scss";
import React, { useState } from 'react';

const ItemCount = ({maxStock, minStock, onAdd}) => {

    const [count, setCount] = useState(1);
    
    const onDecrement = () => {
        count > minStock ? setCount(count - 1) : setCount(1);
    }

    const onIncrement = () => {
        count < maxStock ? setCount(count + 1) : setCount(maxStock);
    }

    const ClickAddToCart = () => {
        onAdd(count);
    }
        
    return (
        <div class="item-count">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="buttom" class="btn btn-outline-dark" onClick={onDecrement}>-</button>
                <span class="count">{count}</span>
                <button type="buttom" class="btn btn-outline-dark" onClick={onIncrement}>+</button>
            </div>
            <buttom name="buy" class='buy' onClick={ClickAddToCart}>Agregar al Carrito</buttom>
        </div>
    );
}

export default ItemCount;