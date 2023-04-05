import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Wireframing and prototyping</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Content strategy and development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Interaction design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Usability testing</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Responsive web design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Accessibility design and testing</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Front-end web development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Back-end web development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Full-stack web development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Responsive web design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Web application development</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Content strategy and development</p>
                        </li>
                    </ul>
                </article>
                {/* WEB DEVELOPMENT END*/}
                <article className="service">
                    <div className="service__head">
                        <h3>API Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API design and architecture</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API development and testing</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API documentation</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API security and authentication</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API integration services</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>API deployment and hosting</p>
                        </li>
                    </ul>
                </article>
                {/* CONTENT CREATION END */}
            </div>
        </section>
    );
};

export default Services;
