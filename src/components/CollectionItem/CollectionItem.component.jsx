import React from 'react';
import { connect } from 'react-redux';

import Button from './../Button/Button.component';

import './CollectionItem.styles.css';
import { addCartItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItemToCart}) => {
    const {imageUrl, name, price} = item;
    return(
        <div className = "CollectionItem">
            <div className = "Image"
                style = {{
                    backgroundImage : `url(${imageUrl})`
                }}>
            </div>
            <div className = "CollectionFooter">
                <span className = "Name">{name}</span>
                <span className = "Price">{price}</span>
            </div>
            <Button inverted onClick = {() => addItemToCart(item)}> Add to Cart </Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart : item => dispatch(addCartItem(item))
    }
}

export default connect(null,mapDispatchToProps)(CollectionItem);