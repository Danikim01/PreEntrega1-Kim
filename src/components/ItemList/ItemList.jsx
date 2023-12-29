import React from 'react'
import './ItemList.css'
import UserCard from '../UserCard/UserCard'
import { Link } from 'react-router-dom'

const ItemList = ({items,categoryId}) => {
  return (
    <>
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
    </>
  )
}

export default ItemList