import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './../../components/CollectionPreview/CollectionPreview.component';
import { selectShopCollections } from './../../redux/shop/shop.selectors';

import './CollectionOverview.styles.css';

const CollectionOverview = (props) => {
    // console.log(props.collections);
    const {collections} = props;
    return (
        <div className = "CollectionOverview">

            {
                collections.map(collection => {
                    // console.log(collection);
                    return <CollectionPreview key = {collection.id} items = {collection.items} title = {collection.title} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);