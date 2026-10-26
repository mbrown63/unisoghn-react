import "./HomeEvents.css";

const HomeEvents = () => {
    return (
        <section id="events">
            <div id="events-info">
                <p>▶ UPCOMING</p>
                <h2>LIVE EVENTS</h2>
                <p>
                    Experience UNISOGHN live.<br />
                    Find a city,grab your tickets.<br />
                    and be part of the sound.
                </p>
                <a href="/events">VIEW ALL EVENTS →</a>
            </div>

            <div id="plan">
                <p>▶ BOOKING</p>
                <h1>BRING THE SOUND</h1>
                <p>
                    Interested in bringing UNISOGHN to your event?<br />
                    Send us an email, and our team will get back to you.
                </p>
                <a href="/booking-preview">BOOK NOW →</a>
            </div>
        </section>
    );
};

export default HomeEvents;