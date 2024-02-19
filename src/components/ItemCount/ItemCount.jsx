import React, { useState,useEffect } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';


const ItemCount = ({item,id,addToCart}) => {
  const [ItemCount, setItemCount] = useState(1);
    
  return (
    
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <ItemQuantitySelector ItemCount={ItemCount} setItemCount={setItemCount}/>
      <button style={
        {
          padding:"20px 40px",
          width:"200px",
          fontSize:"16px",
          fontWeight:"600",
          color:"white",
          backgroundColor:"#ff4141",
          outline:"none",
          border:"none",
          cursor:"pointer",
        }
      
      } onClick={() => addToCart(item.name,ItemCount,item.price,item.img,id)}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
