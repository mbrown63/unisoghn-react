import "./MusicCard.css";

const MusicCard = ({ image, title, type, year, description }) => {
    return (
        <div className="music-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{type} • {year}</p>
            <p>{description}</p>
            <a href="#">LISTEN →</a>
        </div>
    );
};

export default MusicCard;