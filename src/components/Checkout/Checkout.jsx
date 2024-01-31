import React, { useState,useContext } from "react";
import {db} from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../Context/CartContext";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Brief from "./Brief";

const initialState = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
};

const Checkout = () => {
    const [values, setValues] = useState(initialState);
    const [orderId, setOrderId] = useState(null);
    const [cart, addToCart, removeList, deleteItem, amountOfItems] = useContext(CartContext);

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const order = {
            buyer: values, 
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                image: item.image
            })),
            date: new Date().toString(),
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            state: "Generada",
        };
        const docRef = await addDoc(collection(db, "orders"), {
            order,
        });
        setOrderId(docRef.id);
        setValues(initialState);
        removeList();
    }

    return (
        <div className="checkout-form">
            {!orderId ? (
                <Brief values={values} onChange={onChange} onSubmit={onSubmit}/>
            ) : (
                <div className="message-success">
                    <h1>Thank you for your purchase! Your order number is {orderId}</h1>
                    <Link to="/">
                        <button>Go Back to the store</button>
                    </Link>
                </div>
            )}
        </div>
    );    
}

export default Checkout