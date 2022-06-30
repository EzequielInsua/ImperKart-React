
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productList}) => {
    // const {productList}=props
    return (
        <div>
            <h3>Lista de productos</h3>
            <div class="row row-cols-1 row-cols-md-4 g-6">
            {productList.map((product)=><Item key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default ItemList