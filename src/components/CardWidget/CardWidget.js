import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CardWidget.css";

const CardWidget = () => {
    return (
        <button type="button" class="btn btn-light" id="card">
            <ShoppingCartIcon fontSize="large" />
        </button>
    );
}   

export default CardWidget;