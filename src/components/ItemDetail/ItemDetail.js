import CheckOut from '../CheckOut/CheckOut';
import styles from  './ItemDetail.module.scss';
import ItemCount from "../ItemCount/ItemCount";
import React, {useState} from 'react';

const ProductsImage = require.context('../../assets', true);

const ItemDetail = ({product}) => {

    const [Check, setCheck] = useState(false);
    
    const {image, name,abstract, description, price}= product

    const onAdd = (count) => {
        console.log(count);
        setCheck(true);
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
                    {Check ? <CheckOut/> : <ItemCount maxStock={13} minStock={1} onAdd={onAdd}/>}
                </div>
            </div>
        </div>
    )
    }

    export default ItemDetail