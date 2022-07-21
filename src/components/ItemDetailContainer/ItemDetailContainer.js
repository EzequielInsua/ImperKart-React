import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';
import {db} from '../../firebase/firebase';
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true); 

    const {id} = useParams();

    useEffect(() => {
        const productCollection = collection(db,'products');
        const refDoc = doc(productCollection, id);

        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data()
            })
        })
        .catch(error =>console.log(error))
        .finally(() => setLoading(false))
    },[id]);

    return (
        <div className= 'intemContainer'>
            {loading ? <CircularProgress color = "warning"/> : <ItemDetail product={product}/>}
        </div>
    )
}

    export default ItemDetailContainer;
