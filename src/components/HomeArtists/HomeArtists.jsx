import HomeArtistCard from "../HomeArtistCard/HomeArtistCard";
import imagePath from "../../utils/images";
import "./HomeArtists.css";

const HomeArtists = () => {
    return (
        <div id="artists-section">
            <h2>▶ THE VOICES</h2>
            <h3>OUR ARTISTS</h3>
            <a href="/story-preview">OUR STORY →</a>

            <div id="voice-cards">
                <HomeArtistCard
                    image={imagePath("malik.jpg")}
                    name="Malik"
                    role="Vocals / Production"
                />

                <HomeArtistCard
                    image={imagePath("aria.jpg")}
                    name="Aria"
                    role="Vocals"
                />

                <HomeArtistCard
                    image={imagePath("jordan.jpg")}
                    name="Jordan"
                    role="Vocals / Writing"
                />

                <HomeArtistCard
                    image={imagePath("nia.jpg")}
                    name="Nia"
                    role="Vocals"
                />

                <a href="/artists">VIEW ALL ARTISTS →</a>
            </div>
        </div>
    );
};

export default HomeArtists;