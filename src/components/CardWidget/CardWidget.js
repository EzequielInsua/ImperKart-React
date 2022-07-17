import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import "./CardWidget.scss";

const CardWidget = () => {
    const { quantityTotal } = useContext(CartContext);

    return (
        <Link to = './Cart' className="btn btn-light cw_display">
            <div type="button" class="" id="card">
                <ShoppingCartIcon fontSize="large" />
            </div>
            { quantityTotal > 0 && <span id="cartQuantity">{quantityTotal}</span> }
        </Link>
    );
}   

export default CardWidget;