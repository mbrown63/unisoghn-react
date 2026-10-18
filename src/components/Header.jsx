import "./Header.css";
import logo from "./images/UNISOGHN-LOGO.jpg";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <img src={logo} alt="logo"></img>
            <Navigation />
            <div className="social-icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </header>
    );
};

export default Header;