import CheckOut from '../CheckOut/CheckOut';
import styles from  './ItemDetail.module.scss';
import ItemCount from "../ItemCount/ItemCount";
import React, {useState, useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({product}) => {

    const {image, name,abstract, description, price}= product
    
    const [quantity, setQuantity] = useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (count) => {
        setQuantity(count);
        addToCart(product, count);
    }

    return (
        <div className = {styles.card} >
            <h1 className = {styles.cardTitle}>{name}</h1>
            <div className = {styles.cardContainer}>
                <div className = {styles.imageContainer}>
                    <img src = {`${image}`} className = {styles.image} alt = {name}/>
                </div>
                <div className={styles.detailContainer}>
                    <div>
                        <h3>{abstract}</h3>
                        <h4>Descripción</h4>
                        <p className={styles.cardText}>{description}</p>
                    </div>
                    <div className={styles.price}>
                        <h5>Precio: <span>${price}</span> </h5>
                    </div>
                    {quantity !== 0 ? <CheckOut/> : <ItemCount maxStock={10} minStock={1} onAdd={onAdd}/>}
                </div>
            </div>
        </div>
    )
    }

    export default ItemDetail