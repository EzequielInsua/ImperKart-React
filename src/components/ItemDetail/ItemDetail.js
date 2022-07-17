import CheckOut from '../CheckOut/CheckOut';
import styles from  './ItemDetail.module.scss';
import ItemCount from "../ItemCount/ItemCount";
import React, {useState, useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

const ProductsImage = require.context('../../assets', true);

const ItemDetail = ({product}) => {

    const {image, name,abstract, description, price}= product
    
    const [quantity, setQuantity] = useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (count) => {
        setQuantity(count);
        addToCart(product, count);
    }

    return (
        <div class= {styles.card} >
            <h1 class={styles.cardTitle}>{name}</h1>
            <div class={styles.cardContainer}>
                <div class={styles.imageContainer}>
                    <img src={ProductsImage(`./${image}`)} className={styles.image} alt={name}/>
                </div>
                <div class={styles.detailContainer}>
                    <div>
                        <h3>{abstract}</h3>
                        <h3>Descripción</h3>
                        <p class={styles.cardText}>{description}</p>
                    </div>
                    <div class="price">
                        <h5>Precio: <span>${price}</span> </h5>
                    </div>
                    {quantity !== 0 ? <CheckOut/> : <ItemCount maxStock={13} minStock={1} onAdd={onAdd}/>}
                </div>
            </div>
        </div>
    )
    }

    export default ItemDetail