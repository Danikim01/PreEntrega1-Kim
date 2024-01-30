import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./Description.css"

const Description = ({item,id,addToCart}) => {
  return (
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
  )
}

export default Description