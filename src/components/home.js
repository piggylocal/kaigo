import React from 'react';

import CoverComponent from "./cover";
import MainTextComponent from "./main.text";
import CharacterComponent from "./character";
import ImageBarComponent from "./image.bar";

import {POSTER_INFOS} from "../constants/poster";

const HomeComponent = () => {
    return (
        <div>
            <CoverComponent />
            <CharacterComponent />
            <MainTextComponent />
            <ImageBarComponent posterInfos={POSTER_INFOS} />
        </div>
    )
};

export default HomeComponent;