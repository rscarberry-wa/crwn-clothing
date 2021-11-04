import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, CollectionPreviewTitle, PreviewDiv } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
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

export default CollectionPreview;