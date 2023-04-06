import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageAltDots } from "react-icons/bi";
import emailjs from "emailjs-com";
const data = [
    {
        id: 1,
        icon: <HiOutlineMail className="contact__option-icon" />,
        title: "Email",
        text: "annyeager@gmail.com",
        link: "mailto:ayeager@gmail.com",
        linkMessage: "Email Me",
    },
    {
        id: 2,
        icon: <BiMessageAltDots className="contact__option-icon" />,
        title: "Message",
        text: "Linked In",
        link: "mailto:ayeager@gmail.com",
        linkMessage: "Notify Me",
    },
];

const contact = () => {
    const form = useRef("");
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    {data.map(
                        ({ id, icon, title, text, link, linkMessage }) => {
                            return (
                                <article key={id} className="contact__option">
                                    {icon}
                                    <h4>{title}</h4>
                                    <h5>{text}</h5>
                                    <a href={link}>{linkMessage}</a>
                                </article>
                            );
                        }
                    )}
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows={7}
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default contact;
