const Footer = () => {
    return (
        <footer id="footer">
            <div id="footer-logo-image">
                <img
                    src="/images/footerLOGOimage.jpg"
                    alt="UNISOGHN LOGO"
                />
            </div>

            <div id="footer-links">
                <a href="#">Instagram</a>
                <a href="#">TikTok</a>
                <a href="#">YouTube</a>
                <a href="#">Facebook</a>
            </div>

            <div id="newsletter">
                <div id="newsletter-info">
                    <h4>▶ STAY CONNECTED</h4>
                    <h2>NEWSLETTER</h2>
                    <p>
                        Get updates, new music,<br />and exclusive content.
                    </p>
                </div>

                <form id="newsletter-form">
                    <input
                        type="email"
                        placeholder="Your email address..."
                        required
                    />
                    <button type="submit">→</button>
                </form>
            </div>

            <p>
                &copy; 2026 UNISOGHN<br /> ALL RIGHTS RESERVED
            </p>
        </footer>
    );
};

export default Footer;