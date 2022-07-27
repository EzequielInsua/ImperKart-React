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
        <div className="item-count">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="buttom" className="btn btn-outline-dark" onClick={onDecrement}>-</button>
                <span className="count">{count}</span>
                <button type="buttom" className="btn btn-outline-dark" onClick={onIncrement}>+</button>
            </div>
            <buttom name="buy" className='buy' onClick={ClickAddToCart}>Agregar al Carrito</buttom>
        </div>
    );
}

export default ItemCount;