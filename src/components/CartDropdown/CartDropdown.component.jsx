import React from 'react';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './CartDropdown.styles.css';

import  { connect } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cart.selectors';
import { toggleCartHidden } from './../../redux/cart/cart.actions';
import Button from './../Button/Button.component';
import CartItem from './../CartItem/CartItem.component';

const CartDropdown = (props) => {
    // console.log(props);
    return(
        <div className = "CartDropdown" onClick = {props.currentUser}>
            <div className = "CartItems">
                {
                    props.cartItems.length ?
                        props.cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem} />)
                    :
                        <span className = "EmptyText">Cart is Empty</span>
                }
            </div>
            <Button type = "button" onClick = {() => {
                props.dispatch(toggleCartHidden())
                props.history.push('/checkout')
                }}> 
                    Proceed to Checkout 
            </Button>
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

export default withRouter(connect(mapStateToProps)(CartDropdown));