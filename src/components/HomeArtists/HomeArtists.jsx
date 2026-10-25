import HomeArtistCard from "./homeArtistCard/HomeArtistCard";

const HomeArtists = () => {
    return (
        <div id="artists-section">
            <h2>▶ THE VOICES</h2>
            <h3>OUR ARTISTS</h3>
            <a href="/story-preview">OUR STORY→</a>

            <div id="voice-cards">
                <HomeArtistCard
                    image="/images/malik.jpg"
                    name="Malik"
                    role="Vocals / Production"
                />

                <HomeArtistCard
                    image="/images/aria.jpg"
                    name="Aria"
                    role="Vocals"
                />

                <HomeArtistCard
                    image="/images/jordan.jpg"
                    name="Jordan"
                    role="Vocals / Writing"
                />

                <HomeArtistCard
                    image="/images/nia.jpg"
                    name="Nia"
                    role="Vocals"
                />

                <a href="/artists">VIEW ALL ARTISTS →</a>
            </div>
        </div>
    );
};

export default HomeArtists;