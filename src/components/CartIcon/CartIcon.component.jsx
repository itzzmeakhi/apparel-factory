import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.css';

import { ReactComponent as ShoppingCartIcon } from './../../assets/images/shopping-cart/shopping-cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = (props) => {
    return(
        <div className = "CartIcon" onClick = {props.toggleCart}>
            <ShoppingCartIcon className = "ShoppingCartIcon" />
            <span className = "Text"> 0 </span>
        </div>
    )
}

// const mapStateToProps = state => {
//     const cartItemsCount = state.cart.cartItems.reduce()
//     return {
//         cartItems
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        toggleCart : () => dispatch(toggleCartHidden())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);