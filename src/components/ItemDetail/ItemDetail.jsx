/* eslint-disable react/prop-types */
import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    console.log(item)
    return (
    <>
        <div className='tarjetaProducto'>
            <div id="imgContainer"><img src={item.img} alt="" /></div>
            <h2>{item.name}</h2>
            <h3>Precio: {item.price}$</h3>
            <h4>Stock: {item.stock}</h4>
            <p>{item.description}</p>
            <button>Agregar al Carrito</button>
        </div>
    </>
  )
}

export default ItemDetail