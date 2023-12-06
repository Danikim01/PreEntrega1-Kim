import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    const iconStyle = {
        fontSize: '2rem', 
      };
    return (
        <div>
            <Badge badgeContent={5} color="error">
                <ShoppingCartIcon  style={iconStyle}/>
            </Badge>
        </div>
    )
}

export default CartWidget