import {useState} from 'react'

const ItemCountItem = ({ item, addToCart}) => {
    const [itemcount, setItemcount] = useState(item.quantity);
  
    return (
      <>
        <button
          onClick={() => {
            addToCart(item.name, 1, item.price, item.image, item.id);
            setItemcount(itemcount + 1);
          }}
        >
          +
        </button>
        <span>{itemcount}</span>
        <button
          onClick={() => {
            if (itemcount > 0) {
              addToCart(item.name, -1, item.price, item.image, item.id);
              setItemcount(itemcount - 1);
            }
          }}
        >
          -
        </button>
      </>
    );
  };

export default ItemCountItem