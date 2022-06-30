import './Item.css'
const productsImage = require.context('../../assets', true);

const Item = ({product}) => {

    const {image, name, description, price}= product

    return (
        <div class="col">
            <div class="card">
                <div class="card2">
                    <div  class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={productsImage(`./${image}`)} className="d-block w-100" alt={name}/>
                                <div class="cardDescription">
                                    <h2>{name}</h2>
                                    <div class="price">
                                        <h3>Precio:</h3>
                                        <span>${price}</span>
                                    </div>
                                    <p className="card-text">{description}</p>
                                    <a id="${id}" name="comprar" class="ver_mas" href="#">Ver Mas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default Item