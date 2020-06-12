import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import CollectionOverview from './../../components/CollectionOverview/CollectionOverview.component';

import CollectionOverviewContainer from './../../components/CollectionOverview/CollectionOverview.container';
import CollectionPageContainer from './../CollectionPage/CollectionPage.container';
import { fetchCollectionsStart } from './../../redux/shop/shop.actions';

import './ShopPage.styles.css';
// import CollectionPage from '../CollectionPage/CollectionPage.component';
// import { selectCollectionsLoading } from './../../redux/shop/shop.selectors';
// import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
//import { updateCollections } from './../../redux/shop/shop.actions';
// import WithSpinner from './../../components/WithSpinner/WithSpinner.component';
// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
 
//    state = {
//        loading: true
//    };

//     unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;

        fetchCollectionsStart();

        //fetchCollectionsStartAsync();
        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');

        // this.unsubscribeFromSnapshot = collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading : false});
        // });
    }
    
    render() {
        const { match } = this.props;
        return(
            <div className = "ShopPage">

                {/* <Route 
                    exact path = {`${match.path}`}
                    render = {(props) => <CollectionOverviewWithSpinner isLoading = {isFetching} {...props} />} 
                /> */}
                <Route
                    exact path = {`${match.path}`}
                    component = {CollectionOverviewContainer}
                />
                <Route
                    path = {`${match.path}/:collectionId`}
                    component = {CollectionPageContainer}
                />
                {/* <Route 
                    path = {`${match.path}/:collectionId`}
                    render = {(props) => <CollectionPageWithSpinner isLoading = {!isCollectionsLoading} {...props} /> } 
                />  */}

            </div>
        )
    }
    
}

// const mapStateToProps = createStructuredSelector({
//     isCollectionsLoading : selectCollectionsLoading
// });

const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
    }
};

// const mapDispatchToProps = dispatch => ({
//     updateCollections: collectionsMap =>
//         dispatch(updateCollections(collectionsMap))
// });



export default connect(null, mapDispatchToProps)(ShopPage);