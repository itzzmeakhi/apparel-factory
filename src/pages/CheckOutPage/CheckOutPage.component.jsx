import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CheckOutPage.styles.css';
import CheckOutItem from './../../components/CheckOutItem/CheckOutItem.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckOutPage = (props) => {
    return(
        <div className = "CheckOutPage">

            <div className = "CheckOutHeader">

                <div className = "HeaderBlock">
                    <span> Product </span>
                </div>

                <div className = "HeaderBlock">
                    <span> Description </span>
                </div>

                <div className = "HeaderBlock">
                    <span> Quantity </span>
                </div>

                <div className = "HeaderBlock">
                    <span> Price </span>
                </div>

                <div className = "HeaderBlock">
                    <span> Remove </span>
                </div>

            </div>

            {
                props.cartItems.map(cartItem => {
                    return(
                        <CheckOutItem key = {cartItem.id} cartItem = {cartItem} />
                    )
                })
            }


            <div className = "CheckOutPrice">
                TOTAL PRICE : Rs. {props.totalPrice}
            </div>

            

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice : selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);