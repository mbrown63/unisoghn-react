import EventCard from "../../components/eventcard/EventCard";
import imagePath from "../../utils/images";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
    return (
        <>
            <section id="live">
                <div id="live-info">
                    <h1>LIVE EVENTS</h1>
                    <p>
                        Experience UNISOGHN live.<br />
                        Find a city, grab your tickets, and be part of the sound
                    </p>
                </div>
            </section>

            <section id="tour">
                <div id="tour-info">
                    <h2>UPCOMING SHOWS</h2>
                    <p>FIND US IN YOUR CITY</p>

                    <div id="tour-dates" />

                    <EventCard
                        date="SEP 20"
                        year="2026"
                        city="COLUMBIA, SC"
                        venue="THE SENATE"
                        time="7:30 PM"
                    />

                    <EventCard
                        date="OCT 03"
                        year="2026"
                        city="ATLANTA, GA"
                        venue="THE MASQUERADE"
                        time="8:00 PM"
                    />

                    <EventCard
                        date="OCT 15"
                        year="2026"
                        city="CHARLOTTE, NC"
                        venue="THE FILLMORE"
                        time="7:30 PM"
                    />

                    <EventCard
                        date="NOV 10"
                        year="2026"
                        city="HOUSTON, TX"
                        venue="HOUSE OF BLUES"
                        time="8:00 PM"
                    />

                    <EventCard
                        date="DEC 6"
                        year="2026"
                        city="CHICAGO, IL"
                        venue="HOUSE OF CHILL"
                        time="7:30 PM"
                    />

                    <div id="view-galleryimage">
                        <img
                            src={imagePath("view-galleryimage.jpg")}
                            alt="UNISOGHN group"
                        />
                    </div>
                </div>

                <section id="later">
                    <div id="past-events">
                        <h2>PAST EVENTS</h2>
                        <p>CHECK OUT WHERE WE'VE BEEN</p>
                        <Link to="/gallery">VIEW GALLERY →</Link>
                    </div>

                    <div id="book">
                        <h2>BOOKING</h2>
                        <p>
                            Interested in booking UNISOGHN for your event?
                            Let's make it happen.
                        </p>
                        <Link to="/booking-preview">BOOK NOW →</Link>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Events;