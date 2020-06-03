import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from './../../components/CollectionOverview/CollectionOverview.component';

import './ShopPage.styles.css';
import CollectionPage from '../CollectionPage/CollectionPage.component';



const ShopPage = (props) => {
    return(
        <div className = "ShopPage">
            <Route exact path = {`${props.match.path}`} component = { CollectionOverview } />
            <Route path = {`${props.match.path}/:collectionId`} component = { CollectionPage } />
        </div>
    )
    
}



export default ShopPage;