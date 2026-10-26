import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./Layout";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Music from "./pages/music/Music";
import About from "./pages/about/About";
import Events from "./pages/events/Events";
import Artists from "./pages/artists/Artists";
import Malik from "./pages/malik/Malik";
import Listings from "./pages/listings/Listings";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="music" element={<Music />} />
                    <Route path="about" element={<About />} />
                    <Route path="events" element={<Events />} />
                    <Route path="artists" element={<Artists />} />
                    <Route path="malik" element={<Malik />} />
                    <Route path="listings" element={<Listings />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);