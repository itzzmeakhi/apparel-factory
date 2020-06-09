import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from './../../components/CollectionOverview/CollectionOverview.component';

import './ShopPage.styles.css';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import { updateCollections } from './../../redux/shop/shop.actions';
import WithSpinner from './../../components/WithSpinner/WithSpinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
 
   state = {
       loading: true
   };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading : false});
        });
    }
    
    render() {
        const { match } = this.props;
        return(
            <div className = "ShopPage">

                <Route 
                    exact path = {`${match.path}`}
                    render = {(props) => <CollectionOverviewWithSpinner isLoading = {this.state.loading} {...props} />} 
                />
                <Route 
                    path = {`${match.path}/:collectionId`}
                    render = {(props) => <CollectionPageWithSpinner isLoading = {this.state.loading} {...props} /> } 
                /> 

            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
});



export default connect(null, mapDispatchToProps)(ShopPage);