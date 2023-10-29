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
        <div id="poster">
            <AbsoluteLogoComponent />
            <PosterTextComponent posterInfo={posterInfo}/>
            <img src={`${process.env.PUBLIC_URL}/wave_dot_line.png`} alt="" style={{width: "100%", marginBottom: "3rem"}} />
            <div style={{textAlign: "center"}}><p id="other-images-p">ほかの癒しを見よう</p></div>
            <ImageBarComponent posterInfos={posterInfosExceptId(id)} />
        </div>
    )
}

export default PosterComponent;