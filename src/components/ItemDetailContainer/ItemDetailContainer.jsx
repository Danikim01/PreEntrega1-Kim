/* eslint-disable react/prop-types */
import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setItem(res.data))
    }, [id])

    return (
    <>
        <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer