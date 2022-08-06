import React from 'react';
import './Item.scss';
import {Link} from 'react-router-dom';
const productsImage = require.context('../../assets', true);

const Item = ({product}) => {

    const {image, name, abstract, price, id}= product

    return (
        <div className="card">
            <div className="card2">
                <img src={`${image}`} className="intemImg" alt={name}/>
                <div className="cardDescription">
                    <h2>{name}</h2>
                    <div className="price">
                        <h3>Precio:</h3>
                        <span>${price}</span>
                    </div>
                    <p className="cardText">{abstract}</p>
                    <Link to={`/detalle/${id}`} key = {id} name="comprar" className="ver_mas">Ver Detalle</Link>
                </div>
            </div>
        </div>
    )
    }

    export default Item