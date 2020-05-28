import React from 'react';

import './CartDropdown.styles.css';

import Button from './../Button/Button.component';

const CartDropdown = (props) => {
    return(
        <div className = "CartDropdown" onClick = {props.currentUser}>
            <div className = "CartItems" />
            <Button type = "button"> Proceed to Checkout </Button>
        </div>
    )
}


export default CartDropdown;