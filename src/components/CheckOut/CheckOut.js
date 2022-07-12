import React from "react";
import {Link} from "react-router-dom";

const CheckOut = () => {
    return(
        <div class="item-count">
            <Link to={'/'} name="buy" class='buy'>Seguir Comprando</Link>
            <Link to={'/cart'} name="buy" class='buy'>Finalizar Compra</Link>
        </div>
        
    )
}

export default CheckOut;