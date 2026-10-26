import imagePath from "../../utils/images";
import { Link } from "react-router-dom";
import "./HomeGallery.css";

const HomeGallery = () => {
    return (
        <section id="pictures">
            <div id="picture-gallery">
                <p>▶ GALLERY</p>
                <h2>THROUGH THE LENS</h2>
                <p>
                    From the stage to the studio and everything in between.
                    Explore the moments, memories, and energy that bring
                    UNISOGHN to life.
                </p>

                <Link to="/gallery">VIEW GALLERY →</Link>
            </div>

            <div className="polaroid">
                <img
                    src={imagePath("group-photo.jpg")}
                    alt="UNISOGHN group photo"
                />
                <p>MORE THAN MUSIC</p>
            </div>
        </section>
    );
};

export default HomeGallery;