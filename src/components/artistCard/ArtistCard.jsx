import { Link } from "react-router-dom";
import "./ArtistCard.css";

const ArtistCard = ({ image, name, role, quote, link }) => {
    return (
        <div className="voice-cards">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{role}</p>
            <span>{quote}</span>
            <Link to={link}>VIEW PROFILE →</Link>
        </div>
    );
};

export default ArtistCard;