import React from 'react';

import './CartItem.styles.css';

const CartItem = ({ item : { imageUrl, price, name, quantity } }) => {
    return(
        <div className = "CartItem">
            <img src = {imageUrl} alt = "Item" />
            <div className = "ItemDetails">
                <span className = "Name"> { name } </span>
                <span className = "Price"> { quantity } x Rs. { price } </span>
            </div>
        </div>
    )
}

export default CartItem;