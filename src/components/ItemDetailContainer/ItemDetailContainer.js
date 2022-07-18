import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProduct } from "../../mocks/fakeProducts";
import './ItemDetailContainer.scss';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true); 

    const {id} = useParams();

    const getProd = async () => {
        
        try{
            const respuesta = await getProduct(id);
                setProduct(respuesta)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect((id) => {
        getProd(id);
    },[id]);

    return (
        <div className= 'intemContainer'>
            {loading ? <p>Cargando...</p> : <ItemDetail product={product}/>}
        </div>
    )
}

    export default ItemDetailContainer;
