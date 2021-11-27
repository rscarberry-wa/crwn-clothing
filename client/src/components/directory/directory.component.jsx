import React from "react";
import { useSelector } from 'react-redux';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
    const sections = useSelector(selectDirectorySections);
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

export default Directory;