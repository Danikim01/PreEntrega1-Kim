/* eslint-disable react/prop-types */
import React from 'react'
import {useState,useEffect} from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const ItemDetail = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setItem(res.data))
    }, [id])

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