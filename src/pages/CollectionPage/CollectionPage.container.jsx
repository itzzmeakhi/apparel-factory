import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from './../../components/WithSpinner/WithSpinner.component';
import CollectionPage from './CollectionPage.component';
import { selectCollectionsLoading } from './../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectCollectionsLoading(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;