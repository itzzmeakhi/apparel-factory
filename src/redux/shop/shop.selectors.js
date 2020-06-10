import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectShopCollections = createSelector(
    [selectCollections],
    collections =>
        collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionURLParam => createSelector(
    [selectShopCollections],
    collections => collections.find(collection => collection.title.toLowerCase() === collectionURLParam.toLowerCase())
);

export const selectCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectCollectionsLoading = createSelector(
    [selectShop],
    shop => !!shop.collections
);