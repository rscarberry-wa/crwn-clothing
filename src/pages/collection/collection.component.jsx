import React from "react";
import { connect } from 'react-redux';

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { CollectionPageContainer, CollectionPageTitle, CollectionPageItems } from "./collection.styles";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionPageItems>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionPageItems>
        </CollectionPageContainer>
    );
}

const mapStateToProps = (state, ownProps) => ({
    // Need to use lodash.memoize to properly memoize selectCollection, since
    // collectionId is passed in. collectionId is "hats", "jackets", etc.
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);


