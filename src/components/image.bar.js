import ImageLinkComponent from "./image.link";

const ImageBarComponent = ({ posterInfos }) => {
    return (
        <div id="image-bar">
            <ImageLinkComponent description="dummy description" />
            {posterInfos.map((posterInfo, index) => {return (
                <ImageLinkComponent id={posterInfo.id} src={posterInfo.url} description={posterInfo.desc} index={index} total={posterInfos.length} />
            )})}
        </div>
    );
};

export default ImageBarComponent;