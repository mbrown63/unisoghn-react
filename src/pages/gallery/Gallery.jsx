import GalleryCard from "../../components/gallerycard/GalleryCard";
import imagePath from "../../utils/images";
import "./Gallery.css";

const Gallery = () => {
    return (
        <>
            <section id="gallery">
                <div id="gallery-info">
                    <h2>UNISOGHN/GALLERY</h2>
                    <h3>BEHIND THE SOUND</h3>
                    <p>From the studio to the stage, see the moments behind the music</p>
                </div>
            </section>

            <section id="group">
                <GalleryCard
                    image={imagePath("studioimage.jpg")}
                    title="STUDIO"
                    id="studio-image"
                    description="UNISOGHN brings their ideas together in the studio, turning individual creativity into one sound."
                />

                <GalleryCard
                    image={imagePath("onstageimage.jpg")}
                    title="STAGE"
                    id="stage-image"
                    description="UNISOGHN brings their music to life on stage with powerful vocals, energy, and a strong connection with the crowd."
                />

                <GalleryCard
                    image={imagePath("musicimage.jpg")}
                    title="MUSIC"
                    id="music-image"
                    description="Their songs blend different voices and styles to create music that feels fresh, personal, and connected."
                />

                <GalleryCard
                    image={imagePath("singingtogetherimage.jpg")}
                    title="TOGETHER"
                    id="together-image"
                    description="Each voice brings something different, but together their harmonies create the signature UNISOGHN sound."
                />

                <GalleryCard
                    image={imagePath("outdoors.jpg")}
                    title="OUTDOORS"
                    id="outdoor-image"
                    description="Away from the studio and stage, UNISOGHN is a reflection of four different personalities, styles, and perspectives connected by one vision."
                />
            </section>
        </>
    );
};

export default Gallery;