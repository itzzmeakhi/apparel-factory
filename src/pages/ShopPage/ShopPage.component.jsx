import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from './../../components/CollectionOverview/CollectionOverview.component';

import './ShopPage.styles.css';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import { updateCollections } from './../../redux/shop/shop.actions';

class ShopPage extends Component {
 
   state = {
    loading: true
  };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }
    
    render() {
        const { match } = this.props;
        return(
            <div className = "ShopPage">
                {this.state.loading ? null :
                <Switch>
                    <Route exact path = {`${match.path}`} component = { CollectionOverview } />
                    <Route path = {`${match.path}/:collectionId`} component = { CollectionPage } /> 
                </Switch>
    }
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
});



export default connect(null, mapDispatchToProps)(ShopPage);