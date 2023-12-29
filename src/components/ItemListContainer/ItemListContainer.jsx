/* eslint-disable react/prop-types */
import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ItemListContainer.css'
import UserCard from '../UserCard/UserCard'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([])

  let { categoryId } = useParams();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      setItems(res.data)
    })
  }, [])

  return (
    <>
      {
      <>
        <h1>{categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : greeting}</h1>
        <div>
          <ItemList items={items} categoryId={categoryId}/>
        </div>
      </>}
    </>
  );
  
}

export default ItemListContainer