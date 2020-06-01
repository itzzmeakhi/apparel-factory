import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CartIcon.styles.css';

import { ReactComponent as ShoppingCartIcon } from './../../assets/images/shopping-cart/shopping-cart.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from './../../redux/cart/cart.selectors';

const CartIcon = (props) => {
    return(
        <div className = "CartIcon" onClick = {props.toggleCart}>
            <ShoppingCartIcon className = "ShoppingCartIcon" />
            <span className = "Text"> { props.cartItemsCount } </span>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         cartItemsCount : selectCartItemsCount(state)
//     }
// }

const mapStateToProps = createStructuredSelector({
    cartItemsCount : selectCartItemsCount
})

const mapDispatchToProps = dispatch => {
    return {
        toggleCart : () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);