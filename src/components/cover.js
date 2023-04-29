import React from 'react';

import TitleComponent from "./title";
import ImgboxComponent from "./imagebox";
import LogoComponent from "./logo";

const CoverComponent = () => {
    return (
        <div id="cover">
            <TitleComponent />
            <LogoComponent />
            <ImgboxComponent />
        </div>
    )
};

export default CoverComponent;