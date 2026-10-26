import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/artists">Artists</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;