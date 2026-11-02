import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Booking.css";

const Booking = () => {
    const [sending, setSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setSending(true);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "da8a616d-e0ef-406c-8062-93e04f4002d7");

        const toastId = toast.loading("Sending booking request...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Booking request sent successfully!", { id: toastId });
                form.reset();
            } else {
                toast.error("Booking request did NOT send successfully!", { id: toastId });
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("Booking request did NOT send successfully!", { id: toastId });
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "#080706",
                        color: "#ffffff",
                        border: "1px solid #b51f1f"
                    }
                }}
            />

            <section id="booking">
                <div id="booking-info">
                    <h3>▶ BOOKING</h3>
                    <h1>BRING THE<br />SOUND.</h1>
                    <p>
                        Interested in bringing UNISOGHN to your event?<br />
                        Tell us about it and let's make it happen.
                    </p>
                </div>
            </section>

            <section id="request">
                <div id="request-info">
                    <h4>— GET IN TOUCH</h4>
                    <h2>BOOK UNISOGHN</h2>
                    <p>
                        Ready to bring UNISOGHN to your event?<br />
                        Send us your information and tell us a little<br />
                        about what you're planning.
                    </p>
                    <p>
                        Our team will review your request and<br />
                        get back to you with more information.
                    </p>
                </div>

                <form id="booking-form" onSubmit={onSubmit}>
                    <div className="input">
                        <label htmlFor="name">NAME</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="input">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="input">
                        <label htmlFor="event-type">EVENT TYPE</label>
                        <input type="text" id="event-type" name="event-type" required />
                    </div>

                    <div className="input">
                        <label htmlFor="event-date">EVENT DATE</label>
                        <input type="date" id="event-date" name="event-date" required />
                    </div>

                    <div className="input">
                        <label htmlFor="location">LOCATION</label>
                        <input type="text" id="location" name="location" required />
                    </div>

                    <div className="input">
                        <label htmlFor="details">EVENT DETAILS</label>
                        <textarea id="details" rows="5" name="details" required></textarea>
                    </div>

                    <button id="send-request" type="submit" disabled={sending}>
                        {sending ? "SENDING..." : "SEND REQUEST →"}
                    </button>
                </form>
            </section>
        </>
    );
};

export default Booking;