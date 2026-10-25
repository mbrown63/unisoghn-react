const HomeArtistCard = ({ image, name, role }) => {
    return (
        <div className="voice-card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{role}</p>
        </div>
    );
};

export default HomeArtistCard;