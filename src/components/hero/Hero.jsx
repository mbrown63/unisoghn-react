import "./Hero.css";
import hero from "./images/hero-image.jpg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-info">
                <p>FOUR VOICES.<br />ONE VISION.</p>
                <h2>UNISOGHN</h2>
                <h3>IN HARMONY</h3>
                <a href="#music">LISTEN NOW →</a>
            </div>
            <img src={hero} alt="UNISOGHN HEADER"></img>
        </section>
    )

};

export default Hero;