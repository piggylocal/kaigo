const ImageLinkComponent = ({ src, description }) => {
    return (
        <div className="image-link">
            <div className="image-link-container">
                <div className="image-link-image" style={{backgroundImage: `url("${src}")`}}></div>
            </div>
            <div className="image-link-description">{description}</div>
        </div>
    )
};

export default ImageLinkComponent;