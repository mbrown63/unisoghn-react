import Hero from "../../components/hero/Hero";
import HomeArtists from "../../components/homeArtists/HomeArtists";
import HomeMusic from "../../components/homeMusic/HomeMusic";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import HomeEvents from "../../components/HomeEvents/HomeEvents";
import HomeStory from "../../components/HomeStory/HomeStory";

const Home = () => {
    return (
        <div id="home">
            <Hero />

            <section id="middle">
                <HomeArtists />
                <HomeMusic />
                <HomeGallery />
            </section>

            <HomeEvents />

            <HomeStory />
        </div>
    );
};

export default Home;