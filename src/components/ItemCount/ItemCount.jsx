import React, { useState,useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial,setCounter}) => {
  const [initial_number, setInitial] = useState(initial);

  const add = () => {
    setInitial(initial_number + 1);
    setCounter(initial_number + 1);
  };

  const subtract = () => {
    if (initial_number > 0){
        setInitial(initial_number - 1);
        setCounter(initial_number - 1);
    }else{
        setInitial(0);
    }
  };

  return (
    <div className='contador'>
      <button onClick={subtract}>-</button>
      <span>{initial_number}</span>
      <button onClick={add}>+</button>
    </div>
  );
};

export default ItemCount;
