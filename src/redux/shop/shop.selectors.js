import { createSelector } from 'reselect';

const selectShop = state => state.shop;

//not used by other component
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//Object.keys(state.shop.collections).map(), return an array of categories value
//used by collections-overview
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
        collections ? Object.keys(collections).map(key => collections[key]) : []
);

//state.shop.collections[collectionUrlParam], it's an object(hashmap, dictionary)
//used by individual collection page
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
