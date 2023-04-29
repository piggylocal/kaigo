import React from 'react';

import TitleComponent from "./title";
import ImgboxComponent from "./imagebox";

const CoverComponent = () => {
    return (
        <div id="cover">
            <TitleComponent />
            <ImgboxComponent />
        </div>
    )
};

export default CoverComponent;