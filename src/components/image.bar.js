import ImageLinkComponent from "./image.link";

const ImageBarComponent = () => {
    return (
        <div id="image-bar">
            <ImageLinkComponent src="https://i.imgur.com/UwlOb17.jpg" description="合唱団" />
            <ImageLinkComponent src="https://i.imgur.com/QF8kiaI.jpg" description="お風呂" />
        </div>
    );
};

export default ImageBarComponent;