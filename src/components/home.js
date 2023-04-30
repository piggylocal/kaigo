import React from 'react';

import CoverComponent from "./cover";
import MainTextComponent from "./main.text";
import CharacterComponent from "./character";
import ImageBarComponent from "./image.bar";

const HomeComponent = () => {
    return (
        <div>
            <CoverComponent />
            <CharacterComponent />
            <MainTextComponent />
            <ImageBarComponent />
        </div>
    )
};

export default HomeComponent;