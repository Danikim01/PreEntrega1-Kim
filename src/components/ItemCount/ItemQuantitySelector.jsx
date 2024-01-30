import React from 'react'
import './ItemQuantitySelector.css'

const ItemQuantitySelector = ({ItemCount, setItemCount}) => {
  return (
    <div className='contador'>
        <button
        onClick={() => {
            setItemCount(ItemCount + 1);
        }}
        >
        +
        </button>
        <span>{ItemCount}</span>
        <button
        onClick={() => {
            if (ItemCount > 1)
            setItemCount(ItemCount - 1);
        }}
        >
        -
        </button>
  </div>
  )
}

export default ItemQuantitySelector