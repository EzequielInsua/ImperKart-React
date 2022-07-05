import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CardWidget.scss";

const CardWidget = () => {
    return (
        <button type="button" class="btn btn-light" id="card">
            <ShoppingCartIcon fontSize="large" />
        </button>
    );
}   

export default CardWidget;