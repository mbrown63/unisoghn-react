import "./Preview.css";

const Preview = () => {
    return (
        <main id="preview">
            <h2>BEHIND THE SOUND</h2>

            <div id="preview-video">
                <iframe
                    src="https://www.youtube.com/embed/oLDz5HXCNeU"
                    title="UNISOGHN Behind The Sound"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </main>
    );
};

export default Preview;