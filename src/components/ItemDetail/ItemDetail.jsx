import React, { useContext, useEffect } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import {CartContext} from '../Context/CartContext'
import { ItemContent } from 'semantic-ui-react'

const ItemDetail = ({item,id}) => {
  const [cart, addToCart, removeList, deleteItem, amountOfItems] = useContext(CartContext);

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
                <ItemCount item={item} id={id} addToCart={addToCart}/>
            </div>
        </div>
    }
    
</>
  )
}

export default ItemDetail