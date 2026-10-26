import ArtistCard from "../../components/artistCard/ArtistCard";
import imagePath from "../../utils/images";
import "./Artists.css";

const Artists = () => {
    return (
        <>
            <section id="vision">
                <div id="one-vision">
                    <h1>THE ARTISTS</h1>
                    <h3>
                        DIFFERENT VOICES.<br />ONE VISION.
                    </h3>
                </div>
            </section>

            <section id="voice">
                <h2>MEET THE ARTISTS</h2>
                <p>FOUR UNIQUE VOICES. DIFFERENT STORIES.SAME MISSION.</p>

                <div id="artists-links">
                    <a href="#">ALL</a>
                    <a href="#">VOCALS</a>
                    <a href="#">PRODUCTION</a>
                    <a href="#">WRITING</a>
                    <a href="#">FEATURED</a>
                </div>

                <div id="voice-card">
                    <ArtistCard
                        image={imagePath("malik.jpg")}
                        name="Malik"
                        role="Vocals / Production"
                        quote="REAL SOUNDS. REAL LIFE."
                        link="/malik"
                    />

                    <ArtistCard
                        image={imagePath("aria.jpg")}
                        name="Aria"
                        role="Vocals"
                        quote="SOUL. POWER. TRUTH."
                        link="/aria"
                    />

                    <ArtistCard
                        image={imagePath("jordan.jpg")}
                        name="Jordan"
                        role="Vocals / Writing"
                        quote="REAL STORIES. LASTING IMPACT."
                        link="/jordan"
                    />

                    <ArtistCard
                        image={imagePath("nia.jpg")}
                        name="Nia"
                        role="Vocals"
                        quote="BEAUTY. STRENGTH. PURPOSE."
                        link="/nia"
                    />
                </div>
            </section>

            <section id="talent">
                <div id="talents-image">
                    <img
                        src={imagePath("talents-image.jpg")} alt="talents image" />
                </div>

                <div id="talent-info">
                    <h2>
                        DIFFERENT TALENTS.<br />SAME PURPOSE.
                    </h2>
                    <p>
                        Each artist brings their own sound.<br /> energy. and perspective - but together.<br /> they create something bigger than<br />any one of us.
                    </p>
                    <a href="/story-preview">OUR STORY →</a>
                </div>
            </section>
        </>
    );
};

export default Artists;