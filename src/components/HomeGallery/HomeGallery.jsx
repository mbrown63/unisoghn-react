const HomeGallery = () => {
    return (
        <section id="pictures">
            <div id="picture-gallery">
                <p>▶ GALLERY</p>
                <h2>THROUGH THE LENS</h2>
                <p>
                    From the stage to the studio and everything in between. Explore the moments, memories, and energy that bring UNISOGHN to life.
                </p>
                <a href="/gallery">VIEW GALLERY →</a>
            </div>

            <div className="polaroid">
                <img src="/images/group-photo.jpg" alt="UNISOGHN group photo" />
                <p>MORE THAN MUSIC</p>
            </div>
        </section>
    );
};

export default HomeGallery;