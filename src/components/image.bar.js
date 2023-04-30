import ImageLinkComponent from "./image.link";

const ImageBarComponent = () => {
    return (
        <div id="image-bar">
            <ImageLinkComponent src="https://i.imgur.com/eww4OwG.jpg" description="合唱団"/>
            <ImageLinkComponent src="https://i.imgur.com/yd6sGar.jpg" description="お風呂"/>
        </div>
    );
};

export default ImageBarComponent;