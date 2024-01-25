import { useContext, useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {

    const [cart, addToCart, removeList, deleteItem, counter, setCounter, amountOfItems] = useContext(CartContext);
    const iconStyle = {
        fontSize: '2rem',
    };

    return (
        <div>
            <Badge badgeContent={amountOfItems()} color="error">
                <ShoppingCartIcon style={iconStyle} />
            </Badge>
        </div>
    );
}

export default CartWidget;
