import GalleryCard from "../../components/gallerycard/GalleryCard";

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
                    image="/images/studioimage.jpg"
                    title="STUDIO"
                    id="studio-image"
                    description="UNISOGHN brings their ideas together in the studio, turning individual creativity into one sound."
                />
                <GalleryCard
                    image="/images/onstageimage.jpg"
                    title="STAGE"
                    id="stage-image"
                    description="UNISOGHN brings their music to life on stage with powerful vocals, energy, and a strong connection with the crowd."
                />
                <GalleryCard
                    image="/images/musicimage.jpg"
                    title="MUSIC"
                    id="music-image"
                    description="Their songs blend different voices and styles to create music that feels fresh, personal, and connected."
                />
                <GalleryCard
                    image="/images/singingtogetherimage.jpg"
                    title="TOGETHER"
                    id="together-image"
                    description="Each voice brings something different, but together their harmonies create the signature UNISOGHN sound."
                />
                <GalleryCard
                    image="/images/outdoors.jpg"
                    title="OUTDOOR"
                    id="outdoor-image"
                    description="Away from the studio and stage, UNISOGHN is a reflection of four different personalities, styles, and perspectives connected by one vision."
                />
            </section>
        </>
    );
};

export default Gallery;