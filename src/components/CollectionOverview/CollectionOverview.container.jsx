import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsFetching } from './../../redux/shop/shop.selectors';
import WithSpinner from './../WithSpinner/WithSpinner.component';
import CollectionOverview from './CollectionOverview.component';

const mapStateToProps = createStructuredSelector({
    isLoading : selectCollectionsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;