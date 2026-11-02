import { motion } from "motion/react";
import "./Hero.css";
import hero from "./images/hero-image.jpg";

const Hero = () => {
    return (
        <section className="hero">
            <motion.div
                className="hero-info"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p>FOUR VOICES.<br />ONE VISION.</p>
                <h2>UNISOGHN</h2>
                <h3>IN HARMONY</h3>
                <a href="#music">LISTEN NOW →</a>
            </motion.div>

            <img src={hero} alt="UNISOGHN HEADER"></img>
        </section>
    );
};

export default Hero;