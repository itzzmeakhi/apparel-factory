import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from './../../components/CollectionItem/CollectionItem.component';
import { selectCollection } from './../../redux/shop/shop.selectors';

import './CollectionPage.styles.css';


const CollectionPage = (props) => {
    const { title, items } = props.collection;
    return(
        <div className = "CollectionPage">
            <h2 className = "CollectionPageTitle">{ title }</h2>
            <div className = "CollectionPageItems">
                {items.map(item => (
                    <CollectionItem key = {item.id} item = {item} />
                ))}
            </div>
        </div>
    )
}

const myStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(myStateToProps)(CollectionPage);