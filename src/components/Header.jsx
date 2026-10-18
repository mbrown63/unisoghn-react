import "./Header.css";
import logo from "./images/UNISOGHN-LOGO.jpg";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <img src={logo} alt="logo"></img>
            <h1>HI</h1>
            <Navigation />
        </header>
    );
};

export default Header;