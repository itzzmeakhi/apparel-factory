import React, { Component } from 'react';

import './ShopPage.styles.css';

import SHOP_DATA from './ShopData';
import CollectionPreview from './../../components/CollectionPreview/CollectionPreview.component';

class ShopPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
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
}

export default ShopPage;