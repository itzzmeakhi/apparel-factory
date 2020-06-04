import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CheckOutPage.styles.css';
import CheckOutItem from './../../components/CheckOutItem/CheckOutItem.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeButton from './../../components/StripeButton/StripeButton.component';

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

            <div className = "TestCredentials">
                <p> You may use these Test credit card credentials </p>
                <p> 5555 5555 5555 4444  EXP : 03/2022 CVV: 310 </p>
            </div>

            <StripeButton price = {props.totalPrice} />

            

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice : selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);