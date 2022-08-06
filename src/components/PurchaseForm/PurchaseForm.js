import React, {useContext, useEffect, useState} from "react";
import "./PurchaseForm.scss";
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import swal from 'sweetalert';


const PurchaseForm = () => {
    const { cart, purchase } = useContext(CartContext);

    let totalPay = 0;
    cart.map(item => totalPay += item.price*item.quantity);

    const navigate = useNavigate();

    const saleCollection = collection(db,'sales');
    const [sale, setSale] = useState({
                                        name: '',
                                        lastName: '',
                                        phone: '',
                                        mail: '',
                                        mailRepeat: '',
                                    });

    const [denyEnter, setDenyEnter] = useState(true);

    useEffect(() => {
        if (sale.name !== '' && sale.lastName !== '' && sale.phone !== '' && sale.mail !== '' && sale.mailRepeat !== '' && sale.mail === sale.mailRepeat) {
            setDenyEnter(false);
        } else {
            setDenyEnter(true);
        }
    }, [sale]);

    const handleChange = ({id, value}) => {
        setSale({...sale,
            [id]: value
        })
    }

    const addOrder = async (e) => {
        e.preventDefault();
        let newOrder
        const order = {
            'buyer': sale,
            'items': cart,
            'date': serverTimestamp(),
            'state': 'generada'
        }
        try{
            newOrder = await addDoc( saleCollection, order);
            discountStock();
            navigate('/purchase', {state: JSON.stringify(newOrder._key.path.segments[1])});
        }
        catch(error){
            console.log(error);
            swal({
                icon: 'error',
                title: 'Lo sentimos, ha ocurrido un error. Por favor, intente nuevamente mas tarde.',
                text: `Error: ${error}`
            })
        }finally{
            purchase();
        }
    }
    const discountStock = () => {
        cart.forEach( prod => {
            const product = doc( db,'foodList', `${prod.id}`);
            console.log('product', product);
            try {
                updateDoc( product, { 'stock': prod.stock - prod.quantity } )
            }catch (error){
                console.log(error)
            }
        })
    }

    return (
        <form className="form" onChange={({target})=>handleChange(target)} onSubmit={addOrder}>
            <h1 className="formTitle">Formulario de Compra</h1>
            <div className="imputBox">
                <input type="text"  required="required" id="name"/>
                <label for="name">Nombre</label>
            </div>
            <div className="imputBox">
                <input type="text"  required="required" id="lastName"/>
                <label for="lastName">Apellido</label>
            </div>
            <div className="imputBox">
                <input type="tel"  required="required" id="phone"/>
                <label for="phone">Telefono</label>
            </div>
            <div className="imputBox">
                <input type="email"  required="required" id="mail"/>
                <label for="mail">Email</label>
            </div>
            <div className="imputBox">
                <input type="email"  required="required" id="mailRepeat"/>
                <label for="mailRepeat">Repita su Email</label>
            </div>
            <button type="submit" id='enter' disabled={denyEnter}>Enviar</button>
        </form>   
);
}

export default PurchaseForm;


