import React,{useContext} from 'react'
import TextField from "@mui/material/TextField";
import { CartContext } from '../Context/CartContext';

const Brief = ({values,onChange,onSubmit}) => {
    const [cart, addToCart, removeList, deleteItem, amountOfItems] = useContext(CartContext);
    return (
        <>
            <form action="" className="form-container" onSubmit={onSubmit}>
                            <h1>Checkout Form</h1>
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
            <div className='checkout-details'>
                <h2>Items</h2>
                <div className='cart-items-details'>
                    {cart.map((item) => (
                        <div className='cart-item' key={item.id}>
                            <h3>{item.name}</h3>
                            <h4>Price: {item.price}</h4>
                            <h4>Quantity: {item.quantity}</h4>
                        </div>
                    ))}
                </div>
                <h2>Total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
            </div>
        </>
    )
}

export default Brief