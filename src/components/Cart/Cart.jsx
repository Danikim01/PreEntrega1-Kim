import { React, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { count } from 'firebase/firestore';
import ItemCountItem from '../ItemCountItem/ItemCountItem';
import './Cart.css';

export const Cart = () => {
  const [cart, addToCart, removeList, deleteItem, counter, setCounter, amountOfItems] = useContext(CartContext);

  return (
    <div className='carrito'>
      {cart.length !== 0 ? (
        <>
          {cart.map((item) => (
            <div className='producto-tarjeta' key={item.id}>
              <div className='img-producto'><img src={item.image} alt={item.name} /></div>
              <h3>{item.name}</h3>
              <h4>Price: {item.price}</h4>
              <div className='contadores'>
                <ItemCountItem item={item} addToCart={addToCart} deleteItem={deleteItem} />
              </div>
            </div>
          ))}
          <div className='total'>
            <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
          </div>
          <div className="botones">
            <button onClick={()=> removeList() }>Vaciar Carrito</button>  
            <button>Finalizar Compra</button>
          </div>
        </>
      ) : (
        <h1>No hay productos en el carrito</h1>
      )}
    </div>
  );
}  

