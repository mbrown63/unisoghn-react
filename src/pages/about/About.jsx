import imagePath from "../../utils/images";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
    return (
        <>
            <section id="about">
                <div id="about-header">
                    <h1><span>ABOUT</span></h1>
                    <h1>UNISOGHN</h1>
                    <h2>MORE THAN MUSIC.<br />IT'S A MOVEMENT.</h2>
                </div>
            </section>

            <section id="story">
                <div id="story-images">
                    <img src={imagePath("storyimage.jpg")} alt="UNISOGHN story" />
                </div>

                <div id="our-story">
                    <h2>OUR STORY</h2>
                    <p>UNISOGHN is more than a music collective - it's a movement. Built on creativity, resilience, and real stories, we bring people together through sound, culture, and purpose.</p>
                    <p>We're not just artists. We're dreamers, creators, and a community. UNISOGHN represents those who refuse to be boxed in - a space where talent, authenticity, and vision come first.</p>
                    <Link to="/story-preview">THE MOVEMENT →</Link>
                </div>
            </section>

            <section id="values-image">
                <img src={imagePath("valuesimage.jpg")} alt="Our Values" />
            </section>
        </>
    );
};

export default About;