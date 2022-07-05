import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProduct } from "../../mocks/fakeProducts"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const getProd = async () => {
        try{
            const respuesta = await getProduct
            setProduct(respuesta)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getProd();
    },[]);

    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail product={product}/>}
        </div>
    )
}



    export default ItemDetailContainer;
