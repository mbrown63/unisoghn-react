import { useState, useRef } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ song, home = false }) => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = async () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            try {
                await audioRef.current.play();
            } catch (error) {
                console.error("Audio could not play:", error);
            }
        }
    };

    const formatTime = (time) => {
        if (!Number.isFinite(time)) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const skipTo = (event) => {
        if (!duration) return;

        const rectangle = event.currentTarget.getBoundingClientRect();
        const position = (event.clientX - rectangle.left) / rectangle.width;

        audioRef.current.currentTime = Math.max(0, Math.min(position, 1)) * duration;
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className={home ? "audio-player home-player" : "audio-player music-page-player"}>
            <audio
                ref={audioRef}
                src={`${import.meta.env.BASE_URL}audio/${song}`}
                onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                onDurationChange={() => setDuration(audioRef.current.duration)}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
            />

            <button
                className="audio-play-button"
                onClick={togglePlay}
                aria-label={playing ? "Pause music" : "Play music"}
            >
                {playing ? "Ⅱ" : "▶"}
            </button>

            {!home && <span className="audio-time">{formatTime(currentTime)}</span>}

            <div
                className="audio-waveform"
                onClick={skipTo}
                role="slider"
                tabIndex={0}
                aria-label="Audio progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                onKeyDown={(event) => {
                    if (!audioRef.current || !duration) return;

                    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                        event.preventDefault();
                        const change = event.key === "ArrowRight" ? 5 : -5;
                        audioRef.current.currentTime = Math.max(0, Math.min(currentTime + change, duration));
                    }
                }}
            >
                <div className="audio-progress" style={{ width: `${progress}%` }} />
            </div>

            {!home && <span className="audio-time">{formatTime(duration)}</span>}
        </div>
    );
};

export default AudioPlayer;