import React from 'react';
import { connect } from 'react-redux';

import './CartIcon.styles.css';

import { ReactComponent as ShoppingCartIcon } from './../../assets/images/shopping-cart/shopping-cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = (props) => {
    return(
        <div className = "CartIcon" onClick = {props.toggleCart}>
            <ShoppingCartIcon className = "ShoppingCartIcon" />
            <span className = "Text"> { props.cartItemsCount } </span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItemsCount : state.cart.cartItems.reduce((totalCount, cartItem) => {
            return totalCount + cartItem.quantity;
        }, 0)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCart : () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);