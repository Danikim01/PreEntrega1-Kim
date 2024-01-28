import React, { useState,useContext } from "react";
import {db} from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import { CartContext } from "../Context/CartContext";

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

    console.log(cart)

    const onChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
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
        };
        const docRef = await addDoc(collection(db, "orders"), {
            order,
        });
        setOrderId(docRef.id);
        setValues(initialState);
    }

    return (
        <div className="checkout-form">
            <form action="" className="form-container" onSubmit={onSubmit}>
                <TextField
            placeholder="Name"
            style={{ margin: 10, width: 400 }}
            name="name"
            value={values.name}
            onChange={onChange}
            required
            />
            <TextField
            placeholder="Last Name"
            style={{ margin: 10, width: 400 }}
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            required
            />
            <TextField
            placeholder="Email"
            style={{ margin: 10, width: 400 }}
            name="email"
            value={values.email}
            onChange={onChange}
            required
            />
                        <TextField
            placeholder="Phone Number"
            style={{ margin: 10, width: 400 }}
            name="phone"
            value={values.phone}
            onChange={onChange}
            required
            />
            <button className="btnASendAction">Send</button>
            </form>
        </div>
    )
}

export default Checkout