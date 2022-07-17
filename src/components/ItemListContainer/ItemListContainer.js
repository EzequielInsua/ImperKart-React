import "./ItemListContainer.scss";
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeProducts'
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading]=useState(true);

    const { categoryId } = useParams();
    
    const getProducts = async () => {
        try{
        const respuesta = await getData(categoryId);
            setProductList(respuesta)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect((categoryId)=>{
        getProducts(categoryId)
    },[categoryId])

    return (
    <div>
        <h1>{greeting}</h1>
        {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
        
    </div>
    )
}

    export default ItemListContainer;