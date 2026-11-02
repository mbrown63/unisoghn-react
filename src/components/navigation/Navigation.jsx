import "./Navigation.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="main-nav">
            <button
                id="toggle-nav"
                onClick={toggleNav}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul className={menuOpen ? "nav-open" : ""}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                <li><Link to="/music" onClick={() => setMenuOpen(false)}>Music</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
                <li><Link to="/artists" onClick={() => setMenuOpen(false)}>Artists</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;