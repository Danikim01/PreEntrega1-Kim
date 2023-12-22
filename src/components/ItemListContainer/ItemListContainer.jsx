/* eslint-disable react/prop-types */
import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './ItemListContainer.css'
import UserCard from '../UserCard/UserCard'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  let { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      setItems(res.data)
    })
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? 
      <Spinner/> : 
      <>
        <h1>{categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : greeting}</h1>
        <div className='Card-List'>
          {
            categoryId
              ? items
                  .filter((item) => item.category === categoryId)
                  .map((item) => (
                    <div className='UserCard' key={item.id}>
                      <Link to={`/item/${item.id}`}>
                        <UserCard item={item} />
                      </Link>
                    </div>
                  ))
              : items.map((item) => (
                  <div className='UserCard' key={item.id}>
                      <Link to={`/item/${item.id}`}>
                        <UserCard item={item} />
                      </Link>
                  </div>
                ))
          }
        </div>
      </>}
    </>
  );
  
}

export default ItemListContainer