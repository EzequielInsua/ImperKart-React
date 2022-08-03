import React, {useContext, useEffect, useState} from "react";
import "./PurcheseForm.scss";
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import Purchese from "../Purchese/Purchese";
import userEvent from "@testing-library/user-event";
import swal from 'sweetalert';
import { async } from "@firebase/util";


const PurcheseForm = () => {
    const { cart, purchase } = useContext(CartContext);

    let totalPay = 0;
    cart.map(item => totalPay += item.price * item.quantity);

    const navigate = useNavigate();

    const saleCollection = collection(db,'sales');
    const [sale, setSale] = useState({
                                        name: '',
                                        lastName: '',
                                        mail: '',
                                        phone: '',
                                    });

    const [denyEnter, setDenyEnter] = useState(true);

    useEffect(() => {
        setDenyEnter( Object.values(sale).some(item => item === '') );
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
            // discountStock();
            navigate('/purchese', {state: JSON.stringify(newOrder._key.path.segments[1])});
        }
        catch(error){
            console.log(error);
            // swal("¡ROMPISTE TODO!")

        }finally{
            console.log('newOrder', newOrder);
            purchase();
        }
    }

    const discountStock = () => {
        cart.forEach( prod => {
            const product = doc( db, 'foodList', prod.id )
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
                <input type="email"  required="required" id="mail"/>
                <label for="mail">Correo Electronico</label>
            </div>
            <div className="imputBox">
                <input type="tel"  required="required" id="phone"/>
                <label for="phone">Telefono</label>
            </div>
            <div className="formPayout">
                <h3 className="fpTitle"> Seleccione Forma de Pago</h3>
                <div className="paySelector">
                    <input value="1" type="radio" name="wayToPay" id="TC"/>
                    <label for="TC">Tarjeta de Credito</label>
                </div>
                <div className="paySelector">
                    <input value="2" type="radio" name="wayToPay" id="TD"/>
                    <label for="TD">Tarjeta de Debito</label>
                </div>
                <div className="paySelector">
                    <input value="2" type="radio" name="wayToPay" id="P"/>
                    <label for="P">Paypal</label>
                </div>
            </div>
            <button type="submit" id='enter' disabled={denyEnter}>Enviar</button>
        </form>   
);
}

export default PurcheseForm;
