import React from 'react';

import CoverComponent from "./cover";
import MainTextComponent from "./main.text";
import CharacterComponent from "./character";

const HomeComponent = () => {
    return (
        <div>
            <CoverComponent />
            <CharacterComponent />
            <MainTextComponent />
        </div>
    )
};

export default HomeComponent;