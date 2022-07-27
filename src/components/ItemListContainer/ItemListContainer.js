import "./ItemListContainer.scss";
import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading]=useState(true);
    const { categoryId } = useParams();
    
    useEffect(()=>{
        const productsQuery = categoryId 
            ? query(collection(db,'foodList'), where('category', '==', categoryId))
            : collection(db,'foodList'); 

        getDocs(productsQuery)
        .then(result => {
            const list = result.docs.map(product => {
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProductList(list);
        })
        .catch(error =>console.log(error))
        .finally(() => setLoading(false))
    },[categoryId])

    return (
    <div className = "landing">
        <h1>{greeting}</h1>
        {loading ? <CircularProgress color = "warning"/> : <ItemList productList={productList}/> }
    </div>
    )
}

    export default ItemListContainer;