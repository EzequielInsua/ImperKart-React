import React, {useState} from "react";
import "./ItemCount.css";

const ItemCount = ({maxStock, minStock}) => {
    const [count, setCount] = useState(1);

    const onDecrement = () => {
        count > minStock ? setCount(count - 1) : setCount(1);
    }

    const onIncrement = () => {
        count < maxStock ? setCount(count + 1) : setCount(maxStock);
    }

    const reset = () => {
        setCount(1);
    }
        
    return (
        <div class="item-count">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="buttom" class="btn btn-outline-dark" onClick={onDecrement}>-</button>
                <span class="count">{count}</span>
                <button type="buttom" class="btn btn-outline-dark" onClick={onIncrement}>+</button>
                <button type="buttom" class="btn btn-outline-dark" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default ItemCount;