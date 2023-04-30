import ImageLinkComponent from "./image.link";

const ImageBarComponent = () => {
    return (
        <div id="image-bar">
            <ImageLinkComponent src="https://i.imgur.com/gehrpNR.jpg" description="合唱団" />
            <ImageLinkComponent src="https://i.imgur.com/5KcZQvl.jpg" description="お風呂" />
        </div>
    );
};

export default ImageBarComponent;