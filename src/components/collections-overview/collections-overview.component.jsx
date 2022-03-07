import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import './collections-overview.styles.scss';

//get collections(array of categories value) from shop.selectors, map collections to each five category and give to CollectionPreview
const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map( ({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>  
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);