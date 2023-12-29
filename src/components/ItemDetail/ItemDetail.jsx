import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <>
    {
        <div className='tarjetaProducto'>
            <img className='imgItem' src={item.image} alt={item.title}/>
            <div className='datosProducto'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h3>Price: ${item.price}</h3>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    }
    
</>
  )
}

export default ItemDetail