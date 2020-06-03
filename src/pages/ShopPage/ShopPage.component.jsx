import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './ShopPage.styles.css';
import { selectShopCollections } from './../../redux/shop/shop.selectors';

import CollectionPreview from './../../components/CollectionPreview/CollectionPreview.component';

const ShopPage = (props) => {

    const {collections} = props;
    return(
        <div className = "ShopPage">
            <h1> Shop Page </h1>
            {
                collections.map(collection => (
                    <CollectionPreview key = {collection.id} items = {collection.items} title = {collection.title} />
                ))
            }
        </div>
    )
    
}

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);