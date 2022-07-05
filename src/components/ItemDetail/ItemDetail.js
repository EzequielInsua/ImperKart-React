import styles from  './ItemDetail.module.scss';
import ItemCount from "../ItemCount/ItemCount";
const productsImage = require.context('../../assets', true);

const ItemDetail = ({product}) => {
    
    const {image, name,abstract, description, price}= product

    return (
        <div class= {styles.card} >
            <h1 class={styles.cardTitle}>{name}</h1>
            <div class={styles.cardContainer}>
                <div class={styles.imageContainer}>
                    <img src={productsImage(`./${image}`)} className={styles.image} alt={name}/>
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
                        <ItemCount maxStock={13} minStock={1}/>
                        <a id="${id}" name="buy" class={styles.buy} href="#">COMPRAR</a>
                </div>
            </div>

        </div>
    )
    }

    export default ItemDetail