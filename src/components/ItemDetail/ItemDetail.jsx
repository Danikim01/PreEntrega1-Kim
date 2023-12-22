/* eslint-disable react/prop-types */
import React from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    const {id} = useParams()
    return (
    <>
        <h1>{id}</h1>
        <div className='tarjetaProducto'>
            <button>Agregar al Carrito</button>
        </div>
    </>
  )
}

export default ItemDetail