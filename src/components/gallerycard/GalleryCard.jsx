import "./GalleryCard.css";

const GalleryCard = ({ image, title, description, id }) => {
    return (
        <div id={id}>
            <img src={image} alt={title} />

            <div className="gallery-caption">
                <h4>— {title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GalleryCard;