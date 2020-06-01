import React from 'react';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.styles.css';

import  { connect } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cart.selectors';
import Button from './../Button/Button.component';
import CartItem from './../CartItem/CartItem.component';

const CartDropdown = (props) => {
    return(
        <div className = "CartDropdown" onClick = {props.currentUser}>
            <div className = "CartItems">
                {props.cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem} />)}
            </div>
            <Button type = "button"> Proceed to Checkout </Button>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         cartItems : selectCartItems(state)
//     }
// }

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);