import React, { useContext} from 'react'
import {CartContext} from '../Context/CartContext'
import Description from './Description'

const ItemDetail = ({item,id}) => {
  const [cart, addToCart, removeList, deleteItem, amountOfItems] = useContext(CartContext);

  return (
      <Description item={item} id={id} addToCart={addToCart}/>
  )
}

export default ItemDetail