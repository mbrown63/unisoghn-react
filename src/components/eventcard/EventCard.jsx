const EventCard = ({ date, year, city, venue, time }) => {
    return (
        <div className="tour">
            <p>{date}</p>
            <p className="year">{year}</p>
            <p className="show-city">{city}</p>
            <p>{venue}</p>
            <p className="tour-time">{time}</p>
            <a href="#">GET TICKETS</a>
        </div>
    );
};

export default EventCard;