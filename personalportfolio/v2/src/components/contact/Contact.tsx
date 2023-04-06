import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageAltDots } from "react-icons/bi";

const data = [
    {
        id: 1,
        icon: <HiOutlineMail />,
        title: "Email",
        text: "annyeager@gmail.com",
        link: "mailto:ayeager@gmail.com",
        linkMessage: "Email Me",
    },
    {
        id: 1,
        icon: <BiMessageAltDots />,
        title: "Message",
        text: "Linked In",
        link: "mailto:ayeager@gmail.com",
        linkMessage: "Notify Me",
    },
];

const contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="conatiner contact__container">
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
                <form action=""></form>
            </div>
        </section>
    );
};

export default contact;
