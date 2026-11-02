import { Link } from "react-router-dom";
import "./GalleryCard.css";

const GalleryCard = ({ image, title, description, id, link }) => {
    return (
        <div id={id}>
            {link ? (
                <Link to={link} className="gallery-image-link">
                    <img src={image} alt={title} />
                </Link>
            ) : (
                <img src={image} alt={title} />
            )}

            <div className="gallery-caption">
                <h4>— {title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GalleryCard;