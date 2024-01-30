import React, { useState,useEffect } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';

const ItemCount = ({item,id,addToCart}) => {
  const [ItemCount, setItemCount] = useState(1);
    
  return (
    
    <>
      <ItemQuantitySelector ItemCount={ItemCount} setItemCount={setItemCount}/>
      <button onClick={() => addToCart(item.name,ItemCount,item.price,item.img,id)}>Agregar al Carrito</button>
    </>
  );
}

export default ItemCount;
