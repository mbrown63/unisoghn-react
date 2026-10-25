import HomeSong from "../homeSong/HomeSong";

const HomeMusic = () => {
    return (
        <div id="the-sound">
            <div id="sound-top">
                <div id="sound-info">
                    <p>▶ MUSIC</p>
                    <h1>THE SOUND</h1>
                    <p>
                        A blend of emootion, energy, and truth<br />
                        Explore our latest releases, and feel<br />
                        the movement.
                    </p>
                    <a href="/music">LISTEN NOW →</a>
                </div>

                <div id="album-cover-image">
                    <img src="/images/albumcover.jpg" alt="Album Cover" />
                </div>
            </div>

            <div id="audio-player">
                <button id="sound-play-button">▶</button>
                <div id="waveform" />
            </div>

            <div id="music-list">
                <div id="music-line1" />

                <HomeSong
                    number="01"
                    title="IN HARMONY"
                    duration="3:56"
                />

                <div id="music-line2" />

                <HomeSong
                    number="02"
                    title="SAME VISION"
                    duration="3:42"
                />

                <div id="music-line3" />

                <HomeSong
                    number="03"
                    title="AFTER HOURS"
                    duration="4:01"
                />

                <div id="music-line4" />

                <HomeSong
                    number="04"
                    title="ONE SOUND"
                    duration="3:35"
                />

                <div id="music-line5" />

                <HomeSong
                    number="05"
                    title="LIVE LOUDER"
                    duration="3:15"
                />
                
            </div>
        </div>
    );
};

export default HomeMusic;