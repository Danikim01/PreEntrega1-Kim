import React, { useState,useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({item,id,addToCart}) => {
  const [ItemCount, setItemCount] = useState(1);
    
  return (
    
    <>
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
      <button onClick={() => addToCart(item.name,ItemCount,item.price,item.img,id)}>Agregar al Carrito</button>
    </>
  );
}

export default ItemCount;
