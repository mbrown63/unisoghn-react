const ArtistCard = ({ image, name, role, quote, link }) => {
    return (
        <div className="voice-cards">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{role}</p>
            <span>{quote}</span>
            <a href={link}>VIEW PROFILE →</a>
        </div>
    );
};

export default ArtistCard;