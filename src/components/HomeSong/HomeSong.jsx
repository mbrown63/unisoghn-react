const HomeSong = ({ number, title, duration }) => {
    return (
        <div className="music">
            <p>{number}</p>
            <p className="music-name">{title}</p>
            <p className="music-time">{duration}</p>
        </div>
    );
};

export default HomeSong;