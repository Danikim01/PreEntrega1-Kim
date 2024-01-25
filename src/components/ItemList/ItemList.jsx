import React from 'react'
import './ItemList.css'
import UserCard from '../UserCard/UserCard'
import { Link } from 'react-router-dom'

const ItemList = ({items}) => {
  return (
    <>
        <div className='Card-List'>
            {items.map((item) => {
                return (
                  <Link to={`/item/${item.id}`} key={item.id}>
                    <UserCard item={item}/>
                  </Link>
                )
            })}
        </div>
    </>
  )
}

export default ItemList