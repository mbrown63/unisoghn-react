import MusicCard from "../../components/musiccard/MusicCard";
import imagePath from "../../utils/images";
import "./Music.css";

const Music = () => {
    const albums = [
        {
            image: "the-sound.jpg",
            title: "THE SOUND",
            type: "SINGLE",
            year: "2025",
            description: "The latest single from UNISOGHN."
        },
        {
            image: "more-than-music.jpg",
            title: "MORE THAN MUSIC",
            type: "ALBUM",
            year: "2024",
            description: "The Album that supported UNISOGHN."
        },
        {
            image: "UNISOGHN.jpg",
            title: "UNISOGHN",
            type: "EP",
            year: "2023",
            description: "A defining EP that introduces the unique style and identity of UNISOGHN."
        },
        {
            image: "fire-line.jpg",
            title: "FIRE LINE",
            type: "SINGLE",
            year: "2023",
            description: "An energetic single driven by bold sounds, emotion, and intensity."
        },
        {
            image: "LateNights.jpg",
            title: "LATE NIGHTS",
            type: "EP",
            year: "2021",
            description: "A late-night release filled with smooth sounds and reflective emotions."
        },
        {
            image: "ChasingMore.jpg",
            title: "CHASING MORE",
            type: "SINGLE",
            year: "2021",
            description: "A high-energy release about pushing forward and refusing to be held back."
        },
        {
            image: "DifferentWays.jpg",
            title: "DIFFERENT WAYS",
            type: "SINGLE",
            year: "2020",
            description: "A personal project exploring change, uncertainty, and finding your way."
        },
        {
            image: "TheBeginning.jpg",
            title: "THE BEGINNING",
            type: "EP",
            year: "2019",
            description: "An early release that represents where the UNISOGHN journey began."
        }
    ];

    const tracks = [
        { number: "01", title: "THE SOUND", duration: "3:42" },
        { number: "02", title: "MORE THAN A SOUND", duration: "3:26" },
        { number: "03", title: "LIVE LOUDER", duration: "3:15" },
        { number: "04", title: "UNISOGHN", duration: "3:48" }
    ];

    return (
        <>
            <section id="music-hero">
                <div id="music-hero-text">
                    <p>THE</p>
                    <h2>SOUND</h2>
                    <p>REAL STORIES. RAW EMOTIONS.</p>
                    <p>UNISOGHN.</p>
                </div>
            </section>

            <section id="featured-release">
                <div id="featured-image">
                    <h2>FEATURED RELEASE</h2>
                    <img
                        src={imagePath("the-sound.jpg")}
                        alt="The Sound album cover"
                    />
                </div>

                <div id="featured-info">
                    <h2>THE SOUND</h2>
                    <p>Latest Single • 2025</p>

                    <div id="music-player">
                        <div id="player-bar">
                            <button id="play-button">▶</button>
                            <span id="current-time">0:00</span>
                            <div id="music-waveform"></div>
                            <span id="total-time">3:42</span>
                        </div>

                        <div id="track-list">
                            {tracks.map((track) => (
                                <div className="track" key={track.number}>
                                    <span>{track.number}</span>
                                    <span>{track.title}</span>
                                    <span>{track.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="albums">
                <h2>ALBUMS & EPs</h2>

                <div id="album-container">
                    {albums.map((album) => (
                        <MusicCard
                            key={album.title}
                            image={imagePath(album.image)}
                            title={album.title}
                            type={album.type}
                            year={album.year}
                            description={album.description}
                        />
                    ))}
                </div>
            </section>

            <section id="release-archive">
                <h2>RELEASE ARCHIVE</h2>

                {albums.map((album) => (
                    <div className="release" key={album.title}>
                        <span>{album.year}</span>
                        <span>{album.title} ({album.type === "ALBUM" ? "Album" : album.type === "EP" ? "EP" : "Single"})</span>
                    </div>
                ))}

                <a className="archive-button" href="#albums">
                    VIEW ALL RELEASES →
                </a>
            </section>
        </>
    );
};

export default Music;