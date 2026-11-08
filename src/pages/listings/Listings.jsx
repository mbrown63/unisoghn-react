import "./Listings.css";
import {useState, useEffect} from "react";
import axios from "axios";

import Studio from "../../components/studio/Studio";

const Listings = () => {
    const [studios, setStudios] = useState([]);

    //after the page has loaded
    useEffect(()=>{
        const loadStudios = async()=>{
            const response = await axios.get("https://topic-server-014r.onrender.com/api/studios");
            setStudios(response.data);
        };

        loadStudios();
    },[]);

    return (
        <div id="listings">
            <h2>Our Studios</h2>
            <p>Explore the creative spaces and services offered by UNISOGHN.</p>

            <div className="studio-list">
                {studios.map((studio)=>(
                    <Studio
                        key={studio._id}
                        title={studio.name}
                        description={studio.description}
                        services={studio.services}
                        src={studio.main_image}
                    />
                ))}
            </div>
        </div>
    )
};

export default Listings;