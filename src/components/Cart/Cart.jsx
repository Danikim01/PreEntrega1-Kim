import { React, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
  const [cart, addToCart, removeList, deleteItem, amountOfItems] = useContext(CartContext);

  return (
    <div className='carrito'>
      {cart.length !== 0 ? (
        <>
          {cart.map((item) => (
            <div className='producto-tarjeta' key={item.id}>
              <div className='img-producto'><img src={item.image} alt={item.name} /></div>
              <h3>{item.name}</h3>
              <h4>Price: {item.price}</h4>
              <h4>Cantidad: {item.quantity}</h4>
            </div>
          ))}
          <div className='total'>
            <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
          </div>
          <div className="botones">
            <button onClick={()=> removeList() }>Vaciar Carrito</button>
            <Link to="/checkout">
              <button>Finalizar Compra</button>
            </Link>  
          </div>
        </>
      ) : (
        <h1>No hay productos en el carrito</h1>
      )}
    </div>
  );
}  

