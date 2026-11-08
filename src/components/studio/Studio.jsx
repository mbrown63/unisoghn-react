import "./Studio.css";

const Studio = (props) => {
    return (
        <section className="studio">
            <img
                src={`https://topic-server-014r.onrender.com/images/${props.src}`}
                alt={props.title}
            />

            <div className="studio-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>

                <ul>
                    {props.services.map((service, index)=>(
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default Studio;