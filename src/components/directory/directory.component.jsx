import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({sections}) => {
    // id needs to be destructured since it's passed to the menuitem as "key". But 
    // title, imageUrl, size, etc.. can be passed via ...<name>
    return (
        <DirectoryMenuContainer>
            { 
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                )) 
            }
        </DirectoryMenuContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);