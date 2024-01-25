import React, { useContext, useEffect } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import {CartContext} from '../Context/CartContext'

const ItemDetail = ({item}) => {
  const [cart, addToCart, removeList, deleteItem,counter,setCounter] = useContext(CartContext)

  return (
    <>
    {
        <div className='tarjetaProducto'>
            <div className='imgItem'>
              <img src={item.img} alt={item.name}/>
            </div>
            <div className='datosProducto'>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <h3>Price: ${item.price}</h3>
                <ItemCount initial={1} setCounter={setCounter}/>
                <button onClick={() => addToCart(item.name,counter,item.price,item.img)}>Agregar al Carrito</button>
            </div>
        </div>
    }
    
</>
  )
}

export default ItemDetail