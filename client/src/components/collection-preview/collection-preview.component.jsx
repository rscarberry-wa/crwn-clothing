import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, CollectionPreviewTitle, PreviewDiv } from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </CollectionPreviewTitle>
        <PreviewDiv>
            {
                items.filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                        )
                    )
            }
        </PreviewDiv>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);