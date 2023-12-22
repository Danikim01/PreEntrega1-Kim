/* eslint-disable react/prop-types */
import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './ItemListContainer.css'
import UserCard from '../UserCard/UserCard'

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
      <h1>{categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : greeting}</h1>
      <div className='Card-List'>
        {
          categoryId
            ? items
                .filter((item) => item.category === categoryId)
                .map((item) => (
                  <div className='UserCard' key={item.id}>
                    <UserCard item={item} />
                  </div>
                ))
            : items.map((item) => (
                <div className='UserCard' key={item.id}>
                  <UserCard item={item} />
                </div>
              ))
        }
      </div>
    </>
  );
  
}

export default ItemListContainer