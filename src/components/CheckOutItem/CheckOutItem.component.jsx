import React from 'react';
import { connect } from 'react-redux';

import './CheckOutItem.styles.css';
import { clearItemFromCart, addCartItem, removeCartItem } from './../../redux/cart/cart.actions';

const CheckOutItem = (props) => {
    return(
        <div className = "CheckOutItem">

            <div className = "ImageContainer">
                <img alt = "Item" src = {props.cartItem.imageUrl}/>
            </div>

            <span className = "Name">{props.cartItem.name}</span>
            <span className = "Quantity">
                <div className = "Arrow" onClick = {() => props.removeItem(props.cartItem)}>&#10094;</div>
                <span className = "Value">{props.cartItem.quantity}</span>
                <div className = "Arrow" onClick = {() => props.addItem(props.cartItem)}>&#10095;</div>
            </span>
            <span className = "Price">Rs. {props.cartItem.price}</span>
            
            <div className = "RemoveButton" onClick = {() => props.clearItem(props.cartItem)}> &#10005; </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clearItem : item => dispatch(clearItemFromCart(item)),
        addItem : item => dispatch(addCartItem(item)),
        removeItem : item => dispatch(removeCartItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckOutItem);