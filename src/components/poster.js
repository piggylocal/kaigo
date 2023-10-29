import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import { id2posterInfo, posterInfosExceptId } from "../constants/poster.manager";

import ImageBarComponent from "./image.bar";
import PosterTextComponent from "./poster.text";
import AbsoluteLogoComponent from "./absolute.logo";

const PosterComponent = () => {
    const { id } = useParams();
    const posterInfo = id2posterInfo(id);
    if (!posterInfo) {
        throw new Error("Poster not found!");
    }

    useEffect(() => {
        document.title = posterInfo.desc;
    });

    return (
        <div className="poster">
            <AbsoluteLogoComponent />
            <PosterTextComponent posterInfo={posterInfo}/>
            <ImageBarComponent posterInfos={posterInfosExceptId(id)} />
        </div>
    )
}

export default PosterComponent;