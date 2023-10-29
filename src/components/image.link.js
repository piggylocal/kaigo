import { Link } from "react-router-dom";

const ImageLinkComponent = ({ id, src, description, total, index }) => {
    let animationDuration = 48;
    return (
        <div className="image-link" style={{animation: `image-move ${animationDuration}s linear -${animationDuration / total * index}s infinite`}}>
            <div className="image-link-container">
                <Link to={`/poster/${id}`}>
                    <div className="image-link-image" style={{backgroundImage: src ? `url("${src}")` : ""}}></div>
                </Link>
            </div>
            <div className="image-link-description">{description}</div>
        </div>
    )
};

export default ImageLinkComponent;