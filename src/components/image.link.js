const ImageLinkComponent = ({ src, description, total, index }) => {
    let animationDuration = 48;
    return (
        <div className="image-link" style={{animation: `image-move ${animationDuration}s linear -${animationDuration / total * index}s infinite`}}>
            <div className="image-link-container">
                <div className="image-link-image" style={{backgroundImage: src ? `url("${src}")` : ""}}></div>
            </div>
            <div className="image-link-description">{description}</div>
        </div>
    )
};

export default ImageLinkComponent;