import { v4 as uuidv4 } from 'uuid';

import ImageLinkComponent from "./image.link";

const ImageBarComponent = ({ posterInfos }) => {
    return (
        <div id="image-bar">
            <ImageLinkComponent key="" description="dummy description" />
            {posterInfos.map((posterInfo, index) => {return (
                <ImageLinkComponent key={uuidv4()} id={posterInfo.id} src={posterInfo.url} description={posterInfo.desc} index={index} total={posterInfos.length} />
            )})}
        </div>
    );
};

export default ImageBarComponent;